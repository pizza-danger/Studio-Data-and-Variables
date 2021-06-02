// FORK this starter file and save it to your own Repl.it account.

// Declare and initialize the 12 variables here:
let date = 'Monday 2019-03-18';
let time = '10:05:34 AM';
let astronautCount = 7;
let astronautStatus = 'ready';
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel = '100%';
let weatherStatus = 'clear';

const spacer = '-------------------------------------';


// Write code to generate the LC04 report here:
console.log(spacer);
console.log("> LC04 - LAUNCH CHECKLIST");
console.log(spacer);
console.log("Date: " + date);
console.log("Time: " + time);
console.log("");

console.log(spacer);
console.log("> ASTRONAUT INFO");
console.log(spacer);
console.log("* count: " + astronautCount);
console.log("* status: " + astronautStatus);
console.log("");

console.log(spacer);
console.log("> FUEL DATA");
console.log(spacer);
console.log("* Fuel temp celsius: " + fuelTempCelsius + " C");
console.log("* Fuel level: " + fuelLevel);
console.log("");

console.log(spacer);
console.log("> MASS DATA");
console.log(spacer);
console.log("* Crew mass: " + crewMassKg + " kg");
console.log("* Fuel mass: " + fuelMassKg + " kg");
console.log("* Shuttle mass: " + shuttleMassKg + " kg");
console.log("* Total mass: " + totalMassKg + " kg");
console.log("");

console.log(spacer);
console.log(">FLIGHT PLAN");
console.log(spacer);
console.log("* weather: " + weatherStatus);
console.log("");

console.log(spacer);
console.log(">OVERALL STATUS");
console.log(spacer);
console.log("* Clear for takeoff: YES");


// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.