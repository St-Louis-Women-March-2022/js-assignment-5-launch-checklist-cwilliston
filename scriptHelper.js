// Write your helper functions here!
//require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   if (testInput === null){
    return "Empty";
   } else if (isNaN(testInput)){
    return "Is a Number";
   } else if (!isNaN(testInput)){
    return "Not a Number";
   };
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const faulty = document.getElementbyId("faultyItems");
    const status = document.getElementbyId("launchStatus");
    const pilotStatus = document.getElementbyId("pilotStatus");
    const copilotStatus = document.getElementbyId("copilotStatus");
   
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty" ){
        alert("Invalid input. All fields are required.")
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number"){
        alert("Invalid input. Pilot and Co-pilot names should not be numbers.")
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number"){
        alert("Invalid input. Fuel Level and Cargo Mass must be numbers.")
    };
    
    // pilotStatus.innerHTML = `Pilot ${NAME HERE} Ready`;
    // copilotStatus.innerHTML = `Co-pilot ${NAME HERE} Ready`;

    if (fuelLevel < 10000 || cargoLevel > 10000){
        faulty.style.visibility = 'visible';
        status.style.color = 'red';
        status.innerHTML = 'Shuttle not ready to launch';
    } else {
        status.style.color = 'green';
        status.innerHTML = 'Shuttle is ready for launch';
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

// module.exports = {
//     addDestinationInfo: addDestinationInfo,
//     validateInput: validateInput,
//     formSubmission: formSubmission,
//     pickPlanet: pickPlanet,
//     myFetch: myFetch
// }
