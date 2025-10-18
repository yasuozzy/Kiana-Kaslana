
export const categoryFilters = [
  {
    title: '排序方式',
    name: '1',
    options: [
      { label: '最低价格', value: 'price-asc', type: 'radio', name: 'sort' },
      { label: '最高价格', value: 'price-desc', type: 'radio', name: 'sort' },
      { label: '畅销品', value: 'sales', type: 'radio', name: 'sort' },
      { label: '最新商品', value: 'newest', type: 'radio', name: 'sort' },
    ],
  },
  {
    title: '各种门',
    name: '2',
    options: [
      { label: '上衣', value: 'goalkeeper', type: 'radio' },
      { label: '围巾', value: 'defender', type: 'radio' },
      { label: '复古的', value: 'midfielder', type: 'radio' },
      { label: '外套', value: 'outerwear', type: 'radio' },
      { label: '宠物装备', value: 'shirt', type: 'radio' },
      { label: '家和办公室', value: 'shoes', type: 'radio' },
      { label: '帽子', value: 'sports', type: 'radio' },
      { label: '帽衫和针织衫', value: 'socks', type: 'radio' },
      { label: '收藏品纪念品', value: 'collectibles', type: 'radio' },
      { label: '汽车配置', value: 'car', type: 'radio' },
      { label: '泳装', value: 'swimwear', type: 'radio' },
      { label: '玩具和游戏', value: 'sports', type: 'radio' },
      { label: '球场配件', value: 'equipment', type: 'radio' },
      { label: '球衣', value: 'football', type: 'radio' },
      { label: '睡衣和内衣', value: 'soccer', type: 'radio' },
      { label: '礼物卡', value: 'sports', type: 'radio' },
      { label: '纪念品', value: 'other', type: 'radio' },
      { label: '裤子和短裤', value: 'Pants', type: 'radio' },
      { label: '训练', value: 'socks', type: 'radio' },
      { label: '设备', value: 'sports', type: 'radio' },
      { label: "足球装备", value: 'shoes', type: 'radio' },
      { label: "紧身裤", value: 'Leggings', type: 'radio' },
      { label: "配饰", value: 'shirt', type: 'radio' },
      { label: "高级礼物", value: 'shirts', type: 'radio' },
    ],
  },
  {
    title: '性别/年龄',
    name: '3',
    options: [
      { label: '男士', value: 'men', type: 'radio' },
      { label: '女士', value: 'women', type: 'radio' },
      { label: '儿童', value: 'kids', type: 'radio' },
      { label: '青少年', value: 'youth', type: 'radio' },
    ],
  },
  {
    title: '球衣类型',
    name: '4',
    options: [
      { label: '主场球衣', value: 'home', type: 'radio' },
      { label: '客场球衣', value: 'away', type: 'radio' },
      { label: '第三球衣', value: 'third', type: 'radio' },
      { label: '训练服', value: 'training', type: 'radio' },
    ],
  },
  {
    title: '选手',
    name: '5',
    link: '#',
    options: [
        // 切尔西2024-25赛季阵容
        { label: '科尔·帕尔默', name: '科尔·帕尔默', value: 'cole-palmer', type: 'radio' , link: '/player/cole-palmer' },
        { name: '尼古拉·雅克松', value: 'nicolas-jackson', type: 'radio' , link: '/player/nicolas-jackson' },
        { name: '恩佐·费尔南德斯', value: 'enzo-fernandez', type: 'radio' , link: '/player/enzo-fernandez' },
        { name: '米哈伊洛·穆德里克', value: 'mykhailo-mudryk', type: 'radio' , link: '/player/mykhailo-mudryk' },
        { name: '佩德罗·内托', value: 'pedro-neto', type: 'radio' , link: '/player/pedro-neto' }, // 2024夏窗新援
        { name: '若昂·菲利克斯', value: 'joao-felix', type: 'radio' , link: '/player/joao-felix' }, // 2024夏窗新援
        { name: '杰登·桑乔', value: 'jadon-sancho', type: 'radio' , link: '/player/jadon-sancho' }, // 2024夏窗租借加盟
        { name: '里斯·詹姆斯', value: 'rees-james', type: 'radio' , link: '/player/rees-james' },
        { name: '本·奇尔韦尔', value: 'ben-chilwell', type: 'radio' , link: '/player/ben-chilwell' },
        { name: '列维·科尔威尔', value: 'levi-colwill', type: 'radio' , link: '/player/levi-colwill' },
        { name: '罗伯特·桑切斯', value: 'robert-sanchez', type: 'radio' , link: '/player/robert-sanchez' },
        { name: '莫伊塞斯·凯塞多', value: 'moises-caicedo', type: 'radio' , link: '/player/moises-caicedo' },
        { name: '马克·吉乌', value: 'marc-guiu', type: 'radio' , link: '/player/marc-guiu' }, // 2024夏窗新援
        { name: '基尔南·迪尤斯伯里-霍尔', value: 'kiernan-dewsbury-hall', type: 'radio' , link: '/player/kiernan-dewsbury-hall' }, // 2024夏窗新援
        { name: '卡尔尼·丘库埃梅卡', value: 'carney-chukwuemeka', type: 'radio' , link: '/player/carney-chukwuemeka' },
        { name: '马洛·古斯托', value: 'malo-gusto', type: 'radio' , link: '/player/malo-gusto' },
        // 曼城2024-25赛季阵容
        { name: '埃尔林·哈兰德', value: 'erling-haaland', type: 'radio' , link: '/player/erling-haaland' }, // 修正链接
        { name: '凯文·德布劳内', value: 'kevin-de-bruyne', type: 'radio' , link: '/player/kevin-de-bruyne' },
        { name: '埃德森', value: 'ederson', type: 'radio' , link: '/player/ederson'  },
        { name: '凯尔·沃克', value: 'kyle-walker', type: 'radio' , link: '/player/kyle-walker' },
        { name: '鲁本·迪亚斯', value: 'ruben-dias', type: 'radio' , link: '/player/ruben-dias' },
        { name: '曼努埃尔·阿坎吉', value: 'manuel-akanji', type: 'radio' , link: '/player/manuel-akanji' },
        { name: '约什科·格瓦迪奥尔', value: 'josko-gvardiol', type: 'radio' , link: '/player/josko-gvardiol' },
        { name: '罗德里', value: 'rodri', type: 'radio' , link: '/player/rodri' },
        { name: '贝尔纳多·席尔瓦', value: 'bernardo-silva', type: 'radio' , link: '/player/bernardo-silva' },
        { name: '杰克·格拉利什', value: 'jack-grealish', type: 'radio' , link: '/player/jack-grealish' },
        { name: '菲尔·福登', value: 'phil-foden', type: 'radio' , link: '/player/phil-foden' },
        { name: '胡利安·阿尔瓦雷斯', value: 'julian-alvarez', type: 'radio' , link: '/player/julian-alvarez' }, // 2024夏窗离队（转会马竞）
        { name: '萨维奥', value: 'savio', type: 'radio' , link: '/player/savio' }, // 2024夏窗新援
        { name: '伊尔凯·京多安', value: 'ilkay-gundogan', type: 'radio' , link: '/player/ilkay-gundogan' }, // 2024夏窗回归
        { name: '杰里米·多库', value: 'jeremy-doku', type: 'radio' , link: '/player/jeremy-doku' },
    ],
  },
  {
    title: '热门收藏',
    name: '6',
    options: [
      { label: '热门新品', value: 'new', type: 'radio' },
    //   { label: '限量版', value: 'arsenal', type: 'radio' },
    //   { label: '纪念版', value: 'liverpool', type: 'radio' },
    //   { label: '曼城', value: 'mancity', type: 'radio' },
    ],
  },
  {
    title: '定制店',
    name: '7',
    options: [
      { label: '定制的', value: 'custom1', type: 'radio' },
      // { label: '个性定制', value: 'custom2', type: 'radio' },
      // { label: '球员定制', value: 'custom3', type: 'radio' },
    ],
  },
  {
    title: '推荐品牌',
    name: '8',
    options: [
      { label: 'Nike', value: 'nike', type: 'radio', isDiv: true },
      { label: 'New Era', value: 'adidas', type: 'radio', isDiv: true },
      { label: 'Puma', value: 'puma', type: 'radio', isDiv: true },
      // { label: 'Umbro', value: 'umbro', type: 'radio', isDiv: true },
    ],
  },
  {
    title: '颜色',
    name: '9',
    isColor: true, //    isColor: true, 这是一个布尔值，true表示是颜色选项，false表示不是颜色选项
    options: [
      { label: '灰色', value: '#808080' },
      { label: '无色', value: 'transparent' },
      { label: '海军蓝', value: '#000080' },
      { label: '奶油色', value: '#fffdd0' },
      { label: '皇家蓝', value: '#4169e1' },
      { label: '卡其色', value: '#f0e68c' },
      { label: '粉色', value: '#ffc0cb' },
      { label: '深绿色', value: '#006400' },
      { label: '金色', value: '#ffd700' },
      { label: '银色', value: '#c0c0c0' },
      { label: 'Apricot', value: '#fbceb1' },
      { label: '紫色', value: '#800080' },
      { label: '珊瑚色', value: '#ff7f50' },
      { label: 'Obsidian', value: '#182026' },
      { label: '麻灰色', value: '#b0b0b0' },
      { label: '翡翠色', value: '#00c9b1' },
      { label: '蓝绿色', value: '#20b2aa' },
      { label: 'Athletic Navy', value: '#001f5b' },
      { label: '棕色', value: '#a52a2a' },
      { label: '浅米色', value: '#f5f5dc' },
      { label: '浅蓝色', value: '#add8e6' },
      { label: '棕褐色', value: '#9a6324' }
    ]

  },
];
