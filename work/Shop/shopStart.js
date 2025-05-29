const items = [
    // Drinks
    { name: "Coke", price: 7.5, category: "Drinks" },
    { name: "Fanta", price: 7.5, category: "Drinks" },
    { name: "Stoney", price: 9.5, category: "Drinks" },
    { name: "Pepsi", price: 7.0, category: "Drinks" },
    { name: "Twizza", price: 6.0, category: "Drinks" },
    { name: "Bottled Water", price: 5.0, category: "Drinks" },

    // Snacks
    { name: "Nik Naks", price: 6.0, category: "Snacks" },
    { name: "Big Korn Bites", price: 6.5, category: "Snacks" },
    { name: "Doritos", price: 9.0, category: "Snacks" },
    { name: "Lays", price: 10.0, category: "Snacks" },
    { name: "Simba Chips", price: 9.0, category: "Snacks" },
    { name: "Biltong 50g", price: 25.0, category: "Snacks" },

    // Meals
    { name: "Bunny Chow", price: 35.0, category: "Meals" },
    { name: "Vetkoek", price: 12.0, category: "Meals" },
    { name: "Boerewors Roll", price: 30.0, category: "Meals" },
    { name: "Pap & Wors", price: 28.0, category: "Meals" },
    { name: "Kota", price: 26.0, category: "Meals" },
    { name: "Chicken Feet", price: 15.0, category: "Meals" },

    // Essentials
    { name: "Matches", price: 2.0, category: "Essentials" },
    { name: "Cigarettes (single)", price: 2.5, category: "Essentials" },
    { name: "Candles", price: 4.0, category: "Essentials" },
    { name: "Soap Bar", price: 6.0, category: "Essentials" },
    { name: "Roll-on", price: 10.0, category: "Essentials" },

    // Sweets
    { name: "Chappies (5pc)", price: 1.0, category: "Sweets" },
    { name: "Fizz Pop", price: 1.5, category: "Sweets" },
    { name: "Wilson Toffees (5pc)", price: 2.0, category: "Sweets" },
    { name: "Bar One", price: 8.5, category: "Sweets" },
    { name: "Romany Creams", price: 14.0, category: "Sweets" },
    { name: "Milk Tart", price: 18.0, category: "Sweets" }
];

let quantities = Array(items.length).fill(0);
let totals = Array(items.length).fill(0);
let stock = Array.from({ length: items.length }, () => Math.floor(Math.random() * 13) + 3);
let totalOrderAmt = 0;

function add_selection(index) {
    if (quantities[index] < stock[index]) {
        quantities[index]++;
        totals[index] = quantities[index] * items[index].price;
        totalOrderAmt += items[index].price;
    } else {
        alert("Out of stock for: " + items[index].name);
    }
    display_all();
}

function remove_selection(index) {
    if (quantities[index] > 0) {
        quantities[index]--;
        totals[index] = quantities[index] * items[index].price;
        totalOrderAmt -= items[index].price;
    }
    display_all();
}

function display_all() {
    let myTable = `<table>
        <tr>
            <th>#</th>
            <th>Item</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Qty</th>
            <th>Total</th>
            <th>+1</th>
            <th>-1</th>
        </tr>`;

    for (let i = 0; i < items.length; i++) {
        myTable += `<tr>
            <td>${i + 1}</td>
            <td>${items[i].name}</td>
            <td>${items[i].category}</td>
            <td>R${items[i].price.toFixed(2)}</td>
            <td>${stock[i]}</td>
            <td>${quantities[i]}</td>
            <td>R${totals[i].toFixed(2)}</td>
            <td><button onclick="add_selection(${i})">Add</button></td>
            <td><button onclick="remove_selection(${i})">Remove</button></td>
        </tr>`;
    }

    myTable += `</table><p>Total Order Amount: R${totalOrderAmt.toFixed(2)}</p>`;
    document.getElementById("demo").innerHTML = myTable;
}

function restockAll() {
    for (let i = 0; i < stock.length; i++) {
        stock[i] = Math.floor(Math.random() * 13) + 3;
        quantities[i] = 0;
        totals[i] = 0;
    }
    totalOrderAmt = 0;
    display_all();
}

function TotalForEverything() {
    alert("Total amount to pay: R" + totalOrderAmt.toFixed(2));
}

window.onload = function () {
    display_all();
    document.getElementById("Shopright").addEventListener("click", TotalForEverything);
    document.getElementById("NextDay").addEventListener("click", restockAll);
};
