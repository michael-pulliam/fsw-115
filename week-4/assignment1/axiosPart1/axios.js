
axios.get("http://api.bryanuniversity.edu/michaelpulliam/list")
.then(response =>{
    for(i = 0; i < response.data.length; i++){
        let h2 = document.createElement("h2")
        h2.textContent = response.data[i].name
        
       
        if(response.data[i].isComplete === true){
            h2.setAttribute("style", "text-decoration: line-through")
        
        }
        document.querySelector("#container").appendChild(h2)
    }
})
.catch(error => console.log(error))

