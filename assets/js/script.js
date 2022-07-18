const api_url = "https://api.waifu.pics/sfw/cringe"

$(document).ready(function(){
    $('.dropdown-trigger').dropdown({
        coverTrigger: false
    });
});

fetch('https://api.waifu.pics/sfw/cringe')
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("NETWORK RESPONSE ERROR");
        }
    })
    .then(data => {
        console.log(data);
        document.querySelector("waifu").innerHTML = '<h3>hello</h3>'
    })
    .catch((error) => console.error("FETCH ERROR:", error));

