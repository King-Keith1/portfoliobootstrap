let positions = {
  car1: 0,
  car2: 0,
  car3: 0,
  car4: 0
};

let raceInProgress = false;
let intervalIds = [];
let speedFactor = 1; // default speed

function moveCar(carId, distance = 20) {
  if (!raceInProgress) return;

  positions[carId] += distance;
  document.getElementById(carId).style.left = positions[carId] + "px";

  const trackWidth = document.getElementById('raceTrack').offsetWidth;
  if (positions[carId] >= trackWidth - 60) {
    raceInProgress = false;
    stopCPUs();
    alert(`${carId.toUpperCase()} wins!`);
  }
}

function playerGo() {
  moveCar('car1');
}

function startRace() {
  resetGame();
  raceInProgress = true;
  startCPUs();
}

function resetGame() {
  raceInProgress = false;
  stopCPUs();
  for (let car in positions) {
    positions[car] = 0;
    document.getElementById(car).style.left = "0px";
  }
}

function startCPUs() {
  ['car2', 'car3', 'car4'].forEach(carId => {
    const interval = setInterval(() => {
      const step = Math.floor(Math.random() * 15 + 5);
      moveCar(carId, step);
    }, ((Math.random() * 600 + 300) * speedFactor) * 0.75); // 25% faster
    intervalIds.push(interval);
  });
}

function stopCPUs() {
  intervalIds.forEach(id => clearInterval(id));
  intervalIds = [];
}

function setTrack(trackNumber) {
  const track = document.getElementById("raceTrack");
  switch (trackNumber) {
    case 1:
      track.style.background = "repeating-linear-gradient(0deg, #444 0px, #444 20px, #666 20px, #666 40px)";
      speedFactor = 1; // slowest
      break;
    case 2:
      track.style.background = "repeating-radial-gradient(circle at 50% 50%, #4CAF50 0px, #81C784 50px)";
      speedFactor = 0.75; // faster
      break;
    case 3:
      track.style.background = "repeating-linear-gradient(135deg, sandybrown 0px, sandybrown 10px, orange 10px, orange 20px)";
      speedFactor = 0.6; // faster
      break;
    case 4:
      track.style.background = "conic-gradient(black 0% 25%, white 25% 50%, black 50% 75%, white 75% 100%)";
      speedFactor = 0.45; // fastest
      break;
  }
}
