import express from "express";
import AluguelController from "../controllers/aluguelController.js";

const aluguelRoutes = express.Router();

aluguelRoutes.get('/', AluguelController.listarAlugueis);
aluguelRoutes.get('/:id', AluguelController.listarAluguelPorId);
aluguelRoutes.post('/', AluguelController.cadastrarAluguel);
aluguelRoutes.put('/:id', AluguelController.atualizarAluguel);
aluguelRoutes.delete('/:id', AluguelController.excluirAluguel);

export default aluguelRoutes;