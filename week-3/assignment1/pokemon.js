
var header = document.createElement("h1");
header.textContent = `Pokemon`;
header.setAttribute("id", "header");
document.body.appendChild(header);

const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/", true);
    xhr.send();
    

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            let data = JSON.parse(xhr.responseText);
            showData(data.results);
        } else if(xhr.readyState === 4 && xhr.status !== 200){
            let failedGet = document.createElement("h1")
            failedGet.textContent = "Failed To Retrieve Data"
            document.body.appendChild(failedGet)
        }
    }

    function showData(data){
        for(let i = 0; i < data.length; i++){
            const character = document.createElement("h1");
            character.textContent = data[i].name;
            document.body.appendChild(character);
            let listItem = document.createElement("ul");
            
            const addRequest = new XMLHttpRequest();
            addRequest.open("GET", `https://pokeapi.co/api/v2/pokemon/${i+1}`, true);
            addRequest.send();
            
        
            addRequest.onreadystatechange = function(){
                if(addRequest.readyState === 4 && addRequest.status === 200){
                   let addData = JSON.parse(addRequest.responseText);
                    displayDetails(addData.abilities);
                } else if(addRequest.readyState === 4 && addRequest.status !== 200) {
                    let failFetch = document.createElement("li");
                    failFetch.textContent = "Failed to Retrieve Data";
                    listItem.appendChild(failFetch)
                       
                }
                function displayDetails(data){
                    for (i = 0; i < data.length; i++){
                       let newList = document.createElement("li");
                        newList.textContent = data[i].ability.name;
                        listItem.appendChild(newList);
                    }
                }
            }
            document.body.appendChild(listItem)
        }  
    }




    
