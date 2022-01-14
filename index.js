calculateBill = function (bill, vat, tips) {
    return bill * vat * tips
}

module.exports = calculateBill;