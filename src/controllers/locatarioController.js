import locatario from '../models/Locatario.js';

class LocatarioController {

    static async listarLocatarios(req, res) {
        try {
            const listaLocatarios = await locatario.find({});
            res.status(200).json(listaLocatarios);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    }

    static async listarLocatarioPorId(req, res) {
        try {
            const id = req.params.id;
            const locatarioEncontrado = await locatario.findById(id);
            res.status(200).json(locatarioEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do locatario` });
        }
    }

    static async cadastrarLocatario(req, res) {
        try {
            const novoLocatario = await locatario.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", locatario: novoLocatario });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar locatario` });
        }
    }

    static async atualizarLocatario(req, res) {
        try {
            const id = req.params.id;
            await locatario.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Locatario atualizado com sucesso!" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização` });
        }
    }

    static async excluirLocatario(req, res) {
        try {
            const id = req.params.id;
            await locatario.findByIdAndDelete(id);
            res.status(200).json({ message: 'Locatario removido com sucesso' });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha para apagar` });
        }
    }
}

export default LocatarioController;