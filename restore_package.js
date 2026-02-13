const fs = require('fs');
const path = require('path');

const asarPath = 'release/mac-arm64/VillaHadad.app/Contents/Resources/app.asar';
const destPath = 'package.json';

try {
  const fd = fs.openSync(asarPath, 'r');
  const sizeBuf = Buffer.alloc(8);
  fs.readSync(fd, sizeBuf, 0, 8, 0);

  // The simplified ASAR format:
  // | 4 bytes: payload size | 4 bytes: JSON header size | JSON header | files... |
  // Actually, usually it is:
  // 4 bytes: 4 (size of header size)
  // 4 bytes: header size + 8 ?? 
  // Electron ASAR format is a bit specific. 
  // Standard: 
  //  uint32 size of header
  //  uint32 header size
  //  header json
  
  // Let's try reading the first 16 bytes to inspect.
  // Actually, let's use a simpler approach if possible.
  // But without 'asar' package, we have to parse.
  
  // Reading header size from bytes 4-7 (Little Endian)
  const headerSize = sizeBuf.readUInt32LE(4) - 8; // Adjust based on format quirks
  // Wait, let's look at standard docs or just try reading a chunk.
  
  // Chromium Pickle format...
  // readable-stream/asar uses:
  // size = readUInt32LE(4)
  // header = read(8, size)
  
  const headerSizeActual = sizeBuf.readUInt32LE(4);
  const jsonBuf = Buffer.alloc(headerSizeActual);
  fs.readSync(fd, jsonBuf, 0, headerSizeActual, 8); // Start at 8
  
  const header = JSON.parse(jsonBuf.toString('utf8'));
  
  // Find package.json
  // It should be at root
  if (header.files && header.files['package.json']) {
    const info = header.files['package.json'];
    const offset = parseInt(info.offset);
    const size = info.size;
    
    // Data starts after header
    const dataStart = 8 + headerSizeActual;
    const fileBuf = Buffer.alloc(size);
    fs.readSync(fd, fileBuf, 0, size, dataStart + offset);
    
    fs.writeFileSync(destPath, fileBuf);
    console.log(`Successfully extracted package.json (${size} bytes)`);
    console.log(fileBuf.toString('utf8'));
  } else {
    console.error('package.json not found in ASAR header');
    console.log(JSON.stringify(header.files, null, 2)); // Debug
  }
  
  fs.closeSync(fd);
} catch (e) {
  console.error('Error:', e);
}
