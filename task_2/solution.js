function calcShipping(sum, min, shipping) {
  let productsSum = sum; // сумма в корзине
  let freeShippingMinSum = min; // минимальная сумма для бесплатной доставки
  let shippingPrice = shipping; // стоимость доставки
  let shippingSum;
  if (productsSum == 0) {
    shippingSum = 0;
  }
  if (productsSum >= freeShippingMinSum) {
    shippingSum = 0;
  }
  if (productsSum > 0 && productsSum < freeShippingMinSum) {
    shippingSum = shippingPrice;
  }

  return shippingSum;
}

function calcDiscount(sum, min, discount) {
  let productsSum = sum; // сумма в корзине
  let discountMinSum = min; // минимальная сумма для скидки
  let discountPart = discount; // величина скидки в процентах
  let discountSum;
  if (productsSum >= discountMinSum) {
    discountSum = (productsSum / 100) * discountPart;
  } else {
    discountSum = 0;
  }

  return discountSum;
}

function calcInvoice({
  sum,
  discountMinSum,
  discountPart,
  shippingFreeMinSum,
  shippingPrice,
}) {
  let productsSum = sum;
  let discountSum = calcDiscount(sum, discountMinSum, discountPart);
  let totalSum;
  totalSum = productsSum - discountSum;

  let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!

  // прибавьте к totalSum значение shippingSum
  totalSum += shippingSum;
  let freeShipping;
  shippingSum == 0 ? (freeShipping = true) : (freeShipping = false);
  return {
    discount: discountSum,
    freeShipping,
    shipping: shippingSum,
    total: totalSum,
  };
}
