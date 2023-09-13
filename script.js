const form = document.getElementById('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const task = document.getElementById('task')
    console.log(task.value)

    const newTask = document.createElement('div')
    newTask.classList.add('task')
    newTask.innerHTML = `<p>Task: ${task.value}</p>
    <button id="deletebutton" onclick="deleteTask(event)">Delete</button>`

    const taskSection = document.getElementById('freshtaskcontainer')
    taskSection.appendChild(newTask)

    task.value = ''

    deleteTask = function (e) {
        const eliminatetask = e.target
        eliminatetask.parentElement.remove()
    }
})