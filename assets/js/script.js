window.addEventListener('load', main)

listaTarefas = [
    {
        nomeTarefa: 'Prova MOBILE',
        descricao: 'Prova de desenvolvimento para aparelhos moveis feita pelo professor leonardo. 4° periodo'
    }
]
function main(){
    listarTarefas()
    
    butao = document.getElementById('butaoCriar')
    butao.addEventListener('click',() => criarTarefa())
}

function listarTarefas() {
    divcorpo = document.getElementById('tarefas')
    listaTarefas.forEach(tarefa_ => {
        
        const divTarefa = document.createElement('div')
        const tituloTarefa = document.createElement('h2')
        const descricaoTarefa = document.createElement('p')

        divTarefa.classList.add('tarefa')
        tituloTarefa.textContent = tarefa_.nomeTarefa
        descricaoTarefa.textContent = tarefa_.descricao

        divTarefa.appendChild(tituloTarefa)
        divTarefa.appendChild(descricaoTarefa)

        divcorpo.appendChild(divTarefa)
    });
}

function criarTarefa(){
    nomeTarefa = document.getElementById('tarefaNome')
    descricaoTarefa = document.getElementById('tarefaDes')

    console.log(nomeTarefa,descricaoTarefa)
    nomeTarefa.value = ''
    descricaoTarefa.value = ''
}