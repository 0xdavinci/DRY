tax = 0.07;
price = 100;
quantity = 5;

function calcuateTotal(price, quantity, tax) {
    return price * quantity * (1+tax);
}

console.log(calcuateTotal(price, quantity, tax));