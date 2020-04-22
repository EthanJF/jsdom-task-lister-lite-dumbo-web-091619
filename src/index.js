document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const submit = document.querySelectorAll("input")[1]

  submit.addEventListener("click", function(event){
    event.preventDefault();
    const taskText = document.querySelector("#new-task-description")
    const newToDo = document.createElement("li")
    newToDo.textContent = taskText.value
    const toDoList = document.querySelector("#tasks")
    toDoList.append(newToDo)

    taskText.value = ""

    const deleteButton = document.createElement("button")
    deleteButton.innerText = "Delete"
    newToDo.append(deleteButton)
    
    deleteButton.addEventListener("click", function(){
      newToDo.remove()
    })
  })
});
