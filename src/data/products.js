// 产品数据管理文件 - 集中管理所有产品数据

// 切尔西产品数据
export const chelseaProducts = [
  {
    id: 1,
    image: "//images.footballfanatics.com/chelsea/chelsea-nike-dri-fit-adv-away-match-shirt-2025-26_ss5_p-202492461+u-lqx5mvrzscrk0ujiyh4f+v-jgjrum6bd9mosmmgs4xm.jpg?_hv=2&w=400",
    title: "切尔西 Nike Dri-Fit Adv 客场比赛球衣 2025-26",
    price: "147.00 欧元",
    link: "#"
  },
  {
    id: 2,
    image: "//images.footballfanatics.com/chelsea/chelsea-nike-dri-fit-adv-home-match-shirt-2025-26_ss5_p-202492461+u-lqx5mvrzscrk0ujiyh4f+v-jgjrum6bd9mosmmgs4xm.jpg?_hv=2&w=400",
    title: "切尔西 Nike Dri-Fit Adv 主场比赛球衣 2025-26",
    price: "147.00 欧元",
    link: "#"
  },
  {
    id: 3,
    image: "//images.footballfanatics.com/chelsea/chelsea-nike-dri-fit-adv-third-match-shirt-2025-26_ss5_p-202492461+u-lqx5mvrzscrk0ujiyh4f+v-jgjrum6bd9mosmmgs4xm.jpg?_hv=2&w=400",
    title: "切尔西 Nike Dri-Fit Adv 第三比赛球衣 2025-26",
    price: "147.00 欧元",
    link: "#"
  },
  {
    id: 4,
    image: "//images.footballfanatics.com/chelsea/chelsea-nike-dri-fit-adv-training-shirt-2025-26_ss5_p-202492461+u-lqx5mvrzscrk0ujiyh4f+v-jgjrum6bd9mosmmgs4xm.jpg?_hv=2&w=400",
    title: "切尔西 Nike Dri-Fit Adv 训练球衣 2025-26",
    price: "89.00 欧元",
    link: "#"
  },
  {
    id: 5,
    image: "//images.footballfanatics.com/chelsea/chelsea-nike-dri-fit-adv-shorts-2025-26_ss5_p-202492461+u-lqx5mvrzscrk0ujiyh4f+v-jgjrum6bd9mosmmgs4xm.jpg?_hv=2&w=400",
    title: "切尔西 Nike Dri-Fit Adv 短裤 2025-26",
    price: "67.00 欧元",
    link: "#"
  },
  {
    id: 6,
    image: "//images.footballfanatics.com/chelsea/chelsea-nike-dri-fit-adv-socks-2025-26_ss5_p-202492461+u-lqx5mvrzscrk0ujiyh4f+v-jgjrum6bd9mosmmgs4xm.jpg?_hv=2&w=400",
    title: "切尔西 Nike Dri-Fit Adv 袜子 2025-26",
    price: "23.00 欧元",
    link: "#"
  },
  {
    id: 7,
    image: "//images.footballfanatics.com/chelsea/chelsea-nike-dri-fit-adv-jacket-2025-26_ss5_p-202492461+u-lqx5mvrzscrk0ujiyh4f+v-jgjrum6bd9mosmmgs4xm.jpg?_hv=2&w=400",
    title: "切尔西 Nike Dri-Fit Adv 夹克 2025-26",
    price: "189.00 欧元",
    link: "#"
  },
  {
    id: 8,
    image: "//images.footballfanatics.com/chelsea/chelsea-nike-dri-fit-adv-pants-2025-26_ss5_p-202492461+u-lqx5mvrzscrk0ujiyh4f+v-jgjrum6bd9mosmmgs4xm.jpg?_hv=2&w=400",
    title: "切尔西 Nike Dri-Fit Adv 长裤 2025-26",
    price: "156.00 欧元",
    link: "#"
  }
]

// 其他球队的产品数据（示例）
export const arsenalProducts = [
  {
    id: 1,
    image: "//images.footballfanatics.com/arsenal/arsenal-adidas-home-shirt-2025-26.jpg",
    title: "阿森纳 Adidas 主场比赛球衣 2025-26",
    price: "145.00 欧元",
    link: "#"
  },
  // ... 更多阿森纳产品
]

// 获取产品数据的工具函数
export const getProductsByTeam = (teamName) => {
  const productMap = {
    'chelsea': chelseaProducts,
    'arsenal': arsenalProducts
  }
  return productMap[teamName] || []
}

// 分页工具函数
export const getPaginatedProducts = (products, page = 1, pageSize = 5) => {
  const startIndex = (page - 1) * pageSize
  const endIndex = startIndex + pageSize
  return products.slice(startIndex, endIndex)
}
