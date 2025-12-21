
const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '../config/products.ts');
let content = fs.readFileSync(productsPath, 'utf8');

// Remove interface definition
content = content.replace(/export interface Product \{[\s\S]*?\}/, '');

// Remove type annotation
content = content.replace(/: Product\[\]/g, '');

// Remove export statement
content = content.replace(/export \{ products \};/, '');

// Find the start of the array
const start = content.indexOf('const products = [');
if (start === -1) {
    // try with types if regex failed slightly
    // actually, let's just eval the array part.
}

// Simple hack: replace the variable declaration with valid JS and log it
content = content.replace(/const products\s*=\s*/, 'const products = ');

// wrap in a function to execute
const code = `
    ${content}
    console.log(JSON.stringify(products));
`;

try {
    eval(code);
} catch (e) {
    console.error("Error parsing:", e);
}
