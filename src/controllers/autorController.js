import autor from '../models/Autor.js';

class AutorController {

    static async listarAutores(req, res) {
        try {
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    }

    static async listarAutorPorId(req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do autor` });
        }
    }

    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", autor: novoAutor });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar autor` });
        }
    }

    static async atualizarAutor(req, res) {
        try {
            const id = req.params.id;
            const updateAutor = await autor.findByIdAndUpdate(id, req.body, { new: true });

            if (!updateAutor) {
                return res.status(404).json({ message: 'Autor não encontrado' });
            }

            res.status(200).json(updateAutor);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização` });
        }
    }

    static async excluirAutor(req, res) {
        try {
            const id = req.params.id;
            const resultado = await autor.findByIdAndDelete(id);

            if (!resultado) {
                return res.status(404).json({ message: 'Autor não encontrado' });
            }

            res.status(200).json({ message: 'Autor excluído com sucesso' });
        } catch (erro) {
            res.status(500).json({ message: erro.message });
        }
    }
}

export default AutorController;
