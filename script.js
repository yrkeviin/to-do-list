function novaTask(div) {
    if (isNaN(task)) {
        alert("Digite um número válido!");
        return;
    }

    var task = document.getElementById("task").value;
    var div = document.getElementById("div");   
    var p = document.createElement("p");
    p.innerHTML = task;
    div.appendChild(p);
}