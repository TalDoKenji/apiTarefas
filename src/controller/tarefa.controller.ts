import { ObjectId } from 'mongoose';
import { Request, Response } from "express";
import { tarefaService } from "../service/tarefa.service";

class tarefaController {

    async criaTarefa(req: Request, res: Response) {
        const novaTarefa = await new tarefaService().criaTarefa(req.body)
        return res.status(201).json(novaTarefa)
    }

    async buscaTarefa(req: Request, res: Response) {
        const tarefa = await new tarefaService().buscaUmaTarefa(req.params.id)
        return res.status(200).json(tarefa)
    }

    async buscaTarefaPorUsuario(req: Request, res: Response) {
        const tarefa = await new tarefaService().buscaTarefaPorUsuario(req.params.id)
        return res.status(200).json(tarefa)
    }

    async atulizaTarefa(req: Request, res: Response) {
        const tarefaAtualizada = await new tarefaService().atualizaTarefa(req.params.id, req.body)
        return res.status(200).json(tarefaAtualizada)
    }

    async deletaTarefa(req: Request, res: Response) {
        await new tarefaService().deletaTarefa(req.params.id)
        return res.status(204).json()
    }

    async filtraTarefasPorCategoria(req: Request, res: Response) {
        const tarefasFiltradas = await new tarefaService().filtraTarefasPorCategoria(req.params.id)
        return res.status(200).json(tarefasFiltradas)
    }

    async filtraTarefasConcluidasOuPendentes(req: Request, res: Response) {
        const tarefasFiltradas = await new tarefaService().filtraTarefasConcluidasOuPendentes()
        return res.status(200).json(tarefasFiltradas)
    }

    async filtraTarefasPorPeriodo(req: Request, res: Response) {
        const tarefasFiltradas = await new tarefaService().filtraTarefasPorPeriodo(req.body, req.body)
        return res.status(200).json(tarefasFiltradas)
    }
}

export default new tarefaController()