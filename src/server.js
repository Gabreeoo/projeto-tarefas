import express from 'express'
import {criarTabela} from './controllers/tarefas.js'
import router from './routes.js'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())


criarTabela()
app.use(router)

app.listen(3000, () =>{
    console.log('Rodando...')
})