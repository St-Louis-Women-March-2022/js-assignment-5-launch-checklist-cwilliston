
window.addEventListener("load", function() {
    let launchForm = document.getElementById("launchForm");

    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
    });

    let planet = pickPlanet(listedPlanets);
    console.log(planet);
    let name = planet.name;
    let diameter = planet.diameter;
    let star = planet.star;
    let distance = planet.distance;
    let moons = planet.moons;
    let imageUrl = planet.image;

    addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
    
    launchForm.addEventListener("submit", function() {
        let list = document.getElementById("faultyItems");
        let pilot = document.getElementById("pilotName").value;
        let copilot = document.getElementById("copilotName").value;
        let fuelLevel = document.getElementById("fuelLevel").value;
        let cargoLevel = document.getElementById("cargoMass").value;
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);



        event.preventDefault();
    });


});