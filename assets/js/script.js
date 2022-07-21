// const apiUrl = "https://www.dnd5eapi.co/api/"

var waifuAPI = ("https://api.waifu.pics/sfw/shinobu")
var request = new XMLHttpRequest()

// function getData() {
//     const response = await fetch("https://api.waifu.pics/sfw/shinobu")
//     const data = await response.json()
// }



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
var classSelect = document.querySelector('#classSelect');

var logSelectedClass = function() {
    console.log(classSelect.options[classSelect.selectedIndex].id);
    return logSelectedClass;
};

classSelect.addEventListener('change', logSelectedClass);
logSelectedClass();

// GRABBING SELECTED LVL FROM levelSelect
var levelSelect = document.querySelector("#levelSelect");

var logSelectedLevel = function() {
    console.log(levelSelect.options[levelSelect.selectedIndex].id);
    return logSelectedLevel
}

levelSelect.addEventListener('change', logSelectedLevel);
logSelectedLevel();






// const p = document.getElementById("waifu")
// fetch("https://api.waifu.pics/sfw/shinobu")
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data)
//     });

function randomPic() {
    $("#waifu").attr("src", "waifu()")
    // console.log("hi")
};



$(document).ready(randomPic());

// fetch("https://api.waifu.pics/sfw/shinobu")
//     .then(response => response.json())
//     .then((data) => console.log(data));

var waifu = function() {
    fetch("https://api.waifu.pics/sfw/kill")
    .then(response => response.json())
    .then(data => {
        console.log(data.url)
        var img = document.createElement('img')
        img.setAttribute('src', data.url)
        document.getElementById('image').append(img)
    });
}

waifu();


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


$(document).ready (function() {
fetch(pmAPI)
 .then(response => response.json())
 .then(data => display(data));})

// $(document).ready (function() {
// fetch(pmAPI)
//  .then(response => response.json())
//  .then(data => display(data));})


$("#goBtn").click(function() {
    spellList();
});

function spellChoices(data) {
    for (var i = 0; i < data.results.length; i++) {
        console.log(data.results[i].name)
        var p = document.createElement('p')
        p.textContent = data.results[i].name
        document.getElementById('waifu').append(p)
    }
}

var spellList = function() {
    if (classSelect.options[classSelect.selectedIndex].id === "warlock") {
        if (levelSelect.options[levelSelect.selectedIndex].id === "1")
        fetch("https://www.dnd5eapi.co/api/classes/warlock/levels/1/spells")
            .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    spellChoices(data)
                })
            }}
            )
            if (levelSelect.options[levelSelect.selectedIndex].id === "2")
            fetch("https://www.dnd5eapi.co/api/classes/warlock/levels/2/spells") 
                .then(function(response) {
                if(response.ok) {
                    response.json().then(function(data) {
                        spellChoices(data)
                    })
                }}
                )
    if (levelSelect.options[levelSelect.selectedIndex].id === "3")
        fetch("https://www.dnd5eapi.co/api/classes/warlock/levels/3/spells") 
            .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    cspellChoices(data);
                })
            }}
            )
            if (levelSelect.options[levelSelect.selectedIndex].id === "4")
        fetch("https://www.dnd5eapi.co/api/classes/warlock/levels/4/spells") 
            .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    spellChoices(data);
                })
            }}
            )
            if (levelSelect.options[levelSelect.selectedIndex].id === "5")
        fetch("https://www.dnd5eapi.co/api/classes/warlock/levels/5/spells") 
            .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    spellChoices(data);
                })
            }}
            )
        }
    if (classSelect.options[classSelect.selectedIndex].id === "druid") {
        if (levelSelect.options[levelSelect.selectedIndex].id === "1")
        fetch("https://www.dnd5eapi.co/api/classes/druid/levels/1/spells")
            .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    spellChoices(data);
                })
            }}
            )
            if (levelSelect.options[levelSelect.selectedIndex].id === "2")
            fetch("https://www.dnd5eapi.co/api/classes/druid/levels/2/spells") 
                .then(function(response) {
                if(response.ok) {
                    response.json().then(function(data) {
                        spellChoices(data);
                    })
                }}
                )
    if (levelSelect.options[levelSelect.selectedIndex].id === "3")
        fetch("https://www.dnd5eapi.co/api/classes/druid/levels/3/spells") 
            .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    spellChoices(data);
                })
            }}
            )
            if (levelSelect.options[levelSelect.selectedIndex].id === "4")
        fetch("https://www.dnd5eapi.co/api/classes/druid/levels/4/spells") 
            .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    spellChoices(data);
                })
            }}
            )
            if (levelSelect.options[levelSelect.selectedIndex].id === "5")
        fetch("https://www.dnd5eapi.co/api/classes/druid/levels/5/spells") 
            .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    spellChoices(data);
                })
            }}
            )
    }
    if (classSelect.options[classSelect.selectedIndex].id === "bard") {
        if (levelSelect.options[levelSelect.selectedIndex].id === "1")
        fetch("https://www.dnd5eapi.co/api/classes/bard/levels/1/spells")    
            .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    spellChoices(data);
                })
            }}
            )
            if (levelSelect.options[levelSelect.selectedIndex].id === "2")
            fetch("https://www.dnd5eapi.co/api/classes/bard/levels/2/spells") 
                .then(function(response) {
                if(response.ok) {
                    response.json().then(function(data) {
                        spellChoices(data);
                    })
                }}
                )
    if (levelSelect.options[levelSelect.selectedIndex].id === "3")
        fetch("https://www.dnd5eapi.co/api/classes/bard/levels/3/spells") 
            .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    spellChoices(data);
                })
            }}
            )
            if (levelSelect.options[levelSelect.selectedIndex].id === "4")
        fetch("https://www.dnd5eapi.co/api/classes/bard/levels/4/spells") 
            .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    spellChoices(data);
                })
            }}
            )
            if (levelSelect.options[levelSelect.selectedIndex].id === "5")
        fetch("https://www.dnd5eapi.co/api/classes/bard/levels/5/spells") 
            .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    spellChoices(data);
                })
            }}
            )
    }
    if (classSelect.options[classSelect.selectedIndex].id === "paladin") {
        if (levelSelect.options[levelSelect.selectedIndex].id === "1")
        fetch("https://www.dnd5eapi.co/api/classes/paladin/levels/1/spells")
            .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    spellChoices(data);
                })
            }}
            )
            if (levelSelect.options[levelSelect.selectedIndex].id === "2")
            fetch("https://www.dnd5eapi.co/api/classes/paladin/levels/2/spells") 
                .then(function(response) {
                if(response.ok) {
                    response.json().then(function(data) {
                        spellChoices(data);
                    })
                }}
                )
    if (levelSelect.options[levelSelect.selectedIndex].id === "3")
        fetch("https://www.dnd5eapi.co/api/classes/paladin/levels/3/spells") 
            .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    spellChoices(data);
                })
            }}
            )
            if (levelSelect.options[levelSelect.selectedIndex].id === "4")
        fetch("https://www.dnd5eapi.co/api/classes/paladin/levels/4/spells") 
            .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    spellChoices(data);
                })
            }}
            )
            if (levelSelect.options[levelSelect.selectedIndex].id === "5")
        fetch("https://www.dnd5eapi.co/api/classes/paladin/levels/5/spells") 
            .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    spellChoices(data);
                })
            }}
            )
    }
    if (classSelect.options[classSelect.selectedIndex].id === "ranger") {
        if (levelSelect.options[levelSelect.selectedIndex].id === "1")
        fetch("https://www.dnd5eapi.co/api/classes/ranger/levels/1/spells")
            .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    spellChoices(data);
                })
            }}
            )
            if (levelSelect.options[levelSelect.selectedIndex].id === "2")
            fetch("https://www.dnd5eapi.co/api/classes/ranger/levels/2/spells") 
                .then(function(response) {
                if(response.ok) {
                    response.json().then(function(data) {
                        spellChoices(data);
                    })
                }}
                )
    if (levelSelect.options[levelSelect.selectedIndex].id === "3")
        fetch("https://www.dnd5eapi.co/api/classes/ranger/levels/3/spells") 
            .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    spellChoices(data);
                })
            }}
            )
            if (levelSelect.options[levelSelect.selectedIndex].id === "4")
        fetch("https://www.dnd5eapi.co/api/classes/ranger/levels/4/spells") 
            .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    spellChoices(data);
                })
            }}
            )
            if (levelSelect.options[levelSelect.selectedIndex].id === "5")
        fetch("https://www.dnd5eapi.co/api/classes/ranger/levels/5/spells") 
            .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    spellChoices(data);
                })
            }}
            )
    }
    if (classSelect.options[classSelect.selectedIndex].id === "sorcerer") {
       if (levelSelect.options[levelSelect.selectedIndex].id === "1")
        fetch("https://www.dnd5eapi.co/api/classes/sorcerer/levels/1/spells") 
            .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    spellChoices(data);
                })
            }}
            )
            if (levelSelect.options[levelSelect.selectedIndex].id === "2")
            fetch("https://www.dnd5eapi.co/api/classes/sorcerer/levels/2/spells") 
                .then(function(response) {
                if(response.ok) {
                    response.json().then(function(data) {
                        spellChoices(data);
                    })
                }}
                )
    if (levelSelect.options[levelSelect.selectedIndex].id === "3")
        fetch("https://www.dnd5eapi.co/api/classes/sorcerer/levels/3/spells") 
            .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    spellChoices(data);
                })
            }}
            )
            if (levelSelect.options[levelSelect.selectedIndex].id === "4")
        fetch("https://www.dnd5eapi.co/api/classes/sorcerer/levels/4/spells") 
            .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    spellChoices(data);
                })
            }}
            )
            if (levelSelect.options[levelSelect.selectedIndex].id === "5")
        fetch("https://www.dnd5eapi.co/api/classes/sorcerer/levels/5/spells") 
            .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    spellChoices(data);
                })
            }}
            )
    }
    if (classSelect.options[classSelect.selectedIndex].id === "wizard") {
        if (levelSelect.options[levelSelect.selectedIndex].id === "1")
        fetch("https://www.dnd5eapi.co/api/classes/wizard/levels/1/spells")
            .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    spellChoices(data);
                })
            }}
            )
            if (levelSelect.options[levelSelect.selectedIndex].id === "2")
            fetch("https://www.dnd5eapi.co/api/classes/wizard/levels/2/spells") 
                .then(function(response) {
                if(response.ok) {
                    response.json().then(function(data) {
                        spellChoices(data);
                    })
                }}
                )
    if (levelSelect.options[levelSelect.selectedIndex].id === "3")
        fetch("https://www.dnd5eapi.co/api/classes/wizard/levels/3/spells") 
            .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    spellChoices(data)
                })
            }}
            )
            if (levelSelect.options[levelSelect.selectedIndex].id === "4")
        fetch("https://www.dnd5eapi.co/api/classes/wizard/levels/4/spells") 
            .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    spellChoices(data);
                })
            }}
            )
            if (levelSelect.options[levelSelect.selectedIndex].id === "5")
        fetch("https://www.dnd5eapi.co/api/classes/wizard/levels/5/spells") 
            .then(function(response) {
            if(response.ok) {
                response.json().then(function(data) {
                    spellChoices(data);
                })
            }}
            )
        }
};


spellList()



// fetch(apiUrl)
//          .then(function(response) {
//             if (response.ok) {
//                 console.log(response);
//                 response.json().then(function(data) {
//                      console.log(data);
//                 })
//              }}
//         )
