const fs = require('fs');
const path = require('path');

const asarPath = '/tmp/app.asar';

console.log('Reading file list...');

try {
  if (!fs.existsSync(asarPath)) {
    console.error('ASAR file not found at ' + asarPath);
    process.exit(1);
  }

  const fd = fs.openSync(asarPath, 'r');
  const sizeBuf = Buffer.alloc(8);
  fs.readSync(fd, sizeBuf, 0, 8, 0);

  const headerSize = sizeBuf.readUInt32LE(4);
  const jsonSize = sizeBuf.readUInt32LE(4); 
  
  const chunk = Buffer.alloc(1024);
  fs.readSync(fd, chunk, 0, 1024, 0);
  const startIdx = chunk.indexOf('{');
  
  const actualHeaderSize = chunk.readUInt32LE(12);
  
  const fullHeaderBuf = Buffer.alloc(actualHeaderSize);
  fs.readSync(fd, fullHeaderBuf, 0, actualHeaderSize, 16);
  
  const header = JSON.parse(fullHeaderBuf.toString('utf8'));
  
  function listFiles(node, prefix = '') {
      for (const key in node) {
          if (node[key].files) {
              listFiles(node[key].files, prefix + key + '/');
          } else {
              if (prefix === '') console.log(key); // Root files
          }
      }
  }
  
  if (header.files) {
      listFiles(header.files);
  }
  
  fs.closeSync(fd);
} catch (e) {
  console.error('Exception:', e);
}
