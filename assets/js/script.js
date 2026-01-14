window.addEventListener('load', main)


function main(){
    listarTarefas()
    
    const butao = document.getElementById('butaoCriar')
    butao.addEventListener('click', () => criarTarefa())
}


async function listarTarefas() {
    const divcorpo = document.getElementById('tarefas')
    divcorpo.innerHTML = ''

    try{
        const response = await fetch('http://localhost:3000/listarTarefas')
        if (!response.ok) throw new Error('Erro na requisição')
        
        const tarefas = await response.json()
        listaTarefas = tarefas

        listaTarefas.forEach(tarefa_ => {
        const divTarefa = document.createElement('div')
        divTarefa.classList.add('tarefa')
        divTarefa.innerHTML = `
            <div class="headTarefa">
                <h2>${tarefa_.tituloTarefa}</h2>
                <input type="checkbox">
                <div class="divDelete">
                    <button class="btnDelete">
                        <span class="material-symbols-outlined">delete_forever</span>
                    </button>
                </div>
            </div>
            <p>${tarefa_.descricaoTarefa}</p>
        `
        
        const checkboxTarefa = divTarefa.querySelector('input[type="checkbox"]')
        const divDelete = divTarefa.querySelector('.divDelete')
        
        checkboxTarefa.addEventListener('change', () => {
            if (checkboxTarefa.checked) {
                divTarefa.classList.add('concluida')
                divDelete.classList.remove('divDelete')
            } else {
                divTarefa.classList.remove('concluida')
                divDelete.classList.add('divDelete')
            }
        })
        
        const butaoDelete = divTarefa.querySelector('.btnDelete')
        butaoDelete.addEventListener('click', () => deletarTarefa(tarefa_.id))
        
        divcorpo.appendChild(divTarefa)
    })
        
    } catch(error){
        console.error(error)
    }

}

async function criarTarefa() {
    const nomeTarefa = document.getElementById('tarefaNome')
    const descricaoTarefa = document.getElementById('tarefaDes')
    
    if (nomeTarefa.value.trim() && descricaoTarefa.value.trim()) {

        try{
            const response = await fetch('http://localhost:3000/criarTarefa',{
                method: 'POST',
                headers:{
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    nomeTarefa: nomeTarefa.value,
                    descricaoTarefa: descricaoTarefa.value
            })
        })

        if(!response.ok){
            throw new Error('erro ao criar tarefa')
        }

            await response.json()

            listarTarefas() // Re-renderiza a lista

            nomeTarefa.value = ''
            descricaoTarefa.value = ''
            
            const modalEl = document.getElementById('menuCentral')
            const modal = bootstrap.Modal.getInstance(modalEl)
            modal.hide()
            }catch(error){
                console.error(error)
            }
            
    }
}

async function deletarTarefa(id) {
    try{
        const response = await fetch('http://localhost:3000/deletarTarefa',{
            method:'DELETE',
            headers:{
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    id: id
            })
        })
        if(!response.ok){
            throw new Error('Erro ao deletar tarefa')
        }

        listarTarefas()

    }catch(error){
        console.error(error)
    }
}
