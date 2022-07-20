// const apiUrl = "https://www.dnd5eapi.co/api/"

// var pmAPI = ("https://app.pixelencounter.com/api/basic/monsters/random/png?size=100")

// DROWNDOWN CONTROL 
$(document).ready(function(){
    $('.dropdown-trigger').dropdown({
        coverTrigger: false
    });
});

$(document).ready(function(){
    $('select').formSelect();
});

// API TESTING 
// var apiQuery = function(){
//     fetch("https://www.dnd5eapi.co/api/" + whichClass + "/")
//     .then(response => response.json())
//     .then(data => console.log(data));
// }

//GETTING SELECTION INFORMATION
var classSelect = document.querySelector('#classSelect');

var logSelectedClass = function() {
    console.log(classSelect.options[classSelect.selectedIndex].id);
    logSelectedClass = logSelectedClass;
    return logSelectedClass;
};

classSelect.addEventListener('change', logSelectedClass);
logSelectedClass();


// SEARCHING API FOR SPELLS RELATED TO SELECTED CLASS 
  var getSpells = function(userClass) {
     var apiUrl = "https://www.dnd5eapi.co/api/classes/" + logSelectedClass + "/spells";

     fetch(apiUrl)
         .then(function(response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function(data) {
                     console.log(data);
                })
             }}
        )
     }




// GRABBING SELECTED CLASS FROM classSelect


// GRABBING SELECTED LVL FROM levelSelect
var levelSelect = document.querySelector("#levelSelect");

var logSelectedLevel = function() {
    console.log(levelSelect.options[levelSelect.selectedIndex].id);
    return logSelectedLevel
}

levelSelect.addEventListener('change', logSelectedLevel);
logSelectedLevel();

getSpells();




// Storing past levels and class in localStorage
const selectedClass = document.getElementById('classSelect');
selectedClass.addEventListener("change", (event) => {
    let currentArea = event.target.value;
    localStorage.setItem("class", currentArea);
})

const selectedLevel = document.getElementById('levelSelect');
selectedLevel.addEventListener('change', (event) => {
    let currentArea = event.target.value;
    localStorage.setItem('level', currentArea);
} )

const playerName = document.getElementById('pName');
playerName.addEventListener('change', (event) => {
    let currentArea = event.target.value;
    localStorage.setItem("playerName", currentArea);
})


//REFILLING DROPDOWNS WITH PREVIOUS INPUTS

//getItem(playerName)
//getItem(level)
//getItem(class)

var playerNameData = localStorage.getItem('playerName');


// apiQuery();


// When the page is loaded...
$(document).ready (function() {
	// We generate a random number between 0 and 4 (the number of facts in the splashTextArray)
	var number = Math.floor((Math.random() * splashTextArray.length));
	// We display the fact from the splashTextArray that is in the random position we just generated.
	$("#splash-text").text(splashTextArray[number])
})

// This array holds all of our funny quips
var splashTextArray = [
    "Trying to avoid a Tarrasque TPK? Let's see what options you have.", 
    "You finally want to try something OTHER than fireball? Glad to see the growth.", 
    "Don't forget that some spellcasters have access to ALL there spells, just make sure to prepare them after a long rest!", 
    "Scared of Strahd? we have a spell for that. ",
    "Want to try and mess around with the fabric of reality? You're at the right place.",
    "No matter what you do, don't ever bully the tavernkeep.",
    "You want to use a 9th level slot on Hellish Rebuke? You sure?",
    "I'm sure that hooded figure you met in the tavern is a lovely person and definitely not some sort of evil lich! Go befriend them!",
    "Whats the difference between a wizard and a sorcerer? Class.",
    "Yo momma so dumb she starved and Illithid"
]

// $(document).ready (function() {
// fetch(pmAPI)
//  .then(response => response.json())
//  .then(data => display(data));})