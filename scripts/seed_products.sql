
DO $$
DECLARE
    v_cat_id UUID;
    v_prod_id UUID;
BEGIN

    -- Category: Proteína
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'proteina';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Proteína', 'proteina') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: Mutant Whey
    INSERT INTO products (brand, name, category_id) VALUES ('Mutant', 'Mutant Whey', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '2lbs'::text, 'Chocolate y Vainilla'::text, 119, 159, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764901630/prod_pag1_0_uyqj4s.jpg'::text);
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '5lbs'::text, 'Chocolate y Vainilla'::text, 229, 299, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764901695/prod_pag1_1_wa0j4o.jpg'::text);
    
    -- Category: Proteína
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'proteina';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Proteína', 'proteina') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: Gold Standard Whey
    INSERT INTO products (brand, name, category_id) VALUES ('Optimum Nutrition', 'Gold Standard Whey', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '5lbs'::text, 'Chocolate y Vainilla'::text, 329, 369, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764902306/prod_pag2_2_pelhma.jpg'::text);
    
    -- Category: Proteína
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'proteina';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Proteína', 'proteina') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: Carnivor Protein
    INSERT INTO products (brand, name, category_id) VALUES ('MuscleMeds', 'Carnivor Protein', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '4lbs'::text, 'Standard'::text, 259, 309, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764902333/prod_pag2_3_thflyn.jpg'::text);
    
    -- Category: Proteína
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'proteina';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Proteína', 'proteina') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: Prostar Whey
    INSERT INTO products (brand, name, category_id) VALUES ('Ultimate Nutrition', 'Prostar Whey', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '5lbs'::text, 'Chocolate y Vainilla'::text, 249, 299, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764902374/prod_pag2_4_zhoffy.jpg'::text);
    
    -- Category: Proteína
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'proteina';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Proteína', 'proteina') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: Iso Phorm
    INSERT INTO products (brand, name, category_id) VALUES ('Dragon Pharma', 'Iso Phorm', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '5lbs'::text, 'Chocolate y Vainilla'::text, 349, 399, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764902644/prod_pag3_5_jfoqam.jpg'::text);
    
    -- Category: Proteína
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'proteina';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Proteína', 'proteina') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: Isolate 1000
    INSERT INTO products (brand, name, category_id) VALUES ('P-Out', 'Isolate 1000', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '5lbs'::text, 'Chocolate, Vainilla y Cookies'::text, 309, 359, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764902689/prod_pag3_6_azqdal.jpg'::text);
    
    -- Category: Proteína
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'proteina';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Proteína', 'proteina') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: Isoject
    INSERT INTO products (brand, name, category_id) VALUES ('Evogen', 'Isoject', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '2lbs'::text, 'Chocolate, cookies y churro'::text, 189, 229, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764902719/prod_pag3_7_i1kxxe.jpg'::text);
    
    -- Category: Proteína
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'proteina';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Proteína', 'proteina') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: ISO XP
    INSERT INTO products (brand, name, category_id) VALUES ('Applied Nutrition', 'ISO XP', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '1.8kg'::text, 'Chocolate, vainilla y mango'::text, 359, 389, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764902750/prod_pag4_8_oocbex.jpg'::text);
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '1kg'::text, 'Chocolate y vainilla'::text, 189, 209, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764902779/prod_pag4_9_izt0x6.jpg'::text);
    
    -- Category: Termogénico
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'termogenico';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Termogénico', 'termogenico') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: Lipo-6 Carnitina Líquida
    INSERT INTO products (brand, name, category_id) VALUES ('Nutrex', 'Lipo-6 Carnitina Líquida', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '31 serv'::text, 'Libre de estimulantes'::text, 85, 115, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764902803/prod_pag4_10_yezajt.jpg'::text);
    
    -- Category: Termogénico
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'termogenico';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Termogénico', 'termogenico') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: LevroLean
    INSERT INTO products (brand, name, category_id) VALUES ('Kevin Levrone', 'LevroLean', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '90 caps'::text, 'Standard'::text, 69, 89, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764902831/prod_pag5_11_nixnnd.jpg'::text);
    
    -- Category: Termogénico
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'termogenico';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Termogénico', 'termogenico') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: Black Viper
    INSERT INTO products (brand, name, category_id) VALUES ('Dragon Pharma', 'Black Viper', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '90 caps'::text, 'Extremo'::text, 129, 169, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764902853/prod_pag5_12_hrfmv8.jpg'::text);
    
    -- Category: Termogénico
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'termogenico';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Termogénico', 'termogenico') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: Lipo-6 Black UC
    INSERT INTO products (brand, name, category_id) VALUES ('Nutrex', 'Lipo-6 Black UC', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '60 caps'::text, 'Standard'::text, 110, 160, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764902926/prod_pag5_13_qvnahj.jpg'::text);
    
    -- Category: Termogénico
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'termogenico';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Termogénico', 'termogenico') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: Lipodrene
    INSERT INTO products (brand, name, category_id) VALUES ('Hi-Tech Pharmaceuticals', 'Lipodrene', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '90 caps'::text, 'Extremo'::text, 139, 179, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764902945/prod_pag6_14_wnojfw.jpg'::text);
    
    -- Category: Multivitamínico
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'multivitaminico';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Multivitamínico', 'multivitaminico') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: Opti-Women / Opti-Men
    INSERT INTO products (brand, name, category_id) VALUES ('Optimum Nutrition', 'Opti-Women / Opti-Men', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '120 caps'::text, 'Opti-Women'::text, 119, 159, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764903062/prod_pag6_15_f4gggj.jpg'::text);
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '150 caps'::text, 'Opti-Men'::text, 199, 229, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764903079/prod_pag6_16_fjgizq.jpg'::text);
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '240 caps'::text, 'Opti-Men'::text, 229, 279, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764903079/prod_pag6_16_fjgizq.jpg'::text);
    
    -- Category: Ganador de Peso
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'ganador-de-peso';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Ganador de Peso', 'ganador-de-peso') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: Mega V / Muscle V
    INSERT INTO products (brand, name, category_id) VALUES ('MuscleMeds', 'Mega V / Muscle V', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '60 caps (o scoops)'::text, 'Standard'::text, 30, 60, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764903118/prod_pag7_17_cjbb2p.jpg'::text);
    
    -- Category: Creatina
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'creatina';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Creatina', 'creatina') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: Creatina Micronizada
    INSERT INTO products (brand, name, category_id) VALUES ('Optimum Nutrition', 'Creatina Micronizada', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '300g'::text, 'Unflavored'::text, 129, 169, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764903165/prod_pag7_18_urtux6.jpg'::text);
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '600g'::text, 'Unflavored'::text, 199, 249, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764903165/prod_pag7_18_urtux6.jpg'::text);
    
    -- Category: Creatina
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'creatina';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Creatina', 'creatina') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: Creatina Monohidratada
    INSERT INTO products (brand, name, category_id) VALUES ('Dragon Pharma', 'Creatina Monohidratada', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '300g'::text, 'Unflavored'::text, 75, 105, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764903227/prod_pag8_20_piwr3y.jpg'::text);
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '1kg'::text, 'Unflavored'::text, 199, 239, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764903227/prod_pag8_20_piwr3y.jpg'::text);
    
    -- Category: Creatina
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'creatina';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Creatina', 'creatina') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: Creatina Monohidratada
    INSERT INTO products (brand, name, category_id) VALUES ('Ultimate Nutrition', 'Creatina Monohidratada', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '300g'::text, 'Unflavored'::text, 79, 129, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764903255/prod_pag8_21_dgmtec.jpg'::text);
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '1kg'::text, 'Unflavored'::text, 209, 249, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764903264/prod_pag8_22_e5p2yh.jpg'::text);
    
    -- Category: Creatina
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'creatina';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Creatina', 'creatina') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: Creatina Monohidratada
    INSERT INTO products (brand, name, category_id) VALUES ('Ronnie Coleman', 'Creatina Monohidratada', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '300g'::text, 'Unflavored'::text, 70, 99, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764903334/prod_pag9_23_upibqb.jpg'::text);
    
    -- Category: Creatina
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'creatina';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Creatina', 'creatina') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: Creatina Monohidratada
    INSERT INTO products (brand, name, category_id) VALUES ('Applied Nutrition', 'Creatina Monohidratada', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '250g'::text, 'Unflavored'::text, 60, 85, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764903364/prod_pag9_24_vxiypt.jpg'::text);
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '500g'::text, 'Unflavored'::text, 80, 120, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764903364/prod_pag9_24_vxiypt.jpg'::text);
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '1kg'::text, 'Unflavored'::text, 150, 199, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764903364/prod_pag9_24_vxiypt.jpg'::text);
    
    -- Category: Creatina
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'creatina';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Creatina', 'creatina') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: Creatina Levro
    INSERT INTO products (brand, name, category_id) VALUES ('Kevin Levrone', 'Creatina Levro', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '300g'::text, 'Unflavored'::text, 60, 89, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764903400/prod_pag9_25_bxey7h.png'::text);
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '500g'::text, 'Unflavored'::text, 80, 115, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764903400/prod_pag9_25_bxey7h.png'::text);
    
    -- Category: Mass Gainer
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'mass-gainer';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Mass Gainer', 'mass-gainer') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: Serious Mass
    INSERT INTO products (brand, name, category_id) VALUES ('Mutant', 'Serious Mass', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '6lbs'::text, 'Standard'::text, 169, 229, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764903465/prod_pag10_26_qbgtgb.jpg'::text);
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '12lbs (Saco)'::text, 'Standard'::text, 309, 349, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764903465/prod_pag10_26_qbgtgb.jpg'::text);
    
    -- Category: Mass Gainer
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'mass-gainer';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Mass Gainer', 'mass-gainer') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: Carnivor Mass
    INSERT INTO products (brand, name, category_id) VALUES ('MuscleMeds', 'Carnivor Mass', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '5.83lbs'::text, 'Standard'::text, 229, 269, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764903498/prod_pag10_27_ipdwsu.jpg'::text);
    
    -- Category: Mass Gainer
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'mass-gainer';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Mass Gainer', 'mass-gainer') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: Mutant Mass (Versión 2)
    INSERT INTO products (brand, name, category_id) VALUES ('Mutant', 'Mutant Mass (Versión 2)', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '5lbs'::text, 'Standard'::text, 139, 169, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764903533/prod_pag10_28_sycgcy.jpg'::text);
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '15lbs'::text, 'Standard'::text, 315, 389, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764903533/prod_pag10_28_sycgcy.jpg'::text);
    
    -- Category: Pre-Entreno
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'pre-entreno';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Pre-Entreno', 'pre-entreno') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: Venom (Edición Limitada)
    INSERT INTO products (brand, name, category_id) VALUES ('Dragon Pharma', 'Venom (Edición Limitada)', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '30 serv'::text, 'Stock Limitado'::text, 129, 169, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764903578/prod_pag11_29_abet8s.jpg'::text);
    
    -- Category: Pre-Entreno
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'pre-entreno';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Pre-Entreno', 'pre-entreno') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: Venom Inferno
    INSERT INTO products (brand, name, category_id) VALUES ('Dragon Pharma', 'Venom Inferno', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '30 serv'::text, 'Stock Limitado'::text, 145, 185, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764903594/prod_pag11_30_tuqqg1.jpg'::text);
    
    -- Category: Pre-Entreno
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'pre-entreno';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Pre-Entreno', 'pre-entreno') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: M6Teen
    INSERT INTO products (brand, name, category_id) VALUES ('Dorian Yates', 'M6Teen', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '12 shots'::text, 'Líquido'::text, 89, 109, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764903620/prod_pag11_31_ska64z.jpg'::text);
    
    -- Category: Pre-Entreno
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'pre-entreno';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Pre-Entreno', 'pre-entreno') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: Psychotic Rojo
    INSERT INTO products (brand, name, category_id) VALUES ('Insane Labz', 'Psychotic Rojo', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '35 serv'::text, 'Standard'::text, 139, 189, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764903640/prod_pag12_32_tqhcee.jpg'::text);
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '60 serv'::text, 'Standard'::text, 219, 229, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764903640/prod_pag12_32_tqhcee.jpg'::text);
    
    -- Category: Pre-Entreno
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'pre-entreno';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Pre-Entreno', 'pre-entreno') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: Psychotic SAW
    INSERT INTO products (brand, name, category_id) VALUES ('Insane Labz', 'Psychotic SAW', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '35 serv'::text, 'Stock Limitado'::text, 145, 195, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764903684/prod_pag12_33_nvbeqb.jpg'::text);
    
    -- Category: Pre-Entreno
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'pre-entreno';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Pre-Entreno', 'pre-entreno') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: ABE (All Black Everything)
    INSERT INTO products (brand, name, category_id) VALUES ('Applied Nutrition', 'ABE (All Black Everything)', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '30 serv'::text, 'Standard'::text, 119, 149, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764903705/prod_pag12_34_bic2sn.jpg'::text);
    
    -- Category: Pre-Entreno
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'pre-entreno';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Pre-Entreno', 'pre-entreno') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: The Curse
    INSERT INTO products (brand, name, category_id) VALUES ('JNX Sports', 'The Curse', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '50 serv'::text, 'Standard'::text, 129, 179, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764903725/prod_pag13_35_uzdhyz.jpg'::text);
    
    -- Category: Aminoácidos
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'aminoacidos';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Aminoácidos', 'aminoacidos') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: EAA''s (Aminoácidos)
    INSERT INTO products (brand, name, category_id) VALUES ('Kevin Levrone', 'EAA''s (Aminoácidos)', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '62 serv'::text, 'Standard'::text, 118, 158, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764903745/prod_pag13_36_cu9gfy.jpg'::text);
    
    -- Category: BCAA
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'bcaa';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('BCAA', 'bcaa') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: Mutant BCAA
    INSERT INTO products (brand, name, category_id) VALUES ('Mutant', 'Mutant BCAA', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '30 serv'::text, 'Standard'::text, 95, 135, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764903767/prod_pag13_37_e6zysk.jpg'::text);
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '90 serv'::text, 'Standard'::text, 199, 239, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764903767/prod_pag13_37_e6zysk.jpg'::text);
    
    -- Category: BCAA
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'bcaa';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('BCAA', 'bcaa') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: BCAA 12000
    INSERT INTO products (brand, name, category_id) VALUES ('Ultimate Nutrition', 'BCAA 12000', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '60 serv'::text, 'Polvo'::text, 129, 179, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764903802/prod_pag14_38_kjgk4w.jpg'::text);
    
    -- Category: Salud Cardiovascular
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'salud-cardiovascular';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Salud Cardiovascular', 'salud-cardiovascular') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: Omega 3 (Control Colesterol)
    INSERT INTO products (brand, name, category_id) VALUES ('Nutrabio / Omnifood', 'Omega 3 (Control Colesterol)', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '150 caps'::text, 'Softgels'::text, 89, 129, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764903851/prod_pag14_39_zjgqej.jpg'::text);
    
    -- Category: Salud Articular
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'salud-articular';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Salud Articular', 'salud-articular') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: Jointment / Joint Max
    INSERT INTO products (brand, name, category_id) VALUES ('GAT Sport', 'Jointment / Joint Max', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '150 caps'::text, 'Standard'::text, 95, 135, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764903865/prod_pag14_40_hkyrzj.jpg'::text);
    
    -- Category: Precursor Testosterona
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'precursor-testosterona';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Precursor Testosterona', 'precursor-testosterona') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: Testrol / Testosterone Max
    INSERT INTO products (brand, name, category_id) VALUES ('GAT Sport', 'Testrol / Testosterone Max', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '60 caps'::text, 'Standard'::text, 149, 189, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764903923/prod_pag15_41_nnp5mc.jpg'::text);
    
    -- Category: Precursor Testosterona
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'precursor-testosterona';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Precursor Testosterona', 'precursor-testosterona') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: Alpha TX9
    INSERT INTO products (brand, name, category_id) VALUES ('GAT Sport', 'Alpha TX9', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '60 caps'::text, 'Standard'::text, 109, 159, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764903942/prod_pag15_42_ufahva.jpg'::text);
    
    -- Category: Glutamina
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'glutamina';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Glutamina', 'glutamina') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: Glutamina
    INSERT INTO products (brand, name, category_id) VALUES ('MyProtein', 'Glutamina', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '250g'::text, 'Unflavored'::text, 59, 89, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764903952/prod_pag15_43_pskdjw.jpg'::text);
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, '1kg'::text, 'Unflavored'::text, 119, 169, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764903952/prod_pag15_43_pskdjw.jpg'::text);
    
    -- Category: Snack Proteico
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'snack-proteico';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Snack Proteico', 'snack-proteico') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: Brownies Proteicos
    INSERT INTO products (brand, name, category_id) VALUES ('MyProtein', 'Brownies Proteicos', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, 'Display x12'::text, 'Chocolate'::text, 99, 119, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764903985/prod_pag16_44_pujunp.jpg'::text);
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, 'Display x12'::text, 'Chocolate Blanco'::text, 99, 119, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764904017/prod_pag16_45_rn6tnq.jpg'::text);
    
    -- Category: Snack Proteico
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'snack-proteico';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Snack Proteico', 'snack-proteico') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: Galletas Proteicas (38g Proteína)
    INSERT INTO products (brand, name, category_id) VALUES ('MyProtein', 'Galletas Proteicas (38g Proteína)', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, 'Display x12'::text, 'Standard'::text, 129, 169, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764904101/prod_pag16_46_igwzxx.jpg'::text);
    
    -- Category: Snack Proteico
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'snack-proteico';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Snack Proteico', 'snack-proteico') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: Barras Proteicas
    INSERT INTO products (brand, name, category_id) VALUES ('MyProtein', 'Barras Proteicas', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, 'Display x12'::text, 'Standard'::text, 125, 149, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764904108/prod_pag17_47_lhiw4a.jpg'::text);
    
    -- Category: Snack Proteico
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'snack-proteico';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Snack Proteico', 'snack-proteico') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: Wafer Proteicos
    INSERT INTO products (brand, name, category_id) VALUES ('MyProtein', 'Wafer Proteicos', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, 'Display x10'::text, 'Standard'::text, 99, 119, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764904129/prod_pag17_48_ywatxp.jpg'::text);
    
    -- Category: Snack Proteico
    SELECT id INTO v_cat_id FROM categories WHERE slug = 'snack-proteico';
    IF v_cat_id IS NULL THEN
        INSERT INTO categories (name, slug) VALUES ('Snack Proteico', 'snack-proteico') RETURNING id INTO v_cat_id;
    END IF;

    -- Product: Barras Proteicas Crunch
    INSERT INTO products (brand, name, category_id) VALUES ('Warrior', 'Barras Proteicas Crunch', v_cat_id) RETURNING id INTO v_prod_id;

    -- Variants
    INSERT INTO variants (product_id, content, flavor, price_trainer, price_public, image) VALUES (v_prod_id, 'Display x12'::text, 'Standard'::text, 109, 139, 'https://res.cloudinary.com/dxntqapz6/image/upload/v1764904137/prod_pag17_49_s3xihx.jpg'::text);
    
END $$;
