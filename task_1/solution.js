function addInCartMessage(title, price) {
    let productName = title;
    let productPrice = price;
    let message;
    message = productName + ' за ' + productPrice + ' теперь в корзине!';
    console.log(message);
    return message;
}

function addInCartCountChange(value) {
    let oldValue = value;
    let newValue;
    newValue = oldValue;
    newValue++;
    return newValue;
}

function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;
    let newSum = oldSum + difference;
    let newSumText =  `${newSum} ₽`;
    return newSumText;
} 

