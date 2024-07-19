import { aluguel } from '../models/Aluguel.js';

class AluguelController {

    static async listarAlugueis(req, res) {
        try {
            const listaAlugueis = await aluguel.find({}).populate('livros').populate('locatario');
            res.status(200).json(listaAlugueis);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    }

    static async listarAluguelPorId(req, res) {
        try {
            const id = req.params.id;
            const aluguelEncontrado = await aluguel.findById(id).populate('livros').populate('locatario');
            res.status(200).json(aluguelEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do aluguel` });
        }
    }

    static async cadastrarAluguel(req, res) {
        try {
            const novoAluguel = await aluguel.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", aluguel: novoAluguel });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar aluguel` });
        }
    }

    static async atualizarAluguel(req, res) {
        try {
            const id = req.params.id;
            await aluguel.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Aluguel atualizado com sucesso!" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização` });
        }
    }

    static async excluirAluguel(req, res) {
        try {
            const id = req.params.id;
            await aluguel.findByIdAndDelete(id);
            res.status(200).json({ message: 'Aluguel removido com sucesso' });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha para apagar` });
        }
    }
}

export default AluguelController;
