// 生成12位随机优惠券代码

export function generateCouponCode() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let result = '' // 存储最终生成的优惠券代码
  for (let i = 0; i < 12; i++) {
    //每次循环，从chars字符库里 挑一个字符，加到result盒子里
    //Math.floor() 向下取整 Math.random() 随机数 chars.length 字符库的长度
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

//优惠券类型和折扣配置
export const couponTypes = {
  // DISCOUNT10唯一标识符 表示10%折扣
  //  discoun折扣值：0.1表示10%的折扣（因为1-0.1=0.9，就是9折）
  DISCOUNT10: { discount: 0.1, name: '9折优惠券' },
  DISCOUNT20: { discount: 0.2, name: '8折优惠券' },
  DISCOUNT30: { discount: 0.3, name: '7折优惠券' },
  // 优惠券类型：'FIXED50'是标识（FIXED表示"固定金额"，区别于上面的比例折扣）
  FIXED50: { discount: 50, name: '满减50元券', type: 'fixed' },
  FIXED100: { discount: 100, name: '满减100元券', type: 'fixed' },
}

// 验证优惠券 couponCode是用户输入的优惠券代码
export const validateCoupon = (couponCode) => {
  // 先检查优惠券代码是否存在 如果存在就返回优惠券类型，不存在就返回null
  return couponTypes[couponCode] || null
}

// 计算优惠后的价格 couponType是优惠券类型，originalPrice是原价
export const calculateDiscount = (couponCode, originalPrice) => {
  const coupon = validateCoupon(couponCode) // 使用传入的couponType参数来验证优惠券
  //如果优惠券不存在，就返回原价
  if (!coupon) {
    return originalPrice // originalPrice是原价
  }
  // 如果优惠券存在，就计算优惠后的价格
  if (coupon.type === 'fixed') {
    //如果优惠券类型是固定金额，就计算优惠后的价格  Math.max(0, originalPrice - coupon.discount) 是计算优惠后的价格，0是优惠后的价格不能小于0，originalPrice - coupon.discount是优惠后的价格
    return Math.max(0, originalPrice - coupon.discount)
  } else {
    // 百分比折扣 1 - coupon.discount是折扣比例，originalPrice * (1 - coupon.discount)是计算优惠后的价格
    return originalPrice * (1 - coupon.discount)
  }
}
