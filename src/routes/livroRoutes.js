import express from "express";
import LivroController from "../controllers/livroController.js"

const livroRoutes = express.Router();

livroRoutes.get('/', LivroController.listarLivros);
livroRoutes.get('/:id', LivroController.listarLivroPorId);
livroRoutes.post('/', LivroController.cadastrarLivro);
livroRoutes.put('/:id', LivroController.atualizarLivro);
livroRoutes.delete('/:id', LivroController.excluirLivro);

export default livroRoutes;