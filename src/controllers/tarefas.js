import {openDb} from "../configDB.js"

export async function criarTabela(){
    openDb().then(db =>{
        db.exec(`CREATE TABLE IF NOT EXISTS Tarefas (id INTEGER PRIMARY KEY, tituloTarefa TEXT, descricaoTarefa TEXT)`)
    })
}

export async function criarTarefa(req,res){
    let tarefa = req.body
    openDb().then(db =>{
        db.run('INSERT INTO Tarefas (tituloTarefa, descricaoTarefa) VALUES (?,?)', [tarefa.nomeTarefa, tarefa.descricaoTarefa])
    })
    res.status(200).send('Tarefa Criada')
}

export async function listarTarefas(req,res){
    openDb().then(db =>{
        db.all('SELECT * FROM Tarefas')
        .then(tarefa => res.json(tarefa))
    })
}

export async function deletarTarefa(req,res){
    let id = req.body.id
    openDb().then(db =>{
        db.run('DELETE FROM Tarefas WHERE id = ?', id)
    })
    res.status(200).send('Tarefa deletada')
}

