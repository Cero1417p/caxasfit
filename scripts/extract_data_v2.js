
const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '../config/products.ts');
let content = fs.readFileSync(productsPath, 'utf8');

content = content.replace(/export interface Product \{[\s\S]*?\}/, '');
content = content.replace(/: Product\[\]/g, '');
content = content.replace(/export \{ products \};/, '');
content = content.trim();

// Ensure it starts with const products =
if (content.indexOf('const products =') === -1) {
    console.error("Could not find array start");
    console.log(content.substring(0, 100));
    process.exit(1);
}

// remove "const products =" and trailing semicolon
const jsonContent = content.replace(/const products\s*=\s*/, '').replace(/;\s*$/, '');

// Fix keys that are not quoted? In the file they are quoted: "id": "001"
// But the wrapper object keys might not be?
// The file has:
// {
//     "id": "001",
//     ...
//     "variants": [ ... ]
// }
// This looks like valid JSON if I just take the array part.
// But wait, are the keys quoted?
// In the view_file output:
// 17:     "id": "001",
// It seems yes.

console.log(jsonContent);
