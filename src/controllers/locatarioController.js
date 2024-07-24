import Locatario from '../models/Locatario.js';

class LocatarioController {

    static async listarLocatarios(req, res) {
        try {
            const listaLocatarios = await Locatario.find({});
            res.status(200).json(listaLocatarios);
        } catch (erro) {
            console.error(erro);  // Log do erro para depuração
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    }

    static async listarLocatarioPorId(req, res) {
        try {
            const id = req.params.id;
            const locatarioEncontrado = await Locatario.findById(id);
            if (!locatarioEncontrado) {
                return res.status(404).json({ message: 'Locatário não encontrado' });
            }
            res.status(200).json(locatarioEncontrado);
        } catch (erro) {
            console.error(erro);  // Log do erro para depuração
            res.status(500).json({ message: `${erro.message} - falha na requisição do locatario` });
        }
    }

    static async cadastrarLocatario(req, res) {
        try {
            const novoLocatario = await Locatario.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", locatario: novoLocatario });
        } catch (erro) {
            console.error(erro);  // Log do erro para depuração
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar locatario` });
        }
    }

    static async atualizarLocatario(req, res) {
        try {
            const id = req.params.id;
            const locatarioAtualizado = await Locatario.findByIdAndUpdate(id, req.body, { new: true });
            if (!locatarioAtualizado) {
                return res.status(404).json({ message: 'Locatário não encontrado' });
            }
            res.status(200).json({ message: "Locatario atualizado com sucesso!", locatario: locatarioAtualizado });
        } catch (erro) {
            console.error(erro);  // Log do erro para depuração
            res.status(500).json({ message: `${erro.message} - falha na atualização` });
        }
    }

    static async excluirLocatario(req, res) {
        try {
            const id = req.params.id;
            const locatarioRemovido = await Locatario.findByIdAndDelete(id);
            if (!locatarioRemovido) {
                return res.status(404).json({ message: 'Locatário não encontrado' });
            }
            res.status(200).json({ message: 'Locatario removido com sucesso' });
        } catch (erro) {
            console.error(erro);  // Log do erro para depuração
            res.status(500).json({ message: `${erro.message} - falha para apagar` });
        }
    }
}

export default LocatarioController;
