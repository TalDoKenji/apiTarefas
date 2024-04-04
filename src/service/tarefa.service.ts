import { ObjectId } from "mongoose";
import tarefaSchema from "../schema/tarefas.schema";
import { ITarefas } from "../type/tarefa";
import tarefasSchema from "../schema/tarefas.schema";

export class tarefaService {

    async criaTarefa(tarefa: ITarefas) {
        const novaTarefa = await tarefaSchema.create(tarefa)
        return novaTarefa
    }

    async buscaUmaTarefa(id: String) {
        const tarefa = await tarefaSchema.findById({ _id: id });
        tarefa?._id
        return tarefa
    }

    async buscaTarefaPorUsuario(idUsuario: string) {
        const tarefa = await tarefaSchema.find({ usuarioAssociado: { $eq: idUsuario } })
        return tarefa
    }

    async atualizaTarefa(id: String, tarefaAtualizada: ITarefas) {
        const tarefa = await tarefaSchema.findByIdAndUpdate(id, tarefaAtualizada, { new: true })
        return tarefa
    }

    async deletaTarefa(id: String) {
        await tarefaSchema.findByIdAndDelete(id);
    }

    async filtraTarefasPorCategoria(id: any) {
        const tarefa = await tarefaSchema.find()
        const tarefaFiltrada = tarefa.filter(tarefaFiltrada => tarefaFiltrada.categoria == id)
        return tarefaFiltrada
    }

    async filtraTarefasConcluidasOuPendentes() {
        const tarefas = await tarefasSchema.find()
        const tarefasConcluidas = tarefas.filter(tarefaFiltrada => tarefaFiltrada.status === "Concluída")

        console.log(tarefas)
        console.log(tarefasConcluidas)
        const tarefasPendentes = tarefas.filter(tarefaFiltrada => tarefaFiltrada.status === "Pendente")
        if (tarefasConcluidas.length === 0) {
            return tarefasPendentes
        }
        return tarefasConcluidas
    }

    async filtraTarefasPorPeriodo(dataInicial: Date, dataFinal: Date) {
        const tarefas = await tarefaSchema.find()
        const tarefasFiltradas = tarefas
            .filter(tarefaFiltrada => tarefaFiltrada.dataInicio >= dataInicial && tarefaFiltrada.dataFim <= dataFinal)
        return tarefasFiltradas
    }



}