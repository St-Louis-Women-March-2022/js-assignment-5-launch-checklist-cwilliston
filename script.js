// Write your JavaScript code here!
//const validate = require('./scriptHelper.js');

let pilot = document.getElementById("pilotName");
let copilot = document.getElementById("copilotName");
let fuelLevel = document.getElementById("fuelLevel");
let cargoLevel = document.getElementById("cargoMass");

window.addEventListener("load", function() {
    let launchForm = document.getElementById("launchForm");
    launchForm.addEventListener("submit", function() {
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);

        let listedPlanets;
        // Set listedPlanetsResponse equal to the value returned by calling myFetch()
        let listedPlanetsResponse;
        listedPlanetsResponse.then(function (result) {
            listedPlanets = result;
            console.log(listedPlanets);
        }).then(function () {
            console.log(listedPlanets);
            // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        })
    });
});