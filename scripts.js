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
<div class="flex items-center gap-1 mx-auto border border-gray-500 p-2 my-2 rounded-[15px]">
<input type="checkbox" class=" w-[1.5rem] h-[1.5rem] bg-white ">

<p class="bg-[#25273C]  text-white rounded-[20px] p-[5px] m-[10px] w-[18rem] "> ${item.text}</p>
 


<div class="flex gap-5">
<button onclick="btnDelete(${item.id})" class="bg-[#FF8996] bg-gradient-to-r from-blue-900  to-pink-900 rounded-[20px] w-[4rem]">

<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-trash-fill mx-auto" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
</svg>
</button>



<button onclick="btnEdit(${item.id})" class="bg-[#FF8996] bg-gradient-to-r from-blue-900  to-pink-900 rounded-[20px] w-[4rem]">



<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-pencil-square mx-auto m-3" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
</svg>
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
