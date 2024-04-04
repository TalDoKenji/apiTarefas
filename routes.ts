import { Router } from 'express'
import tarefaController from './src/controller/tarefa.controller'
import categoriaController from './src/controller/categoria.controller'
import usuariosController from './src/controller/usuarios.controller'

const routes = Router()
routes.post('/tarefas/', tarefaController.criaTarefa)
routes.get('/tarefas/:id', tarefaController.buscaTarefa)
routes.get('/tarefas/buscaTarefasPorUsuario/:id', tarefaController.buscaTarefaPorUsuario)
routes.put('/tarefas/:id', tarefaController.atulizaTarefa)
routes.delete('/tarefas/:id', tarefaController.deletaTarefa)

routes.get('/tarefas/filtraTarefasPorCategoria/:id', tarefaController.filtraTarefasPorCategoria)
routes.get('/tarefas/filtraTarefasConcluidasOuPendentes/', tarefaController.filtraTarefasConcluidasOuPendentes)
routes.get('/tarefas/filtraTarefasPorPeriodo/', tarefaController.filtraTarefasPorPeriodo)

routes.post('/categorias/', categoriaController.criaCategoria)
routes.get('/categorias/:id', categoriaController.buscaCategoria)
routes.get('/categorias/buscaCategoriasPorUsuarios/:id', categoriaController.buscaCategoriaPorUsuario)
routes.put('/categorias/:id', categoriaController.atualizaCategoria)
routes.delete('/categorias/:id', categoriaController.deletaCategoria)

routes.post('/usuarios/', usuariosController.cadastroUsuario)
routes.get('/usuarios/login/', usuariosController.login)

export {
    routes
}