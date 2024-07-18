function calculateCost() {
    let price = parseFloat(document.getElementById('price').value);
    let quantity = parseInt(document.getElementById('quantity').value);
    let tax = parseFloat(document.getElementById('tax').value) / 100;
    let discount = parseFloat(document.getElementById('discount').value) / 100;

    if (isNaN(price) || isNaN(quantity) || isNaN(tax) || isNaN(discount)) {
        alert('Por favor, ingrese todos los valores correctamente.');
        return;
    }

    let totalPrice = price * quantity;
    let totalTax = totalPrice * tax;
    let totalDiscount = totalPrice * discount;

    let totalCost = totalPrice + totalTax - totalDiscount;

    document.getElementById('totalCost').innerText = totalCost.toFixed(2);
}
