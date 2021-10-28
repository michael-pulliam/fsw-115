// pending
// resolve - .then()
// reject - .catch()

// thenable function
function flipCoin(){
    return new Promise((resolve, reject) => {
        const randomNum = Math.floor(Math.random() * 2)

        if(randomNum === 0){
            resolve("Heads");
        } else if(randomNum === 1){
            reject("Tails");
        }
    })
}
document.querySelector("#output").addEventListener("click", flipCoin)

flipCoin()
    .then(response => console.log(response))
    .catch(error => console.log(error))

    Promise.resolve("something").then(response => console.log(response))

    function getData(){
        return new Promise(resolve => {
            setTimeout(resolve("Hello world"), 2000) //2000 = 2 sec. 
        })
    }
    getData()
        .then(response => console.log("I have resloved" + response))
        .catch(error => console.log("I errored"))