const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const weather = ["Sunny", "Partly Sunny", "Partly Cloudy", "Cloudy", "Raining", "Snowing", "Thunderstorm", "Foggy"];
const maxTemp = 110;
const minTemp = 32;
const lemonadeCost = 0.5;

let dailyTemp = [];
let inventory = 0;
let profit = 0;

document.getElementById("OpenTheStand").addEventListener("click", openTheStand);
document.getElementById("myData").addEventListener("click", myData);

generateWeather();
updateInventoryNotice();

function generateWeather() {
  for (let i = 0; i < days.length; i++) {
    const weatherToday = weather[Math.floor(Math.random() * weather.length)];
    const tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);
    dailyTemp[i] = tempToday;

    document.getElementById("5DayWeather").innerHTML +=
      `<div id='${days[i]}' class='${weatherToday}'>
        <b>Forecast for ${days[i]}:</b><br><br>${weatherToday} and ${tempToday}°F
       </div>`;
  }
}

function openTheStand() {
  resetResult();
  updateInventoryNotice();

  const newGlasses = Number(document.getElementById("numGlasses").value);
  const glassPrice = Number(document.getElementById("glassPrice").value);

  if (glassPrice <= 0.5) {
    alert("Please enter a price greater than $0.50");
    return;
  }

  if (inventory > 0 && newGlasses > 0) {
    alert("You still have leftover lemonade! Sell it before making more.");
    return;
  }

  if (inventory === 0) {
    inventory = newGlasses;
  }

  let totalGlassesSold = 0;

  for (let i = 0; i < days.length - 1; i++) { // Sunday is reserved for summary
    let glassesSold = Math.floor(dailyTemp[i] / glassPrice);

    if (glassesSold > inventory) {
      glassesSold = inventory;
    }

    inventory -= glassesSold;
    totalGlassesSold += glassesSold;

    document.getElementById("result").innerHTML += `<p>${days[i]}: You sold ${glassesSold} glasses.</p>`;

    if (inventory <= 0) {
      document.getElementById("result").innerHTML += `<p><b>You sold out!</b></p>`;
      break;
    }
  }

  displayResults(newGlasses, glassPrice, totalGlassesSold);
  updateInventoryNotice();
}

function displayResults(weeklyAdded, glassPrice, weeklySales) {
  const revenue = weeklySales * glassPrice;
  const expense = weeklyAdded * lemonadeCost;
  const weeklyProfit = revenue - expense;
  profit += weeklyProfit;

  document.getElementById("result").innerHTML += `
    <p><strong>Sunday Summary:</strong></p>
    <p>Total sold this week: ${weeklySales}</p>
    <p>Leftover lemonade: ${inventory}</p>
    <p>Total revenue: $${revenue.toFixed(2)}</p>
    <p>This week's profit: $${weeklyProfit.toFixed(2)}</p>
  `;
}

function resetResult() {
  document.getElementById("result").innerHTML = "";
}

function updateInventoryNotice() {
  const notice = document.getElementById("inventoryNotice");
  if (inventory > 0) {
    notice.innerText = `You still have ${inventory} unsold glasses of lemonade. Sell them before making more.`;
  } else {
    notice.innerText = "You have no leftover lemonade. Ready to make a new batch!";
  }
}

function myData() {
  console.log("Total profit so far: $" + profit.toFixed(2));
}
