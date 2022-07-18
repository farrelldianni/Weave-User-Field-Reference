const apiUrl = "https://www.dnd5eapi.co/api/";


function classSelected() {
    var subjectIdNode = document.getElementById("classSelect");
    var value = subjectIdNode.options[subjectIdNode.selectedIndex].text;
    console.log("class selected " + value);

}


$(document).ready(function(){
    $('.dropdown-trigger').dropdown({
        coverTrigger: false
    });
});

$(document).ready(function(){
    $('select').formSelect();
});

var apiQuery = function(){
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => console.log(data));
};

let select = document.getElementById('subclassSelect');

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

apiQuery();

