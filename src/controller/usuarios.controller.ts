import { usuarioService } from "../service/usuarios.service";
import { Request, Response } from "express";

class usuarioController {

    async cadastroUsuario(req: Request, res: Response) {
        const novoUsuario = await new usuarioService().cadastroUsuario(req.body)
        return res.status(201).json(novoUsuario)
    }

    async login(req:Request,res:Response) {
        const usuario = await new usuarioService().login(req.body)
        return res.status(200).json(usuario)
    }
}

export default new usuarioController()