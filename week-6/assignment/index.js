
async function myFile() {
    try{
        const newConst = [] 
        const nameUrl = await axios.get("https://www.dnd5eapi.co/api/monsters") 
        const result = await nameUrl
        for (i = 0; i < 3; i++) {
            newConst.push(axios.get(`https://www.dnd5eapi.co${result.data.results[i].url}`))
        }
        Promise.all(newConst)
            .then(res => {console.log(res)
                    for (i = 0; i < res.length; i++) {
                        var bodyData = document.querySelector("#bodyData")
                        var monsterName = document.createElement("h1")
                        var actionLabel = document.createElement("h2")
                        monsterName.textContent = res[i].data.name
                        actionLabel.textContent = "legendary Actions"
                        
                        bodyData.appendChild(monsterName)
                        bodyData.appendChild(actionLabel)
                        
                    
                        for (index = 0; index < res[i].data.actions.length; index++){
                            var actions = document.createElement("h3")
                            var actionsDesc = document.createElement("h3")
                            
                            actions.textContent = res[i].data.actions[index].name
                            actionsDesc.textContent = res[i].data.actions[index].desc
                            bodyData.appendChild(actions)
                            bodyData.appendChild(actionsDesc)
                        }
                        
                        
                     }      
                
            })
            .catch(err => console.log(err))
    }    
    catch(err){
        console.log(err)
    }
        
}
myFile()  

  