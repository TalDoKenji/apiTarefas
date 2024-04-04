import { Document } from "mongoose"

export interface ITarefas extends Document {

    titulo: string,
    descricao: string,
    dataInicio: Date,
    dataFim: Date,
    tipo: string,
    categoria: string,
    status: string,
    usuarioAssociado: string

}