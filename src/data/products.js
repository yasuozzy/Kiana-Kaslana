export const navigationItems = [
  {
    name: '足球装备',
    link: '/football-gear',
    // 子菜单选项 - 就像餐厅菜单的分类，每个大类下面有具体的菜品
    subItems: [
      { name: '主场球衣', link: '/football-gear/home' },
      { name: '客场球衣', link: '/football-gear/away' },
      { name: '第三客场', link: '/football-gear/third' },
      { name: '守门员', link: '/football-gear/goalkeeper' },
    ],
  },
  {
    name: '训练',
    link: '/training',
    subItems: [
      { name: '男生', link: '/training/shirts' },
      { name: '儿童', link: '/training/pants' },
      { name: '女生', link: '/training/jackets' },
    ],
  },
  {
    name: '按球员购物',
    link: '#',
    subItems: [
      // 切尔西2024-25赛季阵容
      { name: '科尔·帕尔默', link: '/player/cole-palmer' },
      { name: '尼古拉·雅克松', link: '/player/nicolas-jackson' },
      { name: '恩佐·费尔南德斯', link: '/player/enzo-fernandez' },
      { name: '米哈伊洛·穆德里克', link: '/player/mykhailo-mudryk' },
      { name: '佩德罗·内托', link: '/player/pedro-neto' }, // 2024夏窗新援
      { name: '若昂·菲利克斯', link: '/player/joao-felix' }, // 2024夏窗新援
      { name: '杰登·桑乔', link: '/player/jadon-sancho' }, // 2024夏窗租借加盟
      { name: '里斯·詹姆斯', link: '/player/rees-james' },
      { name: '本·奇尔韦尔', link: '/player/ben-chilwell' },
      { name: '列维·科尔威尔', link: '/player/levi-colwill' },
      { name: '罗伯特·桑切斯', link: '/player/robert-sanchez' },
      { name: '莫伊塞斯·凯塞多', link: '/player/moises-caicedo' },
      { name: '马克·吉乌', link: '/player/marc-guiu' }, // 2024夏窗新援
      { name: '基尔南·迪尤斯伯里-霍尔', link: '/player/kiernan-dewsbury-hall' }, // 2024夏窗新援
      { name: '卡尔尼·丘库埃梅卡', link: '/player/carney-chukwuemeka' },
      { name: '马洛·古斯托', link: '/player/malo-gusto' },
      // 曼城2024-25赛季阵容
      { name: '埃尔林·哈兰德', link: '/player/erling-haaland' }, // 修正链接
      { name: '凯文·德布劳内', link: '/player/kevin-de-bruyne' },
      { name: '埃德森', link: '/player/ederson' },
      { name: '凯尔·沃克', link: '/player/kyle-walker' },
      { name: '鲁本·迪亚斯', link: '/player/ruben-dias' },
      { name: '曼努埃尔·阿坎吉', link: '/player/manuel-akanji' },
      { name: '约什科·格瓦迪奥尔', link: '/player/josko-gvardiol' },
      { name: '罗德里', link: '/player/rodri' },
      { name: '贝尔纳多·席尔瓦', link: '/player/bernardo-silva' },
      { name: '杰克·格拉利什', link: '/player/jack-grealish' },
      { name: '菲尔·福登', link: '/player/phil-foden' },
      { name: '胡利安·阿尔瓦雷斯', link: '/player/julian-alvarez' }, // 2024夏窗离队（转会马竞）
      { name: '萨维奥', link: '/player/savio' }, // 2024夏窗新援
      { name: '伊尔凯·京多安', link: '/player/ilkay-gundogan' }, // 2024夏窗回归
      { name: '杰里米·多库', link: '/player/jeremy-doku' },
    ],
  },
  {
    name: '男人',
    link: '/man',
    subItems: [
      { name: ' 上衣 ', link: '/man/tops' },
      { name: ' 围巾 ', link: '/man/scarves' },
      { name: ' 复古的 ', link: '/man/vintage' },
      { name: ' 外套 ', link: '/man/outerwear' },
      { name: ' 帽子 ', link: '/man/hats' },
      { name: ' 帽衫和针织衫 ', link: '/man/hoodies-sweaters' },
      { name: ' 泳装 ', link: '/man/swimwear' },
      { name: ' 睡衣和内衣 ', link: '/man/pajamas-underwear' },
      { name: ' 裤子和短裤 ', link: '/man/pants-shorts' },
      { name: ' 训练 ', link: '/man/training' },
      { name: ' 足球装备 ', link: '/man/soccer-equipment' },
      { name: ' 配饰 ', link: '/man/accessories' },
      { name: ' 鞋类 ', link: '/man/footwear' },
    ],
  },
  {
    name: '女人',
    link: '/woman',
    subItems: [
      { name: ' 上衣 ', link: '/woman/tops' },
      { name: ' 围巾 ', link: '/woman/scarves' },
      { name: ' 外套 ', link: '/woman/outerwear' },
      { name: ' 家和办公室 ', link: '/woman/home-office' },
      { name: ' 帽子 ', link: '/woman/hats' },
      { name: ' 帽衫和针织衫 ', link: '/woman/hoodies-sweaters' },
      { name: ' 收藏品和纪念品 ', link: '/woman/collectibles' },
      { name: ' 球衣 ', link: '/woman/jerseys' },
      { name: ' 睡衣和内衣 ', link: '/woman/pajamas-underwear' },
      { name: ' 礼品卡 ', link: '/woman/cards' },
      { name: ' 纪念品 ', link: '/woman/souvenirs' },
      { name: ' 裤子和短裤 ', link: '/woman/pants-shorts' },
      { name: ' 训练 ', link: '/woman/training' },
      { name: ' 设备 ', link: '/woman/equipment' },
      { name: ' 足球装备 ', link: '/woman/soccer-equipment' },
      { name: ' 配饰 ', link: '/woman/accessories' },
      { name: ' 鞋类 ', link: '/woman/footwear' },
    ],
  },
  {
    name: '孩子',
    link: '/kids',
    subItems: [
      { name: ' 上衣 ', link: '/kids/tops' },
      { name: ' 外套 ', link: '/kids/outerwear' },
      { name: ' 帽衫和针织衫 ', link: '/kids/hoodies-sweaters' },
      { name: ' 睡衣和内衣 ', link: '/kids/pajamas-underwear' },
      { name: ' 裤子和短裤 ', link: '/kids/pants-shorts' },
      { name: ' 训练 ', link: '/kids/training' },
      { name: ' 足球装备 ', link: '/kids/soccer-equipment' },
      { name: ' 运动服 ', link: '/kids/activewear' },
      { name: ' 连身裤 ', link: '/kids/jumpsuits' },
      { name: ' 配饰 ', link: '/kids/accessories' },
    ],
  },
  {
    name: '复古',
    link: '/retro',
    subItems: [
      { name: '经典球衣', link: '/retro/classic' },
      { name: '限量版', link: '/retro/limited' },
      { name: '纪念版', link: '/retro/memorial' },
    ],
  },
  {
    name: '礼品和配件',
    link: '/gifts',
    subItems: [
      { name: ' 围巾 ', link: '/gifts/scarves' },
      { name: ' 收藏品和纪念品 ', link: '/gifts/collectibles' },
      { name: ' 球场配件 ', link: '/gifts/field-accessories' },
      { name: ' 设备 ', link: '/gifts/equipment' },
      { name: ' 宠物装备 ', link: '/gifts/pet-gear' },
      { name: ' 汽车配饰 ', link: '/gifts/car-accessories' },
      { name: ' 礼品卡 ', link: '/gifts/cards' },
      { name: ' 配饰 ', link: '/gifts/accessories' },
      { name: ' 家和办公室 ', link: '/gifts/home-office' },
      { name: ' 玩具和游戏 ', link: '/gifts/toys-games' },
      { name: ' 纪念品 ', link: '/gifts/souvenirs' },
      { name: ' 高级礼品 ', link: '/gifts/premium-gifts' },
    ],
  },
  {
    name: '集合',
    link: '/favorites',
    subItems: [
      { name: ' 图案 T 恤 ', link: '/series/pattern-tshirts' },
      { name: ' 周年纪念系列 ', link: '/series/anniversary-collection' },
      { name: ' 耐克俱乐部基础款 ', link: '/series/nike-club-essentials' },
      { name: 'CFCW 系列 ', link: '/series/cfcw-collection' },
      { name: ' 经典重塑系列 ', link: '/series/classic-remake-collection' },
      { name: ' 冠军图案系列 ', link: '/series/champion-pattern-collection' },
      { name: ' 迷彩系列 ', link: '/series/camouflage-collection' },
      { name: ' 盛夏系列 ', link: '/series/midsummer-collection' },
      { name: ' 高尔夫系列 ', link: '/series/golf-collection' },
      { name: ' 大学风格系列 ', link: '/series/college-style-collection' },
      { name: ' 切尔西玫瑰系列 ', link: '/series/chelsea-rose-collection' },
      { name: ' 冬季保暖款 ', link: '/series/winter-warm-styles' },
      { name: ' 我的收藏 ', link: '/favorites/my' },
      { name: ' 热门收藏 ', link: '/favorites/popular' },
    ],
  },
  {
    name: '清仓',
    link: '/clearance',
    subItems: [
      { name: '球衣清仓', link: '/clearance/shirts' },
      { name: '配件清仓', link: '/clearance/accessories' },
      { name: '最后机会', link: '/clearance/last-chance' },
    ],
  },
]

export const products = [
  {
    id: 1, // id 是商品的"身份证号"，必须是唯一的，我们用它来区分不同的商品。
    name: '切尔西 Nike Dri-Fit Adv 客场比赛球衣 2025-26', // 商品名称
    price: 122.0, // 商品价格
    brand: 'Nike', // 商品品牌
    brandLogo: '/src/assets/logo/icons8-nike-64.png', // 商品品牌logo
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', 'XXS'], //尺码
    //商品展示图
    image:
      '//images.footballfanatics.com/chelsea/chelsea-nike-home-stadium-shirt-2025-26_ss5_p-202492465+pv-1+u-2gcvqxc9vlx6povideuj+v-hlvjluzq38ny9z4yfpp9.png?_hv=2&w=1018', // 商品图片
    // 新增缩略图数组
    thumbnails: [
      {
        url: '//images.footballfanatics.com/chelsea/chelsea-nike-home-stadium-shirt-2025-26_ss5_p-202492465+pv-1+u-2gcvqxc9vlx6povideuj+v-hlvjluzq38ny9z4yfpp9.png?_hv=2&w=1018',
        alt: '球衣正面图',
      },
      {
        url: '//images.footballfanatics.com/chelsea/chelsea-nike-home-stadium-shirt-2025-26_ss5_p-202492465+pv-5+u-2gcvqxc9vlx6povideuj+v-dwxcvwlvczc98nrqywdw.jpg?_hv=2&w=1018',
      },
      {
        url: '//images.footballfanatics.com/chelsea/chelsea-nike-home-stadium-shirt-2025-26_ss5_p-202492465+pv-4+u-2gcvqxc9vlx6povideuj+v-b0ytstuei8gehm5tmfh1.png?_hv=2&w=1018',
      },
      {
        url: '//images.footballfanatics.com/chelsea/chelsea-nike-home-stadium-shirt-2025-26_ss5_p-202492465+pv-10+u-2gcvqxc9vlx6povideuj+v-lo9b53tndefa23xd9pls.jpg?_hv=2&w=1018',
      },
      {
        url: '//images.footballfanatics.com/chelsea/chelsea-nike-home-stadium-shirt-2025-26_ss5_p-202492465+pv-5+u-2gcvqxc9vlx6povideuj+v-dwxcvwlvczc98nrqywdw.jpg?_hv=2&w=1018',
      },
    ],

    description: '切尔西 Nike Dri-Fit Adv 客场比赛球衣 2025-26', // 商品描述
    category: '球衣', // 商品分类
    subCategory: '客场球衣', // 商品子分类
  },
  {
    id: 2,
    name: '切尔西 Nike 客场体育场球衣 2025-26',
    price: 100.0,
    brand: 'Nike',
    brandLogo: '/src/assets/logo/icons8-nike-64.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-nike-away-stadium-shirt-2025-26_ss5_p-202492460+u-pwqn6ak93ykkjzakvmbr+v-q7nesnijuby0xgslqy9x.jpg?_hv=2&w=400',
    // 新增缩略图数组
    thumbnails: [
      {
        url: '//images.footballfanatics.com/chelsea/chelsea-x-nfl-nike-club-world-cup-game-road-jersey_ss5_p-203122750+pv-2+u-zuna0ga5g2oie65qrjg5+v-7gsmenjfcxinb6jlpxng.jpg?_hv=2&w=100',
        alt: '球衣正面图',
      },
    ],
    description: '切尔西耐克客场体育场衬衫 2025-26',
    category: '球衣',
    subCategory: '客场球衣',
  },
  {
    id: 3,
    name: '切尔西杯子客场体育场球衣 2025-26（印有Palmer 10 字样）1111111111111',
    price: 118.0,
    brand: 'Nike',
    brandLogo: '/src/assets/logo/icons8-nike-64.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-cup-nike-away-stadium-shirt-2025-26-with-palmer-10-printing_ss5_p-203084088+u-xj01ycfwuhdspkdeqbtn+v-jmu7qb7zrhchgpbghfvx.jpg?_hv=2&w=400',
    description: '切尔西杯子客场体育场球衣 2025-26（印有Palmer 10 字样）',
    category: '球衣',
    subCategory: '客场球衣',
  },
  {
    id: 4,
    name: '切尔西杯子客场 Vapor 比赛球衣 2025-26（印有Palmer 10 字样）',
    price: 165.0,
    brand: 'Nike',
    brandLogo: '/src/assets/logo/icons8-nike-64.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-cup-nike-dri-fit-adv-away-match-shirt-2025-26-with-palmer-10-printing_ss5_p-203084096+u-hfjpd5pcjmsux1y5wng8+v-2w6heuwnvnzx9xsmiuan.jpg?_hv=2&w=400',
    description: '切尔西杯子客场 Vapor 比赛球衣 2025-26（印有Palmer 10 字样）',
    category: '球衣',
    subCategory: '客场球衣',
  },
  {
    id: 5,
    name: '切尔西客场体育场球衣 2025-26（印有Palmer 10 字样）',
    price: 118.0,
    brand: 'Nike',
    brandLogo: '/src/assets/logo/icons8-nike-64.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-nike-away-stadium-shirt-2025-26-with-palmer-10-printing_ss5_p-203084502+u-s4wvrtfccdsrjdn3lqhw+v-7d9xsfphpivwan5zm9qz.jpg?_hv=2&w=400',
    description: '切尔西客场体育场球衣 2025-26（印有Palmer 10 字样）',
    category: '球衣',
    subCategory: '客场球衣',
  },
  {
    id: 6,
    name: '切尔西客场体育场球衣 2025-26（印有Palmer 10 字样）',
    price: 118.0,
    brand: 'Nike',
    brandLogo: '/src/assets/logo/icons8-nike-64.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-nike-away-stadium-shirt-2025-26-with-palmer-10-printing_ss5_p-203084502+u-s4wvrtfccdsrjdn3lqhw+v-7d9xsfphpivwan5zm9qz.jpg?_hv=2&w=400',
    description: '切尔西客场体育场球衣 2025-26（印有Palmer 10 字样）',
    category: '球衣',
    subCategory: '客场球衣',
  },
  {
    id: 7, // 商品身份证号，必须唯一，就像每个人的身份证号不能重复
    name: '切尔西耐克第三排体育场球衣 2025-26', // 商品名字，就像菜品名称
    price: 45.0, // 价格，就像菜品价格
    brand: 'Nike', // 品牌，就像菜品的厨师
    brandLogo: '/src/assets/logo/icons8-nike-64.png', // 品牌logo
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', 'XXS'], //尺码
    description: '切尔西官方训练T恤', // 商品描述
    category: '足球装备', // 关键！这是分类标签，就像给菜品贴上"川菜""粤菜"的标签
    subCategory: '训练服', // 子分类，更细致的分类
    //商品展示图
    image:
      '//images.footballfanatics.com/chelsea/chelsea-nike-third-stadium-shirt-2025-26_ss5_p-202697101+pv-1+u-0f6is3ofu5bbvtvuwxk2+v-rakmlp9nifuqzon7grib.jpg?_hv=2&w=1018', // 商品图片
    // 新增缩略图数组
    thumbnails: [
      {
        url: '//images.footballfanatics.com/chelsea/chelsea-nike-third-stadium-shirt-2025-26_ss5_p-202697101+pv-1+u-0f6is3ofu5bbvtvuwxk2+v-rakmlp9nifuqzon7grib.jpg?_hv=2&w=1018',
        alt: '球衣正面图',
      },
      {
        url: '//images.footballfanatics.com/chelsea/chelsea-nike-third-stadium-shirt-2025-26_ss5_p-202697101+pv-2+u-0f6is3ofu5bbvtvuwxk2+v-hbddkbubvw9vvsacg2jb.jpg?_hv=2&w=100',
        alt: '球衣反面图',
      },
      {
        url: '//images.footballfanatics.com/chelsea/chelsea-nike-third-stadium-shirt-2025-26_ss5_p-202697101+pv-3+u-0f6is3ofu5bbvtvuwxk2+v-quqiajpypgdrexyylzhq.jpg?_hv=2&w=100',
        alt: '球衣侧面图',
      },
      {
        url: '//images.footballfanatics.com/chelsea/chelsea-nike-home-stadium-shirt-2025-26_ss5_p-202492465+pv-10+u-2gcvqxc9vlx6povideuj+v-lo9b53tndefa23xd9pls.jpg?_hv=2&w=1018',
      },
      {
        url: '//images.footballfanatics.com/chelsea/chelsea-nike-home-stadium-shirt-2025-26_ss5_p-202492465+pv-5+u-2gcvqxc9vlx6povideuj+v-dwxcvwlvczc98nrqywdw.jpg?_hv=2&w=1018',
      },
    ],
  },
  {
    id: 8,
    name: '切尔西耐克 Third Anthem 训练夹克 - 黑色',
    price: 35.0,
    brand: 'Nike',
    brandLogo: '/src/assets/logo/icons8-nike-64.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-nike-t90-crew-sweat-black_ss5_p-202697132+u-9gmvy47i8fxsby96g2q6+v-1jihtcnh03k7vm26kuil.jpg?_hv=2&w=532',
    description: '切尔西官方训练短裤',
    category: '训练', // 同样是训练装备分类
    subCategory: '训练裤',
  },

  // 女装类商品（就像添加"女士专区"分类）
  {
    id: 9,
    name: '切尔西 Nike 主场体育场球衣 2025-26（印有Palmer 10 字样）',
    price: 95.0,
    brand: 'Nike',
    brandLogo: '/src/assets/logo/icons8-nike-64.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-nike-dri-fit-adv-home-match-shirt-2025-26-with-palmer-10-printing_ss5_p-203072377+u-nrqpk0dmua7q7now0rue+v-4ucbipp6bstor01xjnnz.jpg?_hv=2&w=532',
    description: '切尔西男生专用球衣',
    category: '男装', // 女装分类标签
    subCategory: '球衣',
  },
  {
    id: 10,
    name: '切尔西耐克第三排体育场球衣 2025-26 - 女款',
    price: 65.0,
    brand: 'Nike',
    brandLogo: '/src/assets/logo/icons8-nike-64.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-nike-away-stadium-shirt-2025-26-womens_ss5_p-202492481+u-8vweljq06xf91jqqjr1a+v-fq4grrbqj2n8fpkwiiab.jpg?_hv=2&w=532',
    description: '切尔西女士休闲卫衣',
    category: '女装', // 女装分类
    subCategory: '卫衣',
  },

  // 儿童装备类（就像添加"儿童套餐"分类）
  {
    id: 11,
    name: '切尔西耐克主场体育场短裤 2025-26 - 童款',
    price: 55.0,
    brand: 'Nike',
    brandLogo: '/src/assets/logo/icons8-nike-64.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-nike-home-stadium-minikit-2025-26-infants_ss5_p-202492490+u-ga2ehwo9td0ci9wrlryi+v-fqqaytmn75ry7v4s3kjf.jpg?_hv=2&w=532',
    description: '切尔西儿童球衣套装',
    category: '儿童装备', // 儿童装备分类标签
    subCategory: '套装',
  },
  {
    id: 12,
    name: '切尔西 1998 ECWC 决赛球衣',
    price: 35.0,
    brand: 'Nike',
    brandLogo: '/src/assets/logo/icons8-nike-64.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-1998-ecwc-final-shirt_ss5_p-12017786+u-hyoafuowpcdz0otr2k6c+v-czbknknqh7zbw50mffos.jpg?_hv=2&w=532',
    description: '复古球衣',
    category: '复古', // 儿童装备分类标签
    subCategory: '复古球衣',
  },
  {
    id: 13,
    name: '切尔西玫瑰链条项链',
    price: 35.0,
    brand: '黄金',
    brandLogo: '/src/assets/logo/icons8-nike-64.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-rose-station-chain-necklace_ss5_p-203413222+u-m7wlm3g5ccztkujp3ukp+v-zlgm4xq7mxyfgdxlco1c.jpg?_hv=2&w=532"',
    description: '礼物及配件',
    category: '礼物及配件',
    subCategory: '礼物及配件',
  },
  {
    //清仓商品
    id: 14,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 15,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 16,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 17,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 18,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 19,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 20,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 21,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 22,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 23,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 24,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 25,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 26,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 27,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 28,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 29,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 30,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 31,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 32,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 33,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 34,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 35,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 36,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 37,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 38,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 39,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 40,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 41,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 42,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 43,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 44,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 45,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 46,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 47,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 48,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 49,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 50,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 51,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 52,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 53,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 54,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 55,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 56,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 57,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 58,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 59,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 60,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 61,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 62,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 63,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 64,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 65,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 66,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 67,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 68,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 69,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 70,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 71,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 72,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 73,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 74,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
  {
    id: 75,
    name: 'Chelsea 2025-26 秋季赛季 清仓商品',
    price: 0,
    brand: 'Chelsea',
    brandLogo: '/src/assets/logo/chelsea-logo.png',
    image:
      '//images.footballfanatics.com/chelsea/chelsea-padded-jacket-navy-mens_ss5_p-201642111+u-hokrkakv6649xsmajnfu+v-5ox4k8ofkdooawqn2g9s.jpg?_hv=2&w=400g',
    description: 'Chelsea 2025-26 秋季赛季 清仓商品',
    category: '清仓',
    subCategory: '清仓',
  },
]
