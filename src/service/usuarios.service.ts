import bcrypt from 'bcrypt';
import usuarioSchema from "../schema/usuarios.schema";
import { IUsuario } from "../type/usuario";
import { IUsuarioLogin } from '../type/usuarioLogin';

export class usuarioService {

    async cadastroUsuario(usuario: IUsuario) {

        let _usuario = await usuarioSchema.findOne({ email: { $eq: usuario.email } })
        if (!_usuario) {
            const novoUsuario = await usuarioSchema.create({
                nome: usuario.nome,
                peso: usuario.peso,
                email: usuario.email,
                senha: await bcrypt.hash(usuario.senha, 10)
            })
            return novoUsuario
        }
        return "já existe"
    }

    async login (usuario: IUsuarioLogin) {
        const _usuario = await usuarioSchema.findOne({email: {$eq: usuario.email}})
        if(_usuario) {
            const usuarioValidado = await bcrypt.compare(usuario.senha, _usuario.senha)
                if(usuarioValidado)
                    return "ta logado, pai"
                return "dados incorretos"
        }
        return "não existe"
    }
}