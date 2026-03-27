// product prices with names
let product_1 = 500;   // Shirt
let product_2 = 1000;  // Shoes
let product_3 = 1200;  // Bag
let product_4 = 900;   // Watch
let product_5 = 600;   // Cap

// taking quantity from user
let count_1 = Number(prompt("Enter quantity for Shirt:"));
let count_2 = Number(prompt("Enter quantity for Shoes:"));
let count_3 = Number(prompt("Enter quantity for Bag:"));
let count_4 = Number(prompt("Enter quantity for Watch:"));
let count_5 = Number(prompt("Enter quantity for Cap:"));

// calculating total for each product
let total_1 = product_1 * count_1;
let total_2 = product_2 * count_2;
let total_3 = product_3 * count_3;
let total_4 = product_4 * count_4;
let total_5 = product_5 * count_5;

// grand total before discount
let grandTotal = total_1 + total_2 + total_3 + total_4 + total_5;

let discount = 0;

// discount logic
if (grandTotal >= 10000) {
    discount = grandTotal * 0.10;
} 
else if (grandTotal >= 5000) {
    discount = grandTotal * 0.05;
} 
else if (grandTotal >= 3000) {
    discount = grandTotal * 0.02;
} 
else {
    discount = 0;
}

// final amount after discount
let finalTotal = grandTotal - discount;

// display bill
document.writeln(`
    <h2>Shopping Bill</h2>

    <table border="1" cellpadding="10">
        <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
        </tr>
        <tr><td>Shirt</td><td>${product_1}</td><td>${count_1}</td><td>${total_1}</td></tr>
        <tr><td>Shoes</td><td>${product_2}</td><td>${count_2}</td><td>${total_2}</td></tr>
        <tr><td>Bag</td><td>${product_3}</td><td>${count_3}</td><td>${total_3}</td></tr>
        <tr><td>Watch</td><td>${product_4}</td><td>${count_4}</td><td>${total_4}</td></tr>
        <tr><td>Cap</td><td>${product_5}</td><td>${count_5}</td><td>${total_5}</td></tr>

        <tr>
            <th colspan="3">Total Before Discount</th>
            <th>${grandTotal}</th>
        </tr>
        <tr>
            <th colspan="3">Discount</th>
            <th>${discount}</th>
        </tr>
        <tr>
            <th colspan="3">Total After Discount</th>
            <th>${finalTotal}</th>
        </tr>
    </table>
`);