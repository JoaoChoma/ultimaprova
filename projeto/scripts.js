var tarefas = [];

var tarefa = document.getElementById("tarefa").value;
var minhaLista = document.getElementById("minhalista");

function registrar(){   
    tarefas.push(tarefa);
    imprimir();
}

function imprimir(){
    minhaLista.innerHTML = "";
    for(var i = 0; i < tarefas.length; i++){
        var li = document.createElement('li');
        li.textContent = tarefas[i];
        minhaLista.appendChild(li);
    }
}

imprimir();
