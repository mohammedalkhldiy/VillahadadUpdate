const fs = require('fs');
const path = require('path');

const asarPath = '/tmp/app.asar';
const destPath = 'package.json';

console.log('Starting extraction...');

try {
  if (!fs.existsSync(asarPath)) {
    console.error('ASAR file not found at ' + asarPath);
    process.exit(1);
  }

  const fd = fs.openSync(asarPath, 'r');
  const sizeBuf = Buffer.alloc(8);
  fs.readSync(fd, sizeBuf, 0, 8, 0);

  // Electron ASAR header size is at offset 4 (UInt32LE)
  const headerSize = sizeBuf.readUInt32LE(4);
  const headerJsonSize = headerSize - 8; // Sometimes -8, sometimes strictly headerSize depending on specific pickle format
  // Actually, let's just read the header string. 
  // The header starts at offset 8 (size 4 + header_size_int 4? No).
  // Chromium Pickle:
  // 4 bytes: payload size
  // 4 bytes: check = header_size
  // header_size bytes: header JSON
  
  // So readUInt32LE(4) gives strict size of JSON header in bytes.
  
  const jsonSize = sizeBuf.readUInt32LE(4); 
  console.log('Header size:', jsonSize);
  
  const headerBuf = Buffer.alloc(jsonSize);
  fs.readSync(fd, headerBuf, 0, jsonSize, 16); // Header starts at 16? No...
  // Wait, standard ASAR:
  // 0: 4 bytes = 4
  // 4: 4 bytes = size of header + 8
  // 8: 4 bytes = size of header + 4
  // 12: 4 bytes = size of header
  // 16: string header
  
  // So actually, the JSON string starts deeper.
  // Let's try to find "{" near the beginning.
  
  const chunk = Buffer.alloc(1024);
  fs.readSync(fd, chunk, 0, 1024, 0);
  const startIdx = chunk.indexOf('{');
  if (startIdx === -1) {
      console.error('Could not find JSON header start');
      process.exit(1);
  }
  
  // Now we need to know WHERE the JSON ends.
  // We can try to guess or use the size we read.
  const jsonContent = chunk.slice(startIdx).toString('utf8');
  // It's not the full JSON, but let's try to just use 'npx' if this fails.
  // But wait! If I just search for "package.json" in the binary, I can find the entry!
  
  // Simplified manual read logic:
  // Read using known Electron format:
  // | UInt32: 4 | UInt32: size+8 | UInt32: size+4 | UInt32: size | String: JSON |
  
  const actualHeaderSize = chunk.readUInt32LE(12);
  console.log('Detected header JSON size:', actualHeaderSize);
  
  const fullHeaderBuf = Buffer.alloc(actualHeaderSize);
  fs.readSync(fd, fullHeaderBuf, 0, actualHeaderSize, 16);
  
  const header = JSON.parse(fullHeaderBuf.toString('utf8'));
  
  if (header.files && header.files['package.json']) {
      const entry = header.files['package.json'];
      const offset = parseInt(entry.offset);
      const size = entry.size;
      console.log(`Found package.json: offset=${offset}, size=${size}`);
      
      // Data starts after header and padding?
      // Usually data starts at header_end aligned to something?
      // Data offset is Relative to the end of the header.
      // Header end is at 16 + actualHeaderSize.
      const dataStart = 16 + actualHeaderSize;
      
      const fileBuf = Buffer.alloc(size);
      fs.readSync(fd, fileBuf, 0, size, dataStart + offset);
      
      fs.writeFileSync(destPath, fileBuf);
      console.log('Extracted package.json successfully');
  } else {
      console.error('package.json not found in header');
  }
  
  fs.closeSync(fd);
} catch (e) {
  console.error('Exception:', e);
}
