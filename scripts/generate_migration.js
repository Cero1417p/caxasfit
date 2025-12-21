
const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '../config/products.ts');
let content = fs.readFileSync(productsPath, 'utf8');

const start = content.indexOf('= [');
const end = content.lastIndexOf(']');

if (start === -1 || end === -1) {
    console.error("Could not find array boundaries");
    process.exit(1);
}

// start points to '=', so start + 1 is ' ' (maybe), find the first '[' after start
const arrayStart = content.indexOf('[', start);
const jsonContent = content.substring(arrayStart, end + 1);

let products;
try {
    products = eval(jsonContent);
} catch (e) {
    console.error("Error parsing content:", e);
    console.log("Start:", jsonContent.substring(0, 50));
    process.exit(1);
}

function slugify(text) {
    return text.toString().toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") 
        .replace(/\s+/g, '-')           
        .replace(/[^\w\-]+/g, '')       
        .replace(/\-\-+/g, '-')         
        .replace(/^-+/, '')             
        .replace(/-+$/, '');            
}

let sql = `
DO $$
DECLARE
    v_cat_id UUID;
    v_prod_id UUID;
BEGIN
`;

products.forEach(p => {
    const catSlug = slugify(p.category);
    const catName = p.category.replace(/'/g, "''");
    const brand = p.brand.replace(/'/g, "''");
    const name = p.name.replace(/'/g, "''");

    sql += `
    -- Category: ${catName}
    SELECT id INTO v_cat_id FROM categories WHERE slug = '${catSlug}';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('${catName}', '${catSlug}') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: ${name}
    INSERT INTO products (brand, name, category_id) VALUES ('${brand}', '${name}', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    `;

    p.variants.forEach(v => {
        const content = v.content ? v.content.replace(/'/g, "''") : '';
        const flavor = v.flavor ? v.flavor.replace(/'/g, "''") : '';
        const image = v.image ? v.image.replace(/'/g, "''") : '';

        if (v.price_trainer === undefined || v.price_public === undefined) {
            console.error(`Missing price for ${p.name}`);
        }

        sql += `INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '${content}'::text, '${flavor}'::text, ${v.price_trainer}, ${v.price_public}, '${image}'::text);\n    `;
    });
});

sql += `
END $$;
`;

fs.writeFileSync(path.join(__dirname, 'seed_products.sql'), sql);
console.log("SQL generated at scripts/seed_products.sql");
