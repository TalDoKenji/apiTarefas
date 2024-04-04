import { Request, Response } from "express";
import { categoriaService } from "../service/categoria.service";
import tarefaController from "./tarefa.controller";

class categoriaController {

    async criaCategoria(req: Request, res: Response) {
        const novaCategoria = await new categoriaService().criaCategoria(req.body)
        return res.status(201).json(novaCategoria)
    }

    async buscaCategoria(req: Request, res: Response) {
        const categoria = await new categoriaService().buscaCategoria(req.params.id)
        return res.status(200).json(categoria)
    }

    async buscaCategoriaPorUsuario(req: Request, res: Response) {
        const categoria = await new categoriaService().buscaCategoriasPorUsuario(req.params.id)
        return res.status(200).json(categoria)  
    }

    async atualizaCategoria(req:Request, res: Response) {
        const categoriaAtualizada = await new categoriaService().atualizaCategoria(req.params.id, req.body)
        return res.status(200).json(categoriaAtualizada) 
    }

    async deletaCategoria(req:Request,res:Response) {
        await new categoriaService().deletaCategoria(req.params.id)
        return res.status(204).json()
    }

}

export default new categoriaController()