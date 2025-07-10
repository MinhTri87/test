const fs = require('fs');
const path = require('path');

let rootFolder = 'D:/test/assets/post-excerpts';
let outputFile = 'D:/test/assets/dichvukhacExcerpt.json';

const data = { folders: [] };

fs.readdirSync(rootFolder).forEach(subfolder => {
  const subPath = path.join(rootFolder, subfolder);
  if (fs.statSync(subPath).isDirectory()) {
    data.folders.push(subfolder);
    data[subfolder] = [];

    fs.readdirSync(subPath).forEach(file => {
      if (file.toLowerCase().endsWith('.jpg')) {
        data[subfolder].push(file);
      }
    });
  }
});

fs.writeFileSync(outputFile, JSON.stringify(data, null, 2));
console.log(`✅ Created ${outputFile} with folders:`, data.folders);
