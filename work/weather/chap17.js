//Listing 17.1
// for (var i = 10; i > 0; i--) {
//     alert(i);
//}
// alert("Blast Off!");

//Listing 17.2
// var myFriends = ["Agatha", "Agnes", "Jermaine", "Jack"];

// for (var i = 0; i < myFriends.length; i++){
//  alert(myFriends[i] + " is my friend.");
// }

//Listing 17.3
// alert(Math.random());

//Listing 17.4
// var myFriends = ["Agatha", "Agnes", "Jermaine", "Jack"];
// var randomFriend = Math.floor(Math.random() * myFriends.length);
// alert(myFriends[randomFriend]);

//Listing 17.5
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var weather = ["Sunny", "Partly Sunny", "Partly Cloudy", "Cloudy", "Raining", "Snowing", "Thunderstorm", "Foggy"];

var maxTemp = 100;
var minTemp = 0;
generateWeather();

function generateWeather() {
    for (var i = 0; i < days.length; i++) {
        var weatherToday = weather[Math.floor(Math.random() * weather.length)];
        var tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);

        document.getElementById("5DayWeather").innerHTML += "<div id='" + days[i] + "' class='" +
            weatherToday + "'><b>Forecast for " + days[i] + ":</b><br><br>" + weatherToday + " and " + 
            tempToday + " degrees.</div>";
    }
}

var myArray = ["HEY!!", "STOP THAT"]

for (let stop = 0; stop <  myArray.length; stop++) { 
    alert(myArray[stop])
};

// var multiplesOfTen = ["10", "20", "30", "40" , "50", "60", "70", "80", "90", "100"];
// let age = prompt("Enter your age:");

// if (age == multiplesOfTen[age]){
//     for (let i = 0; i < multiplesOfTen.length; i++){

//         if (age === "1>=30"){
//             console.log("You are a small boy.");
//         }else if (age === "31>=60"){
//             console.log("You are a grown man.");
//         }else if (age === "61>=100"){
//             console.log("Oupa!");
//         }else{
//             console.log("Go to an old age home");
//         }

//     }

// }