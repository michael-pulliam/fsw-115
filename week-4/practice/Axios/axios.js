//url: http://api.bryanuniversity.edu/michaelpulliam/list

//Get All

axios.get("http://api.bryanuniversity.edu/michaelpulliam/list")
.then(response => {
    for(i = 0; i < response.data.length; i++){
        const h1 = document.createElement("h1");
        h1.textContent = response.data[i].name
        document.body.appendChild(h1)
    }
})
.catch(error => console.log(error))



//CORS-anywhere
// ****add in front of get(url) to access if you cant get in
// https://cors-anywhere.herokuapp.com/

//Get One
// axios.get("http://api.bryanuniversity.edu/michaelpulliam/list/4fea283a-8315-45fa-a815-710445a470a9")
// .then(response => console.log(response.data))
// .catch(error => console.log(error))