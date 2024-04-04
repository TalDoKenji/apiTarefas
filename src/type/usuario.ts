import { Document } from "mongoose";

export interface IUsuario extends Document {

    nome: String,
    peso: Number
    email: string
    senha: string
}