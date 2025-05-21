const fs = require('fs');
const path = require('path');

const root = './products';
const result = [];

fs.readdirSync(root).forEach(folder => {
    const dir = path.join(root, folder);
    if (fs.statSync(dir).isDirectory()) {
        fs.readdirSync(dir).forEach(file => {
            if (file.endsWith('.jpg')) {
                result.push(`products/${folder}/${file}`);
            }
        });
    }
});

fs.writeFileSync('products/products.json', JSON.stringify(result, null, 2));
console.log('products.json created');
