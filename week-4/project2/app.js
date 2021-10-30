
// When the button is clicked, an axios.get request will go to an API of the students choosing and have the response data show up as a list on the HTML page.

// Must be fully styled - responsive

// 2 APIs must be used, (one for each page)
document.querySelector(".btn").addEventListener("click", getData)
document.querySelector("img").addEventListener("mouseover", iconTextHover)
document.querySelector("img").addEventListener("mouseout", function(){
    document.querySelector("#iconText").innerHTML = ""
})
document.querySelector("img").addEventListener("mouseout", function(){
    document.querySelector("#iconText2").innerHTML = ""
})
function iconTextHover(){
    if(document.body.id === "body2"){
    document.querySelector("#iconText").innerHTML = "Pokemon"
    }else{
        document.querySelector("#iconText2").innerHTML = "Planets"
    }
}


function getData(){
axios.get("https://api.le-systeme-solaire.net/rest/bodies/")
.then(response =>{
    for(i = 0; i < response.data.bodies.length; i++){
        let h1 = document.createElement("h1")
        h1.innerHTML = response.data.bodies[i].englishName
        document.querySelector("#name2").appendChild(h1)
    }
})

.catch(error => console.log(error))

axios.get("https://pokeapi.co/api/v2/pokemon/")
.then(response =>{
    for(i = 0; i < response.data.results.length; i++){
        let h1 = document.createElement("h1")
        h1.innerHTML = response.data.results[i].name
        document.querySelector("#name1").appendChild(h1)
    }
})

.catch(error => console.log(error))
}