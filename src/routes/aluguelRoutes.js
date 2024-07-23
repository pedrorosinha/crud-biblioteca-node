import express from "express";
import AluguelController from "../controllers/aluguelController.js";

const routes = express.Router();

routes.get('/', AluguelController.listarAlugueis);
routes.get('/:id', AluguelController.listarAluguelPorId);
routes.post('/', AluguelController.cadastrarAluguel);
routes.put('/:id', AluguelController.atualizarAluguel);
routes.delete('/:id', AluguelController.excluirAluguel);

export default routes;