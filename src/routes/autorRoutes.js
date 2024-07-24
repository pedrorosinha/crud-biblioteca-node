import express from "express";
import AutorController from "../controllers/autorController.js";

const autorRoutes = express.Router();

autorRoutes.get('/', AutorController.listarAutores);
autorRoutes.get('/:id', AutorController.listarAutorPorId);
autorRoutes.post('/', AutorController.cadastrarAutor);
autorRoutes.put('/:id', AutorController.atualizarAutor);
autorRoutes.delete('/:id', AutorController.excluirAutor);

export default autorRoutes;