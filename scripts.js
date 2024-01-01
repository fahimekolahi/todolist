let toDoListWrapper = document.getElementById("toDoList-wrapper")
let toDoInput = document.getElementById("toDo-input")
let listAction = document.getElementById("listAction")

let toDoList = []

let editToDoStatus = false
let editToDoId = null

function addNewToDo(toDoText) {
    let newToDoObj = {
        id: Date.now() * Math.random(),
        text: toDoText,
        isComplete : false
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
<div class="flex items-center gap-1 mx-auto ">
<input type="checkbox" class=" w-[1.5rem] h-[1.5rem] bg-white ">

<p class="bg-white rounded-[20px] p-[5px] m-[10px] w-[18rem]"> ${item.text}</p>
 


<div class="flex gap-5">
<button onclick="btnDelete(${item.id})" class="bg-[#FF8996] bg-opacity-60 rounded-[20px] w-[5rem]">

delete it
</button>



<button onclick="btnEdit(${item.id})" class="bg-[#FF8996] bg-opacity-60 rounded-[20px] w-[5rem]">



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
