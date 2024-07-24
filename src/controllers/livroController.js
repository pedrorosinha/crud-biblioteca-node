import Livro from '../models/Livro.js';

class LivroController {

    static async listarLivros(req, res) {
        try {
            const listaLivros = await Livro.find({});
            res.status(200).json(listaLivros);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    }

    static async listarLivroPorId(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await Livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do livro` });
        }
    }

    static async cadastrarLivro(req, res) {
        try {
            const novoLivro = await Livro.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", livro: novoLivro });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` });
        }
    }

    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
            const livroAtualizado = await Livro.findByIdAndUpdate(id, req.body, { new: true });

            if (!livroAtualizado) {
                return res.status(404).json({ message: 'Livro não encontrado' });
            }

            res.status(200).json(livroAtualizado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização` });
        }
    }

    static async excluirLivro(req, res) {
        try {
            const id = req.params.id;
            const resultado = await Livro.findByIdAndDelete(id);

            if (!resultado) {
                return res.status(404).json({ message: 'Livro não encontrado' });
            }

            res.status(200).json({ message: 'Livro excluído com sucesso' });
        } catch (erro) {
            res.status(500).json({ message: erro.message });
        }
    }
}

export default LivroController;
