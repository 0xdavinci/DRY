const SETTINGS = { taxRate: 0.07};
function calculateTotal(price,quantity){
    return price * quantity * ( 1+ SETTINGS.taxRate);
}

console.log(calculateTotal(100,5));