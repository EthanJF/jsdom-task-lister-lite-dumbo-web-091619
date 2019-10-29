document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let submit = document.querySelectorAll("input")[1]

  submit.addEventListener("click", function(event){
    event.preventDefault();
    let taskText = document.querySelector("#new-task-description").value
    let newToDo = document.createElement("li")
    newToDo.innerHTML = taskText
    let toDoList = document.querySelector("#tasks")
    toDoList.append(newToDo)
    let deleteButton = document.createElement("button")
    deleteButton.innerText = "Delete"
    newToDo.append(deleteButton)
    
    deleteButton.addEventListener("click", function(event){
      newToDo.remove()
    })
  })
});
