require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   const destination = document.getElementById("missionTarget");
   destination.innerHTML =`<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}<li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`
};

function validateInput(testInput) {
   if (testInput === ""){
    return "Empty";
   } else if (!isNaN(testInput)){
    return "Is a Number";
   } else if (isNaN(testInput)){
    return "Not a Number";
   };
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const status = document.getElementById("launchStatus");
    const pilotstatus = document.getElementById("pilotStatus");
    const copilotstatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");
   
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty" ){
        alert("Invalid input. All fields are required.");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number"){
        alert("Invalid input. Pilot and Co-pilot names should not be numbers.")
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number"){
        alert("Invalid input. Fuel Level and Cargo Mass must be numbers.")
    };
    
    pilotstatus.innerHTML = `Pilot ${pilot} Ready`;
    copilotstatus.innerHTML = `Co-pilot ${copilot} Ready`;

    if (fuelLevel < 10000){
        list.style.visibility = 'visible';
        status.style.color = 'red';
        status.innerHTML = 'Shuttle not ready to launch';
        fuelStatus.innerHTML = 'Not enough fuel for journey!';
    } else if (cargoLevel > 10000) {
        list.style.visibility = 'visible';
        status.style.color = 'red';
        status.innerHTML = 'Shuttle not ready to launch';
        cargoStatus.innerHTML = 'Too much cargo mass for journey!';
    } else {
        status.style.color = 'green';
        status.innerHTML = 'Shuttle is ready for launch';
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    return planets[index];

}



module.exports = {
    addDestinationInfo: addDestinationInfo,
    validateInput: validateInput,
    formSubmission: formSubmission,
    pickPlanet: pickPlanet,
    myFetch: myFetch,
}

// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;
