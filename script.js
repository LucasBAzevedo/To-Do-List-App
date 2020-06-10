var date = new Date()
var day = date.getDate()
var month = date.getMonth()
var year = date.getFullYear()

document.getElementById('date').innerHTML = `${day}/${month+1}/${year}`

document.getElementById('button').addEventListener("click", function(){
    var text = document.getElementById('text').value
    var list = document.getElementById('list')
    list.innerHTML += `
        <p>
            <input type="checkbox" id="txt">
            <label for="txt">${text}</label>
        </p>`
})
