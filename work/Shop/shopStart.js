var nums = [1, 2, 3, 4];
var items = ["Coke", "Kit Kat", "Bar One", "Fanta"];
var prices = [7.5, 9.5, 8.5, 7.5];
var quantities = [0, 0, 0, 0];
var totals = [0.0, 0.0, 0.0, 0.0];
var totalOrderAmt = 0;

function add_selection(x) {
    console.log("Add:", x);
    quantities[x] = quantities[x] + 1;
    totals[x] = prices[x] * quantities[x];
    totalOrderAmt += prices[x];
    display_all();
}

function allToGetHer() {
    let grandTotal = 0;
    for (let i = 0; i < totals.length; i++) {
        grandTotal += totals[i];
    }
    return grandTotal;
}

function remove_selection(x) {
    console.log("Remove:", x);
    if (quantities[x] > 0) { 
        quantities[x] -= 1;
        totals[x] = prices[x] * quantities[x]; 
        totalOrderAmt -= prices[x]; 
    }
    display_all(); 
}

function display_all() {
    // Build the table and include the border attribute only once
    let myTable = "<table border='1'><tr>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Num</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Item</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Price</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Quantity</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Total</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Add</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Remove</th>";
    myTable += "</tr>";

    // Create table rows for each item
    for (let i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td style='width: 100px; text-align: right;'>" + nums[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + items[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + prices[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + quantities[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + totals[i] + "</td>";
        myTable += "<td><button onclick='add_selection(" + i + ")'>Add</button></td>";
        myTable += "<td><button onclick='remove_selection(" + i + ")'>Remove</button></td>";
        myTable += "</tr>";
    }

    myTable += "</table>";
    // Optionally show the total order amount below the table
    myTable += "<br/><br/><p>Total Order Amount: " + totalOrderAmt + "</p>";

    // Now update the DOM inside the function
    document.getElementById("demo").innerHTML = myTable;
}

// Ensure the Purchase button ID matches your HTML
var button = document.getElementById("Shopright");
button.addEventListener("click", TotalForEverything);

function TotalForEverything() {
    let finalAmount = allToGetHer();
    alert("Total amount to pay: $" + finalAmount);
}

// Make sure the table is displayed when the page loads
window.onload = function() {
    display_all();
};
