var apiURL = 'https://app.pixelencounter.com/api/basic/monsters/random/png?size=100'


$(document).ready(function(){
    $('.dropdown-trigger').dropdown({
        coverTrigger: false
    });
});

// When the page is loaded...
$(document).ready (function() {
	// We generate a random number between 0 and 4 (the number of facts in the splashTextArray)
	var number = Math.floor((Math.random() * splashTextArray.length));
	// We display the fact from the splashTextArray that is in the random position we just generated.
	$("#splash-text").text(splashTextArray[number])
})

// This array holds all of our splash text options!
var splashTextArray = ["Trying to avoid a Tarrasque TPK? Let's see what options you have.", "You finally want to try something OTHER than fireball? Glad to see the growth.", "Don't forget that some spellcasters have access to ALL there spells, just make sure to prepare them after a long rest!", "Scared of Straud? we have a spell for that. "]


fetch(apiURL)
.then(data => {
return data.json();
})
.then(post => {
console.log(post.title);
});