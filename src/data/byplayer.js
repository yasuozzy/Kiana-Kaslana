// import img1 from '../../assets/logo/8.png'
// import img2 from '../../assets/logo/julian.png'
import img1 from '../assets/logo/8.png'
import img2 from '../assets/logo/julian.png'
import img3 from '../assets/logo/qieerji.jpg'
import img4 from '../assets/logo/tijjani-reijnders.jpg'

export const byPlayer = [
  {
    id: 1,
    position: '前锋',
    name: '马尔穆什',
    number: '# 7',
    description:
      '马穆什是我们的埃及国脚前锋，他是一位充满活力、节奏快的前锋，以其令人难以置信的控球技巧和给任何防守带来麻烦的能力而闻名。作为世界足坛冉冉升起的新星，马穆什最近以一记惊人的远射打入上角，点亮了球场，为他赢得了赛季最佳进球奖。从 Puma 购买曼城官方 Marmoush 衬衫和短裤，专为男士、女士和儿童设计。个性化您的球衣背面印有"Marmoush"#7，表达您对比赛中最令人兴奋的人才之一的支持。',
    img: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dweede746f/images/2025_campaigns/Home%20Kit%202025-26/Shop%20By%20Player/07_Marmoush/homepage_sbp_homekit2526_marmoush_mobile.jpg?sw=375&sfrm=jpg',
    // merchandise 是这个球员的专属商品列表，就像他的个人小商店
    // 数组里每个对象代表一件商品，包含图片、名称、价格等信息
    merchandise: [
      {
        id: 'm1_1', // 商品ID，m1表示马尔穆什(第1个球员)，_1表示第1件商品
        title: '曼城马尔穆什球衣', // 商品标题，显示在页面上的名称
        name: '曼城马尔穆什球衣', // 🆕 ProductDetail页面需要的name字段，和title保持一致
        price: 85.0, // 商品价格，字符串格式方便显示货币符号
        image: '/src/assets/logo/mc-maermushi.webp', // 商品图片路径
        sizes: ['S', 'M', 'L', 'XL', '2XL'], // 可选尺码
        // 🆕 ProductDetail页面需要的缩略图数组，用于小图大图切换功能
        thumbnails: [
          {
            url: '/src/assets/logo/mc-maermushi.webp', // 主图作为第一张缩略图
            alt: '马尔穆什球衣正面图',
          },
          {
            url: '/src/assets/logo/mc-maermush1.webp', // 其他图片作为额外缩略图
            alt: '马尔穆什球衣背面图',
          },
          {
            url: '/src/assets/logo/mc-maermush2.webp',
            alt: '马尔穆什球衣侧面图',
          },
        ],
      },
      {
        id: 'm1_2',
        title: '马尔穆什曼城客场球衣 2025/26 成人印有 MARMOUSH 7 字样',
        name: '马尔穆什曼城客场球衣 2025/26 成人印有 MARMOUSH 7 字样', // 🆕 添加name字段
        price: '£ 85.00',
        image: '/src/assets/logo/mc-maermush1.webp',
        sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'], // 🆕 添加尺码选择
        // 🆕 添加缩略图数组
        thumbnails: [
          {
            url: '/src/assets/logo/mc-maermush1.webp',
            alt: '马尔穆什客场球衣正面',
          },
          {
            url: '/src/assets/logo/mc-maermushi.webp',
            alt: '马尔穆什客场球衣背面',
          },
        ],
      },
      {
        id: 'm1_3',
        title: '曼城马尔穆什主场球衣 2025/26 成人印有 MARMOUSH 7 字样',
        name: '曼城马尔穆什主场球衣 2025/26 成人印有 MARMOUSH 7 字样', // 🆕 添加name字段
        price: '£ 25.00',
        image: '/src/assets/logo/mc-maermush2.webp',
        sizes: ['S', 'M', 'L', 'XL', '2XL'], // 🆕 添加尺码选择
        // 🆕 添加缩略图数组
        thumbnails: [
          {
            url: '/src/assets/logo/mc-maermush2.webp',
            alt: '马尔穆什主场球衣正面',
          },
          {
            url: '/src/assets/logo/mc-maermush3.webp',
            alt: '马尔穆什主场球衣背面',
          },
        ],
      },
      {
        id: 'm1_4',
        title: '曼城客场球衣 2025/26（印有MARMOUSH 7字样）',
        name: '曼城客场球衣 2025/26（印有MARMOUSH 7字样）', // 🆕 添加name字段
        price: '£ 25.00',
        image: '/src/assets/logo/mc-maermush3.webp',
        sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'], // 🆕 添加尺码选择
        // 🆕 添加缩略图数组
        thumbnails: [
          {
            url: '/src/assets/logo/mc-maermush3.webp',
            alt: '马尔穆什客场球衣特别版',
          },
          {
            url: '/src/assets/logo/mc-maermushi.webp',
            alt: '马尔穆什客场球衣细节',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    position: '前锋',
    name: '哈兰德',
    number: '# 9',
    description:
      '想要像哈兰德一样取得高分吗？从 Puma 购买曼城哈兰德官方球衣和短裤，男士、女士和儿童均可购买。通过选择使用不同的字体和徽章进行自定义，您在球场内外看起来都像团队的一员。谁知道呢，只要穿上合适的衣服，你可能会上演和这个人本人一样多的帽子戏法。不要错过这个机会，表达你对曼城这位不可阻挡的前锋的支持。',
    img: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dwebf6309e/images/2025_campaigns/Home%20Kit%202025-26/Shop%20By%20Player/09_Haaland/homepage_sbp_homekit2526_haaland_mobile.jpg?sw=375&sfrm=jpg',
    // 哈兰德的专属商品列表
    merchandise: [
      {
        id: 'h2_1', // h2表示哈兰德(第2个球员)
        title: '曼城足球Starz Haaland 迷你动动人偶',
        name: '曼城足球Starz Haaland 迷你动动人偶', // 🆕 添加name字段
        price: '£ 6.00',
        image: '../../../assets/logo/701225144001_pp_01_mcfc.png',
        sizes: ['均码'], // 🆕 人偶商品只有一个尺寸
        // 🆕 添加缩略图数组
        thumbnails: [
          {
            url: '../../../assets/logo/701225144001_pp_01_mcfc.png',
            alt: '哈兰德迷你人偶正面',
          },
          {
            url: '/src/assets/logo/mc-halande1.jpg',
            alt: '哈兰德迷你人偶侧面',
          },
        ],
      },
      {
        id: 'h2_2',
        title: '曼城主场球衣 2025/26 儿童印有 HAALAND 9 字样',
        name: '曼城主场球衣 2025/26 儿童印有 HAALAND 9 字样', // 🆕 添加name字段
        price: '£ 65.00',
        image: '/src/assets/logo/mc-halande1.jpg',
        sizes: ['XS', 'S', 'M', 'L'], // 🆕 儿童尺码
        // 🆕 添加缩略图数组
        thumbnails: [
          {
            url: '/src/assets/logo/mc-halande1.jpg',
            alt: '哈兰德儿童球衣正面',
          },
          {
            url: '../../../assets/logo/701225144001_pp_01_mcfc.png',
            alt: '哈兰德儿童球衣背面',
          },
        ],
      },
      {
        id: 'h2_3',
        title: '曼城哈兰德 Funko Pop',
        name: '曼城哈兰德 Funko Pop', // 🆕 添加name字段
        price: '£ 16.00',
        image:
          'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9f8e7654/images/70123789/70123789_ALT01.jpg?sw=800&sh=800',
        sizes: ['均码'], // 🆕 收藏品只有一个尺寸
        // 🆕 添加缩略图数组
        thumbnails: [
          {
            url: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9f8e7654/images/70123789/70123789_ALT01.jpg?sw=800&sh=800',
            alt: '哈兰德Funko Pop正面',
          },
          {
            url: '/src/assets/logo/mc-halande1.jpg',
            alt: '哈兰德Funko Pop包装',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    position: '中场',
    name: '罗德里戈',
    number: '# 16',
    description:
      '罗德里戈——西班牙中场大师！拥有出色的传球视野和控球能力，是曼城中场的核心。他的稳定发挥和关键传球为球队创造了无数机会，是瓜迪奥拉战术体系中不可或缺的一环。',
    img: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dwf5fdbd6d/images/2025_campaigns/Home%20Kit%202025-26/Shop%20By%20Player/16_Rodrigo/homepage_sbp_homekit2526_rodrigo_mobile.jpg?sw=375&sfrm=jpg',
    // 罗德里戈的专属商品列表
    merchandise: [
      {
        id: 'r3_1', // r3表示罗德里戈(第3个球员)
        title: '曼城罗德里戈16号球衣',
        price: '£ 80.00',
        image: '../../../assets/logo/701225144001_pp_01_mcfc.png',
      },
      {
        id: 'r3_2',
        title: '曼城中场大师训练服',
        price: '£ 45.00',
        image: '/src/assets/logo/mc-halande1.jpg',
      },
      {
        id: 'r3_3',
        title: '罗德里戈签名海报',
        price: '£ 12.00',
        image:
          'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9f8e7654/images/70123789/70123789_ALT01.jpg?sw=800&sh=800',
      },
    ],
  },
  {
    id: 4,
    position: '中场', // 添加缺失的位置信息
    name: '福登',
    number: '# 47',
    description:
      '福登——曼城本土天才！从青训营成长起来的技术型中场，拥有出色的盘带和创造力。作为曼城未来的核心，他用精湛的技术和无限的潜力征服了所有球迷的心。', // 添加描述
    img: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dw5f0e8776/images/2025_campaigns/Home%20Kit%202025-26/Shop%20By%20Player/47_Foden/homepage_sbp_homekit2526_foden_mobile.jpg?sw=375&sfrm=jpg',
    // 福登的专属商品列表
    merchandise: [
      {
        id: 'f4_1',
        title: '曼城福登47号青训纪念球衣',
        price: '£ 75.00',
        image: '../../../assets/logo/701225144001_pp_01_mcfc.png',
      },
      {
        id: 'f4_2',
        title: '本土英雄福登海报套装',
        price: '£ 18.00',
        image: '/src/assets/logo/mc-halande1.jpg',
      },
      {
        id: 'f4_3',
        title: '福登签名足球',
        price: '£ 22.00',
        image:
          'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9f8e7654/images/70123789/70123789_ALT01.jpg?sw=800&sh=800',
      },
    ],
  },
  {
    id: 5,
    position: '中场', // 添加位置
    name: '德布劳内',
    number: '# 17',
    description:
      '德布劳内——比利时魔术师！拥有世界顶级的传球视野和脚法，他的每一脚传球都可能创造奇迹。作为曼城的中场指挥官，他用精准的传球和关键的进球书写着传奇。', // 添加描述
    img: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dw63643774/images/2025_campaigns/Home%20Kit%202025-26/Shop%20By%20Player/17_deBruyne/homepage_sbp_homekit2526_debruyne_mobile.jpg?sw=375&sfrm=jpg',
    // 德布劳内的专属商品列表
    merchandise: [
      {
        id: 'kdb5_1',
        title: '德布劳内17号传奇球衣',
        price: '£ 90.00',
        image: '../../../assets/logo/701225144001_pp_01_mcfc.png',
      },
      {
        id: 'kdb5_2',
        title: '比利时魔术师纪念品套装',
        price: '£ 35.00',
        image: '/src/assets/logo/mc-halande1.jpg',
      },
      {
        id: 'kdb5_3',
        title: '德布劳内限量版手表',
        price: '£ 150.00',
        image:
          'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9f8e7654/images/70123789/70123789_ALT01.jpg?sw=800&sh=800',
      },
    ],
  },
  {
    id: 6,
    position: '中场',
    name: '恩佐',
    number: '# 8',
    description: '恩佐——阿根廷中场新星！技术全面的中场球员，拥有出色的组织能力和传球技巧。',
    img: img1,
    // 恩佐的默认商品列表
    merchandise: [
      {
        id: 'e6_1',
        title: '恩佐8号球衣',
        price: '£ 70.00',
        image: '../../../assets/logo/701225144001_pp_01_mcfc.png',
      },
      {
        id: 'e6_2',
        title: '阿根廷风格训练服',
        price: '£ 40.00',
        image: '/src/assets/logo/mc-halande1.jpg',
      },
      {
        id: 'e6_3',
        title: '恩佐签名照片',
        price: '£ 15.00',
        image:
          'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9f8e7654/images/70123789/70123789_ALT01.jpg?sw=800&sh=800',
      },
    ],
  },
  {
    id: 7,
    position: '前锋',
    name: '阿尔瓦雷斯',
    number: '# 19',
    description: '阿尔瓦雷斯——阿根廷小蜘蛛！灵活快速的前锋，拥有出色的射门技巧和跑位意识。',
    img: img2,
    merchandise: [
      {
        id: 'a7_1',
        title: '阿尔瓦雷斯19号球衣',
        price: '£ 80.00',
        image: '../../../assets/logo/701225144001_pp_01_mcfc.png',
      },
      {
        id: 'a7_2',
        title: '小蜘蛛纪念T恤',
        price: '£ 25.00',
        image: '/src/assets/logo/mc-halande1.jpg',
      },
      {
        id: 'a7_3',
        title: '阿尔瓦雷斯迷你模型',
        price: '£ 20.00',
        image:
          'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9f8e7654/images/70123789/70123789_ALT01.jpg?sw=800&sh=800',
      },
    ],
  },
  {
    id: 8,
    position: '后卫',
    name: '格瓦迪奥尔',
    number: '# 24',
    description:
      '格瓦迪奥尔——克罗地亚铁卫！现代足球完美的中后卫，既能防守又能参与进攻，是曼城防线的新支柱。',
    img: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dwfb714710/images/2025_campaigns/Home%20Kit%202025-26/Shop%20By%20Player/24_Gvardiol/homepage_sbp_homekit2526_gvardiol_mobile.jpg?sw=375&sfrm=jpg',
    merchandise: [
      {
        id: 'g8_1',
        title: '格瓦迪奥尔24号防守球衣',
        price: '£ 75.00',
        image: '../../../assets/logo/701225144001_pp_01_mcfc.png',
      },
      {
        id: 'g8_2',
        title: '克罗地亚铁卫护腕',
        price: '£ 15.00',
        image: '/src/assets/logo/mc-halande1.jpg',
      },
      {
        id: 'g8_3',
        title: '格瓦迪奥尔签名足球',
        price: '£ 28.00',
        image:
          'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9f8e7654/images/70123789/70123789_ALT01.jpg?sw=800&sh=800',
      },
    ],
  },
  {
    id: 9,
    position: '边锋',
    name: '多库',
    number: '# 11',
    description: '多库——比利时速度之王！拥有惊人的速度和突破能力，他的每次冲刺都能撕裂对手的防线。',
    img: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dwcae0ce4d/images/2025_campaigns/Home%20Kit%202025-26/Shop%20By%20Player/11_Doku/homepage_sbp_homekit2526_doku_mobile.jpg?sw=375&sfrm=jpg',
    merchandise: [
      {
        id: 'd9_1',
        title: '多库11号速度球衣',
        price: '£ 78.00',
        image: '../../../assets/logo/701225144001_pp_01_mcfc.png',
      },
      {
        id: 'd9_2',
        title: '速度之王运动鞋',
        price: '£ 120.00',
        image: '/src/assets/logo/mc-halande1.jpg',
      },
      {
        id: 'd9_3',
        title: '多库限量版折扇',
        price: '£ 12.00',
        image:
          'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9f8e7654/images/70123789/70123789_ALT01.jpg?sw=800&sh=800',
      },
    ],
  },
  {
    id: 10,
    name: '迪亚斯',
    number: '# 3',
    img: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dw29d49da0/images/2025_campaigns/Home%20Kit%202025-26/Shop%20By%20Player/03_Dias/homepage_sbp_homekit2425_rubendias_mobile.jpg?sw=375&sfrm=jpg',
  },
  {
    id: 11,
    name: '格拉利什',
    number: '# 10',
    img: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dwcb58f34d/images/2025_campaigns/Home%20Kit%202025-26/Shop%20By%20Player/10_Grealish/homepage_sbp_homekit2526_grealish_mobile.jpg?sw=375&sfrm=jpg',
  },
  {
    id: 12,
    name: '埃德森',
    number: '# 31',
    img: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dw29d49da0/images/2025_campaigns/Home%20Kit%202025-26/Shop%20By%20Player/03_Dias/homepage_sbp_homekit2425_rubendias_mobile.jpg?sw=375&sfrm=jpg',
  },
  {
    id: 13,
    name: '埃德森',
    number: '# 31',
    img: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dw1e6190f3/images/2025_campaigns/Home%20Kit%202025-26/Shop%20By%20Player/31_Ederson/homepage_sbp_homekit2526_ederson_mobile.jpg?sw=375&sfrm=jpg',
  },
  {
    id: 14,
    name: '鲍勃',
    number: '# 52',
    img: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dw664ffb2a/images/2025_campaigns/Home%20Kit%202025-26/Shop%20By%20Player/52_Bobb/homepage_sbp_homekit2526_bobb_mobile.jpg?sw=375&sfrm=jpg',
  },
  {
    id: 15,
    name: '多纳鲁马',
    number: '# 25',
    img: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dwe8895fd4/images/players/Shop%20by%20Player%202025-26/donnarumma.jpg?sw=375&sfrm=jpg',
  },
  {
    id: 16,
    name: '切尔基',
    number: '# 14',
    img: img3,
  },
  {
    id: 17,
    name: '赖因德斯',
    number: '# 4',
    img: img4,
  },
  {
    name: '',
    number: '',
    img: '',
  },
  {
    name: '',
    number: '',
    img: '',
  },
  {
    name: '',
    number: '',
    img: '',
  },
  {
    name: '',
    number: '',
    img: '',
  },
  {
    name: '',
    number: '',
    img: '',
  },
  {
    name: '',
    number: '',
    img: '',
  },
  {
    name: '',
    number: '',
    img: '',
  },
]
