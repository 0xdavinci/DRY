function applyTax(price) {
    return price * (1+taxRate);
}

let finalPrice = applyTax(basePrice);
let discountPrice = applyTax(basePrice) * (1-discount);