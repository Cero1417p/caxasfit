export interface Product {
  id: string;
  brand: string;
  name: string;
  category: string;
  variants: {
    content: string;
    flavor: string;
    price_trainer: number;
    price_public: number;
    image: string;
  }[];
}

const products: Product[] = [
  {
    "id": "001",
    "brand": "Mutant",
    "name": "Mutant Whey",
    "category": "Proteína",
    "variants": [
      {
        "content": "2lbs",
        "flavor": "Chocolate y Vainilla",
        "price_trainer": 119,
        "price_public": 159,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764901630/prod_pag1_0_uyqj4s.jpg",
      },
      {
        "content": "5lbs",
        "flavor": "Chocolate y Vainilla",
        "price_trainer": 229,
        "price_public": 299,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764901695/prod_pag1_1_wa0j4o.jpg",
      }
    ]
  },
  {
    "id": "002",
    "brand": "Optimum Nutrition",
    "name": "Gold Standard Whey",
    "category": "Proteína",
    "variants": [
      {
        "content": "5lbs",
        "flavor": "Chocolate y Vainilla",
        "price_trainer": 329,
        "price_public": 369,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764902306/prod_pag2_2_pelhma.jpg",
      }
    ]
  },
  {
    "id": "003",
    "brand": "MuscleMeds",
    "name": "Carnivor Protein",
    "category": "Proteína",
    "variants": [
      {
        "content": "4lbs",
        "flavor": "Standard",
        "price_trainer": 259,
        "price_public": 309,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764902333/prod_pag2_3_thflyn.jpg",
      }
    ]
  },
  {
    "id": "004",
    "brand": "Ultimate Nutrition",
    "name": "Prostar Whey",
    "category": "Proteína",
    "variants": [
      {
        "content": "5lbs",
        "flavor": "Chocolate y Vainilla",
        "price_trainer": 249,
        "price_public": 299,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764902374/prod_pag2_4_zhoffy.jpg",
      }
    ]
  },
  {
    "id": "005",
    "brand": "Dragon Pharma",
    "name": "Iso Phorm",
    "category": "Proteína",
    "variants": [
      {
        "content": "5lbs",
        "flavor": "Chocolate y Vainilla",
        "price_trainer": 349,
        "price_public": 399,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764902644/prod_pag3_5_jfoqam.jpg",
      }
    ]
  },
  {
    "id": "006",
    "brand": "P-Out",
    "name": "Isolate 1000",
    "category": "Proteína",
    "variants": [
      {
        "content": "5lbs",
        "flavor": "Chocolate, Vainilla y Cookies",
        "price_trainer": 309,
        "price_public": 359,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764902689/prod_pag3_6_azqdal.jpg",
      }
    ]
  },
  {
    "id": "007",
    "brand": "Evogen",
    "name": "Isoject",
    "category": "Proteína",
    "variants": [
      {
        "content": "2lbs",
        "flavor": "Chocolate, cookies y churro",
        "price_trainer": 189,
        "price_public": 229,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764902719/prod_pag3_7_i1kxxe.jpg",
      }
    ]
  },
  {
    "id": "008",
    "brand": "Applied Nutrition",
    "name": "ISO XP",
    "category": "Proteína",
    "variants": [
      {
        "content": "1.8kg",
        "flavor": "Chocolate, vainilla y mango",
        "price_trainer": 359,
        "price_public": 389,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764902750/prod_pag4_8_oocbex.jpg",
      },
      {
        "content": "1kg",
        "flavor": "Chocolate y vainilla",
        "price_trainer": 189,
        "price_public": 209,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764902779/prod_pag4_9_izt0x6.jpg",
      }
    ]
  },
  {
    "id": "009",
    "brand": "Nutrex",
    "name": "Lipo-6 Carnitina Líquida",
    "category": "Termogénico",
    "variants": [
      {
        "content": "31 serv",
        "flavor": "Libre de estimulantes",
        "price_trainer": 85,
        "price_public": 115,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764902803/prod_pag4_10_yezajt.jpg",
      }
    ]
  },
  {
    "id": "010",
    "brand": "Kevin Levrone",
    "name": "LevroLean",
    "category": "Termogénico",
    "variants": [
      {
        "content": "90 caps",
        "flavor": "Standard",
        "price_trainer": 69,
        "price_public": 89,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764902803/prod_pag4_10_yezajt.jpg",
      }
    ]
  },
  {
    "id": "011",
    "brand": "Dragon Pharma",
    "name": "Black Viper",
    "category": "Termogénico",
    "variants": [
      {
        "content": "90 caps",
        "flavor": "Extremo",
        "price_trainer": 129,
        "price_public": 169,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764902853/prod_pag5_12_hrfmv8.jpg",
      }
    ]
  },
  {
    "id": "012",
    "brand": "Nutrex",
    "name": "Lipo-6 Black UC",
    "category": "Termogénico",
    "variants": [
      {
        "content": "60 caps",
        "flavor": "Standard",
        "price_trainer": 110,
        "price_public": 160,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764902926/prod_pag5_13_qvnahj.jpg",
      }
    ]
  },
  {
    "id": "013",
    "brand": "Hi-Tech Pharmaceuticals",
    "name": "Lipodrene",
    "category": "Termogénico",
    "variants": [
      {
        "content": "90 caps",
        "flavor": "Extremo",
        "price_trainer": 139,
        "price_public": 179,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764902945/prod_pag6_14_wnojfw.jpg",
      }
    ]
  },
  {
    "id": "014",
    "brand": "Optimum Nutrition",
    "name": "Opti-Women / Opti-Men",
    "category": "Multivitamínico",
    "variants": [
      {
        "content": "120 caps",
        "flavor": "Opti-Women",
        "price_trainer": 119,
        "price_public": 159,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764903062/prod_pag6_15_f4gggj.jpg",
      },
      {
        "content": "150 caps",
        "flavor": "Opti-Men",
        "price_trainer": 199,
        "price_public": 229,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764903079/prod_pag6_16_fjgizq.jpg",
      },
      {
        "content": "240 caps",
        "flavor": "Opti-Men",
        "price_trainer": 229,
        "price_public": 279,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764903079/prod_pag6_16_fjgizq.jpg",
      }
    ]
  },
  {
    "id": "015",
    "brand": "MuscleMeds",
    "name": "Mega V / Muscle V",
    "category": "Ganador de Peso",
    "variants": [
      {
        "content": "60 caps (o scoops)",
        "flavor": "Standard",
        "price_trainer": 30,
        "price_public": 60,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764903118/prod_pag7_17_cjbb2p.jpg",
      }
    ]
  },
  {
    "id": "016",
    "brand": "Optimum Nutrition",
    "name": "Creatina Micronizada",
    "category": "Creatina",
    "variants": [
      {
        "content": "300g",
        "flavor": "Unflavored",
        "price_trainer": 129,
        "price_public": 169,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764903165/prod_pag7_18_urtux6.jpg",
      },
      {
        "content": "600g",
        "flavor": "Unflavored",
        "price_trainer": 199,
        "price_public": 249,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764903165/prod_pag7_18_urtux6.jpg",
      }
    ]
  },
  {
    "id": "017",
    "brand": "Dragon Pharma",
    "name": "Creatina Monohidratada",
    "category": "Creatina",
    "variants": [
      {
        "content": "300g",
        "flavor": "Unflavored",
        "price_trainer": 75,
        "price_public": 105,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764903227/prod_pag8_20_piwr3y.jpg",
      },
      {
        "content": "1kg",
        "flavor": "Unflavored",
        "price_trainer": 199,
        "price_public": 239,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764903227/prod_pag8_20_piwr3y.jpg",
      }
    ]
  },
  {
    "id": "018",
    "brand": "Ultimate Nutrition",
    "name": "Creatina Monohidratada",
    "category": "Creatina",
    "variants": [
      {
        "content": "300g",
        "flavor": "Unflavored",
        "price_trainer": 79,
        "price_public": 129,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764903255/prod_pag8_21_dgmtec.jpg",
      },
      {
        "content": "1kg",
        "flavor": "Unflavored",
        "price_trainer": 209,
        "price_public": 249,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764903264/prod_pag8_22_e5p2yh.jpg",
      }
    ]
  },
  {
    "id": "019",
    "brand": "Ronnie Coleman",
    "name": "Creatina Monohidratada",
    "category": "Creatina",
    "variants": [
      {
        "content": "300g",
        "flavor": "Unflavored",
        "price_trainer": 70,
        "price_public": 99,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764903334/prod_pag9_23_upibqb.jpg",
      }
    ]
  },
  {
    "id": "020",
    "brand": "Applied Nutrition",
    "name": "Creatina Monohidratada",
    "category": "Creatina",
    "variants": [
      {
        "content": "250g",
        "flavor": "Unflavored",
        "price_trainer": 60,
        "price_public": 85,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764903364/prod_pag9_24_vxiypt.jpg",
      },
      {
        "content": "500g",
        "flavor": "Unflavored",
        "price_trainer": 80,
        "price_public": 120,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764903364/prod_pag9_24_vxiypt.jpg",
      },
      {
        "content": "1kg",
        "flavor": "Unflavored",
        "price_trainer": 150,
        "price_public": 199,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764903364/prod_pag9_24_vxiypt.jpg",
      }
    ]
  },
  {
    "id": "021",
    "brand": "Kevin Levrone",
    "name": "Creatina Levro",
    "category": "Creatina",
    "variants": [
      {
        "content": "300g",
        "flavor": "Unflavored",
        "price_trainer": 60,
        "price_public": 89,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764903400/prod_pag9_25_bxey7h.png",
      },
      {
        "content": "500g",
        "flavor": "Unflavored",
        "price_trainer": 80,
        "price_public": 115,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764903400/prod_pag9_25_bxey7h.png",
      }
    ]
  },
  {
    "id": "022",
    "brand": "Mutant",
    "name": "Serious Mass",
    "category": "Mass Gainer",
    "variants": [
      {
        "content": "6lbs",
        "flavor": "Standard",
        "price_trainer": 169,
        "price_public": 229,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764903465/prod_pag10_26_qbgtgb.jpg",
      },
      {
        "content": "12lbs (Saco)",
        "flavor": "Standard",
        "price_trainer": 309,
        "price_public": 349,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764903465/prod_pag10_26_qbgtgb.jpg",
      }
    ]
  },
  {
    "id": "023",
    "brand": "MuscleMeds",
    "name": "Carnivor Mass",
    "category": "Mass Gainer",
    "variants": [
      {
        "content": "5.83lbs",
        "flavor": "Standard",
        "price_trainer": 229,
        "price_public": 269,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764903498/prod_pag10_27_ipdwsu.jpg",
      }
    ]
  },
  {
    "id": "024",
    "brand": "Mutant",
    "name": "Mutant Mass (Versión 2)",
    "category": "Mass Gainer",
    "variants": [
      {
        "content": "5lbs",
        "flavor": "Standard",
        "price_trainer": 139,
        "price_public": 169,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764903533/prod_pag10_28_sycgcy.jpg",
      },
      {
        "content": "15lbs",
        "flavor": "Standard",
        "price_trainer": 315,
        "price_public": 389,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764903533/prod_pag10_28_sycgcy.jpg",
      }
    ]
  },
  {
    "id": "025",
    "brand": "Dragon Pharma",
    "name": "Venom (Edición Limitada)",
    "category": "Pre-Entreno",
    "variants": [
      {
        "content": "30 serv",
        "flavor": "Stock Limitado",
        "price_trainer": 129,
        "price_public": 169,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764903578/prod_pag11_29_abet8s.jpg",
      }
    ]
  },
  {
    "id": "026",
    "brand": "Dragon Pharma",
    "name": "Venom Inferno",
    "category": "Pre-Entreno",
    "variants": [
      {
        "content": "30 serv",
        "flavor": "Stock Limitado",
        "price_trainer": 145,
        "price_public": 185,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764903594/prod_pag11_30_tuqqg1.jpg",
      }
    ]
  },
  {
    "id": "027",
    "brand": "Dorian Yates",
    "name": "M6Teen",
    "category": "Pre-Entreno",
    "variants": [
      {
        "content": "12 shots",
        "flavor": "Líquido",
        "price_trainer": 89,
        "price_public": 109,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764903620/prod_pag11_31_ska64z.jpg",
      }
    ]
  },
  {
    "id": "028",
    "brand": "Insane Labz",
    "name": "Psychotic Rojo",
    "category": "Pre-Entreno",
    "variants": [
      {
        "content": "35 serv",
        "flavor": "Standard",
        "price_trainer": 139,
        "price_public": 189,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764903640/prod_pag12_32_tqhcee.jpg",
      },
      {
        "content": "60 serv",
        "flavor": "Standard",
        "price_trainer": 219,
        "price_public": 229,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764903640/prod_pag12_32_tqhcee.jpg",
      }
    ]
  },
  {
    "id": "029",
    "brand": "Insane Labz",
    "name": "Psychotic SAW",
    "category": "Pre-Entreno",
    "variants": [
      {
        "content": "35 serv",
        "flavor": "Stock Limitado",
        "price_trainer": 145,
        "price_public": 195,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764903684/prod_pag12_33_nvbeqb.jpg",
      }
    ]
  },
  {
    "id": "030",
    "brand": "Applied Nutrition",
    "name": "ABE (All Black Everything)",
    "category": "Pre-Entreno",
    "variants": [
      {
        "content": "30 serv",
        "flavor": "Standard",
        "price_trainer": 119,
        "price_public": 149,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764903705/prod_pag12_34_bic2sn.jpg",
      }
    ]
  },
  {
    "id": "031",
    "brand": "JNX Sports",
    "name": "The Curse",
    "category": "Pre-Entreno",
    "variants": [
      {
        "content": "50 serv",
        "flavor": "Standard",
        "price_trainer": 129,
        "price_public": 179,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764903725/prod_pag13_35_uzdhyz.jpg",
      }
    ]
  },
  {
    "id": "032",
    "brand": "Kevin Levrone",
    "name": "EAA's (Aminoácidos)",
    "category": "Aminoácidos",
    "variants": [
      {
        "content": "62 serv",
        "flavor": "Standard",
        "price_trainer": 118,
        "price_public": 158,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764903745/prod_pag13_36_cu9gfy.jpg",
      }
    ]
  },
  {
    "id": "033",
    "brand": "Mutant",
    "name": "Mutant BCAA",
    "category": "BCAA",
    "variants": [
      {
        "content": "30 serv",
        "flavor": "Standard",
        "price_trainer": 95,
        "price_public": 135,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764903767/prod_pag13_37_e6zysk.jpg",
      },
      {
        "content": "90 serv",
        "flavor": "Standard",
        "price_trainer": 199,
        "price_public": 239,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764903767/prod_pag13_37_e6zysk.jpg",
      }
    ]
  },
  {
    "id": "034",
    "brand": "Ultimate Nutrition",
    "name": "BCAA 12000",
    "category": "BCAA",
    "variants": [
      {
        "content": "60 serv",
        "flavor": "Polvo",
        "price_trainer": 129,
        "price_public": 179,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764903802/prod_pag14_38_kjgk4w.jpg",
      }
    ]
  },
  {
    "id": "035",
    "brand": "Nutrabio / Omnifood",
    "name": "Omega 3 (Control Colesterol)",
    "category": "Salud Cardiovascular",
    "variants": [
      {
        "content": "150 caps",
        "flavor": "Softgels",
        "price_trainer": 89,
        "price_public": 129,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764903851/prod_pag14_39_zjgqej.jpg",
      }
    ]
  },
  {
    "id": "036",
    "brand": "GAT Sport",
    "name": "Jointment / Joint Max",
    "category": "Salud Articular",
    "variants": [
      {
        "content": "150 caps",
        "flavor": "Standard",
        "price_trainer": 95,
        "price_public": 135,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764903865/prod_pag14_40_hkyrzj.jpg",
      }
    ]
  },
  {
    "id": "037",
    "brand": "GAT Sport",
    "name": "Testrol / Testosterone Max",
    "category": "Precursor Testosterona",
    "variants": [
      {
        "content": "60 caps",
        "flavor": "Standard",
        "price_trainer": 149,
        "price_public": 189,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764903923/prod_pag15_41_nnp5mc.jpg",
      }
    ]
  },
  {
    "id": "038",
    "brand": "GAT Sport",
    "name": "Alpha TX9",
    "category": "Precursor Testosterona",
    "variants": [
      {
        "content": "60 caps",
        "flavor": "Standard",
        "price_trainer": 109,
        "price_public": 159,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764903942/prod_pag15_42_ufahva.jpg",
      }
    ]
  },
  {
    "id": "039",
    "brand": "MyProtein",
    "name": "Glutamina",
    "category": "Glutamina",
    "variants": [
      {
        "content": "250g",
        "flavor": "Unflavored",
        "price_trainer": 59,
        "price_public": 89,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764903952/prod_pag15_43_pskdjw.jpg",
      },
      {
        "content": "1kg",
        "flavor": "Unflavored",
        "price_trainer": 119,
        "price_public": 169,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764903952/prod_pag15_43_pskdjw.jpg",
      }
    ]
  },
  {
    "id": "040",
    "brand": "MyProtein",
    "name": "Brownies Proteicos",
    "category": "Snack Proteico",
    "variants": [
      {
        "content": "Display x12",
        "flavor": "Chocolate",
        "price_trainer": 99,
        "price_public": 119,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764903985/prod_pag16_44_pujunp.jpg",
      },
      {
        "content": "Display x12",
        "flavor": "Chocolate Blanco",
        "price_trainer": 99,
        "price_public": 119,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764904017/prod_pag16_45_rn6tnq.jpg",
      }
    ]
  },
  {
    "id": "041",
    "brand": "MyProtein",
    "name": "Galletas Proteicas (38g Proteína)",
    "category": "Snack Proteico",
    "variants": [
      {
        "content": "Display x12",
        "flavor": "Standard",
        "price_trainer": 129,
        "price_public": 169,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764904101/prod_pag16_46_igwzxx.jpg",
      }
    ]
  },
  {
    "id": "042",
    "brand": "MyProtein",
    "name": "Barras Proteicas",
    "category": "Snack Proteico",
    "variants": [
      {
        "content": "Display x12",
        "flavor": "Standard",
        "price_trainer": 125,
        "price_public": 149,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764904108/prod_pag17_47_lhiw4a.jpg",
      }
    ]
  },
  {
    "id": "043",
    "brand": "MyProtein",
    "name": "Wafer Proteicos",
    "category": "Snack Proteico",
    "variants": [
      {
        "content": "Display x10",
        "flavor": "Standard",
        "price_trainer": 99,
        "price_public": 119,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764904129/prod_pag17_48_ywatxp.jpg",
      }
    ]
  },
  {
    "id": "044",
    "brand": "Warrior",
    "name": "Barras Proteicas Crunch",
    "category": "Snack Proteico",
    "variants": [
      {
        "content": "Display x12",
        "flavor": "Standard",
        "price_trainer": 109,
        "price_public": 139,
        "image": "https://res.cloudinary.com/dxntqapz6/image/upload/v1764904137/prod_pag17_49_s3xihx.jpg",
      }
    ]
  }
]

export { products };