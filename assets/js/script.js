window.addEventListener('load', main)

listaTarefas = [
    {
        nomeTarefa: 'Prova MOBILE',
        descricao: 'Prova de desenvolvimento para aparelhos moveis feita pelo professor leonardo. 4° periodo'
    },
    {
        nomeTarefa: 'Apresentação Arianne',
        descricao: 'Apresentação de arquitetura orientada a repositorio dia 10/12 '
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
        const divHeadTarefa = document.createElement('div')
        const checkboxTarefa = document.createElement('input')
        checkboxTarefa.type = 'checkbox'
        const tituloTarefa = document.createElement('h2')
        const descricaoTarefa = document.createElement('p')

        divTarefa.classList.add('tarefa')
        divHeadTarefa.classList.add('headTarefa')
        tituloTarefa.textContent = tarefa_.nomeTarefa
        descricaoTarefa.textContent = tarefa_.descricao

        divHeadTarefa.appendChild(tituloTarefa)
        divHeadTarefa.appendChild(checkboxTarefa)
        divTarefa.appendChild(divHeadTarefa)
        divTarefa.appendChild(descricaoTarefa)

        divcorpo.appendChild(divTarefa)

        checkboxTarefa.addEventListener('change', () =>{
        if ( checkboxTarefa.checked){
            divTarefa.classList.add('concluida')
        } else {
            divTarefa.classList.remove('concluida')
        }
})



    });
}

function criarTarefa(){
    nomeTarefa = document.getElementById('tarefaNome')
    descricaoTarefa = document.getElementById('tarefaDes')

    console.log(nomeTarefa,descricaoTarefa)
    nomeTarefa.value = ''
    descricaoTarefa.value = ''


    const modalEl = document.getElementById('menuCentral');
    const modal = bootstrap.Modal.getInstance(modalEl);
    modal.hide();
}