
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    let text = document.getElementById('new-task-description').value;
    
    let list = document.createElement('li');
    list.textContent = text
    document.getElementById('tasks').appendChild(list);
  })
});
