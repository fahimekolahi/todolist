let toDoListWrapper = document.getElementById("toDoList-wrapper")
let toDoInput = document.getElementById("toDo-input")
let listAction = document.getElementById("listAction")

let toDoList = []

let editToDoStatus = false
let editToDoId = null

function addNewToDo(toDoText) {
    let newToDoObj = {
        id: Date.now() * Math.random(),
        text: toDoText
    }

    toDoList.push(newToDoObj)
    render()
}


function deletetoDo(todoId) {
    toDoList = toDoList.filter(item =>
        item.id !== todoId)
    render()
}


function updateTodo(todoId, newText) {
    toDoList = toDoList.map(item => {
        if (item.id !== todoId) {
            return item
        } else {
            item.text = newText
            return item
        }

    })

    render()
    editToDoStatus = false
    changeSubmitBtnStatus()

}










//dom

function btnadd() {
    addNewToDo(toDoInput.value)
    toDoInput.value = ""
}


function btnDelete(todoId) {
    deletetoDo(todoId)
}


function btnEdit(todoId) {
    editToDoStatus = true
    editToDoId = todoId
    changeSubmitBtnStatus()
}











function render() {
    let empty = ""
    toDoList.forEach(item => {
        empty += `
<div class="flex items-center gap-1">

<div class="w-[5rem] h-[2rem] bg-[#565656]>
<p> ${item.text}</p>
 </div>


<div>
<button onclick="btnDelete(${item.id})">

delete it
</button>



<button onclick="btnEdit(${item.id})">



edit it
</button>

</div>

</div>


`


    }
    )
    toDoListWrapper.innerHTML = empty

}

function changeSubmitBtnStatus() {

    if (editToDoStatus) {
        listAction.innerHTML = "update todo"
    } else {

        listAction.innerHTML = " add todo"
    }



}


listAction.addEventListener('click', () => {
    if (editToDoStatus) {
        console.log("edited")
        updateTodo(editToDoId, toDoInput.value)

    } else {
        console.log("added")
        btnadd()

    }


})

changeSubmitBtnStatus()
