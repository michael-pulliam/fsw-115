//Basic axios Methods SYNTX

// axios.request(config)
// axios.get(url[, config])
// axios.delete(url[, config])
// axios.head(url[, config])
// axios.options(url[, config])
// axios.post(url[, data[, config]])
// axios.put(url[, data[, config]])
// axios.patch(url[, data[, config]])
let myId = []
//Read => GET
function getData(){
axios.get("http://api.bryanuniversity.edu/michaelpulliam/list")
.then(res => listData(res.data))
.catch(error => console.log(error))

}
function listData(data) {
    clearData()
    
    for(i = 0; i < data.length; i++){
        const h2 = document.createElement("h2")
        const deleteBtn = document.createElement("button")
        deleteBtn.setAttribute("class", "delete-btn");
        deleteBtn.textContent = "Delete"
        h2.textContent = `Title: ${data[i].name},  Description: ${data[i].description},  Price: ${data[i].price}`
        document.querySelector("#listContainer").appendChild(h2)
        h2.appendChild(deleteBtn)
        myId.push(data[i]._id)
        deleteListIdea()
    }
}
function clearData(){
   const el = document.querySelector("#listContainer")
   while(el.firstChild){
       el.removeChild(el.firstChild)
   }

}
getData()

// Part 2 - Create => POST
const todoForm = document.querySelector("#listForm") 

todoForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const newTodo = {
        name: todoForm.name.value,
        description: todoForm.description.value,
        price: todoForm.price.value,
        
    }
    todoForm.name.value = ""
    todoForm.description.value = ""
    todoForm.price.value = ""
    

    axios.post("http://api.bryanuniversity.edu/michaelpulliam/list", newTodo)
    .then(res => getData())
    .catch(error => console.log(error))
})
    // Part 3 - PUT Part 1 - Update => PUT
    const checkBox = document.createElement("input")
    checkBox.setAttribute("type", "checkbox")
    const update = {
        name: todoForm.name.value,
        description: todoForm.va
           
    }
    axios.put("http://api.bryanuniversity.edu/michaelpulliam/list", update)
Object.assign(newTodo, updates)

// Part 4 - DELETE
function deleteListIdea(){
    const btnArry = document.querySelectorAll(".delete-btn")
    for(i = 0; i < btnArry.length; i++){
        btnArry[i].addEventListener("click", function(){
            axios.delete(`http://api.bryanuniversity.edu/michaelpulliam/list/${myId[i]}`)
            .then(res => getData())
            .catch(error => console.log(error))
        })
        console.log(myId[i])
    }


    
}
    


// // document.addEventListener("mouseover", function(){
// //     var myDelete = document.querySelectorAll(".delete")
// //     myDelete.forEach(function(e, i){
//         e.addEventListener("click", function(){
//             axios.delete(`http://api.bryanuniversity.edu/Davey/list/${myId[i]}`)
//                 .catch(err => console.log(err))
//             e.parentElement.remove()
//         })
//     })
// })

// //checkoff completed tasks
// document.addEventListener("mouseover", function(){
//     var checkBox = document.querySelectorAll("input[type=checkbox]")
//     checkBox.forEach(function(e, i){
//         e.addEventListener("change", function(){
//             if (e.checked === true){
//                 e.parentElement.setAttribute("style", "text-decoration: line-through")
//                 axios.put(`http://api.bryanuniversity.edu/Davey/list/${myId[i]}`, {
//                     isComplete: true
//                 })
//                     .catch(err => console.log(err))
//             }
//             else {
//                 e.parentElement.setAttribute("style", "text-decoration: none")
//                 axios.put(`http://api.bryanuniversity.edu/Davey/list/${myId[i]}`, {
//                     isComplete: false
//                 })
//                     .catch(err => console.log(err))
//             }
//         })
//     })
// })
//remove task






// // Each todo will have a checkbox where it can be marked complete or incomplete. 
// // Checking the checkbox should update the database. 


// A user will be able to delete todos (this is different from marking a todo as “completed”)
// Each todo should be rendered with a button marked “X” or “Delete” that when clicked, will delete the Todo.
// Part 5 - PUT Part 2 (extra credit)

// Each Todo will have an "edit" button.
// When clicked, the info will change to input boxes that are autofilled with the old Todo data
// A user can change the value of these inputs
// When the "edit" button is clicked, it will change to a "save" button.
// When "save" is clicked, the form will disappear, and the new values will be displayed.
// On save, the todo will be edited in the database