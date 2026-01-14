import {Router} from 'express'
import { criarTarefa,listarTarefas,deletarTarefa} from './controllers/tarefas.js'


const router = Router()

router.get('/', (req,res) => {
    res.status(200).send('Funcionando')
})

router.post('/criarTarefa', criarTarefa)
router.get('/listarTarefas', listarTarefas)
router.delete('/deletarTarefa', deletarTarefa)

export default router