//Basic axios Methods SYNTX

// axios.request(config)
// axios.get(url[, config])
// axios.delete(url[, config])
// axios.head(url[, config])
// axios.options(url[, config])
// axios.post(url[, data[, config]])
// axios.put(url[, data[, config]])
// axios.patch(url[, data[, config]])

//Read => GET
function getData(){
    axios.get("http://api.bryanuniversity.edu/michaelpulliam/list")
    .then(res => listData(res.data))
    .catch(error => console.log(error))
    
    }console.log(getData())
    function listData(data) {
        for(i = 0; i < data.length; i++){
            const h2 = document.createElement("h2")
            h2.textContent = data[i].name
            document.querySelector("#listContainer").appendChild(h2)
        }
    }
    getData()
    
    // Part 2 - Create => POST
    const todoForm = document.querySelector("#todoform") 
    
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault()
    
        const newTodo = {
            name: todoForm.name.value,
            description: todoForm.description.value,
            price: todoForm.price.value
        }
        todoForm.name.value = ""
        todoForm.description.value = ""
        todoForm.price.value = ""
    
        axios.post("http://api.bryanuniversity.edu/michaelpulliam/list", newTodo)
        .then(res => getData())
        .catch(error => console.log(error))
    })

// // Part 3 - PUT Part 1 - Update => PUT
// const update = {
//     name: "THIS HAS BEEN UPDATED"
// }

// axios.put("http://api.bryanuniversity.edu/michaelpulliam/list", update)
// Object.assign(newTodo, updates)

// // Each todo will have a checkbox where it can be marked complete or incomplete. 
// // Checking the checkbox should update the database. 
// // Part 4 - DELETE
// axios.delete("http://api.bryanuniversity.edu/michaelpulliam/list")
// .then(response => console.log(response))
// .catch(error => console.log(error))

// A user will be able to delete todos (this is different from marking a todo as “completed”)
// Each todo should be rendered with a button marked “X” or “Delete” that when clicked, will delete the Todo.
// Part 5 - PUT Part 2 (extra credit)

// Each Todo will have an "edit" button.
// When clicked, the info will change to input boxes that are autofilled with the old Todo data
// A user can change the value of these inputs
// When the "edit" button is clicked, it will change to a "save" button.
// When "save" is clicked, the form will disappear, and the new values will be displayed.
// On save, the todo will be edited in the database

