const habitats = ["farm","grasslands","urban","desert","jungle","woodlands","oceans","freshwater"]

var animals = [
    {name: "Pig", sound:"pig.mp3", habitat:"farm", emoji:"🐖"},
    {name: "Cow", sound:"cow.mp3", habitat:"farm", emoji:"🐄"},
    {name: "Cat", sound:"cat.mp3", habitat:"urban", emoji:"🐈"},
    {name: "Lion", sound:"lion.mp3", habitat:"grasslands", emoji:"🦁"},
    {name: "Wolf", sound:"wolf.mp3", habitat:"woodlands", emoji:"🐺"},
    {name: "Dog", sound:"dog.mp3", habitat:"urban", emoji:"🐕"},
    {name: "Turkey", sound:"turkey.mp3", habitat:"farm", emoji:"🦃"},
    {name: "Chicken", sound:"chicken.mp3", habitat:"farm", emoji:"🐓"},
    {name: "Horse", sound:"horse.mp3", habitat:"farm", emoji:"🐎"},
    {name: "Elephant", sound:"elephant.mp3", habitat:"grasslands", emoji:"🐘"},
    {name: "Whale", sound:"whale.mp3", habitat:"oceans", emoji:"🐋"},
    {name: "Alligator", sound:"alligator.mp3", habitat:"freshwater", emoji:"🐊"},
    {name: "Ape", sound:"ape.mp3", habitat:"jungle", emoji:"🦍"}
]

animals.sort(function sortAnimals(a,b) {
    if (a.name > b.name) return 1;
    if (b.name > a.name) return -1;
    return 0;
})


// Create variables to reference the elements on the page.
var animalSelector = document.querySelector("#animalSelector")
var animalSearch = document.querySelector("#animalFind")
var animalList = document.querySelector("#animalList")


// Populate the select box with all of the available habitat choices

// For Loop over an array
// habitats.sort()
// for(i=0; i < habitats.length; i++) {
//     var option = document.createElement("option");
//     option.text = habitats[i]
//     animalSelector.add(option)
// }


// While Loop over an array
// let i = 0
// while (i < habitats.length) {
//     var option = document.createElement("option");
//     option.text = habitats[i]
//     animalSelector.add(option)
    
//     i++
// }


// For Each Loop on an array
habitats.sort().forEach(function updateSelector(habitat) {
    var option = document.createElement("option");
    option.text = habitat
    animalSelector.add(option)
})


// Add Event Listener to Select Box, Search Box
animalSelector.addEventListener("change", function() { 
    // Show all the animals that match the selected habitat
    showAnimalsByHabitat(this.value)
})

animalSearch.addEventListener("keyup", function() { 
    // New Search, clear out old results
    animalList.innerHTML = ""
    // Search for an animal based on user input
    searchAnimalList(this.value)
})


// Display only those animals in our database that match the user's selection
// either via select box or input search box

function showAnimalsByHabitat(choice) {
    // clear out any of the old values.
    animalList.innerHTML = ""

    // For Loop to filter

    for(let i=0; i < animals.length; i++) {
        if ( (choice === "all") || (animals[i].habitat === choice) )  {
            showAnimal(animals[i])
        }
    }
}

// Function to find animal that matches the user input
// Use the array filter method to show animals that match the search criteria as the
// user enters the name a character at a type.

function searchAnimalList(searchTerm) {
    if (searchTerm.length > 0) {
        let selectedAnimals = animals.filter(function matchName(animal) {
            return (animal.name.toLowerCase().startsWith(searchTerm.toLowerCase()))
        })  
        
        selectedAnimals.forEach(showAnimal)
    }
    
}      


// Function to add animal to to the DOM
function showAnimal(animal) {
    let li = document.createElement("li");
    li.innerHTML = `${animal.name} (${animal.emoji}) <i id="${animal.name}" class="fas fa-volume-up" data-sound="${animal.sound}"></i>`
    animalList.appendChild(li)
    document.querySelector(`#${animal.name}`).addEventListener("click", function() { playSound(this.dataset.sound)}, false)
}

// Function to play sound file
function playSound(soundFile) {
    let audio = new Audio("animal_sounds\\"+soundFile)
    audio.play();
}


