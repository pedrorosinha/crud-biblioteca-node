import express from "express";
import AluguelController from "../controllers/aluguelController.js";

const routes = express.Router();

routes.get('/', AluguelController.listarAlugueis);
routes.get('/alugueis/:id', AluguelController.listarAluguelPorId);
routes.post('/alugueis', AluguelController.cadastrarAluguel);
routes.put('/alugueis/:id', AluguelController.atualizarAluguel);
routes.delete('/alugueis/:id', AluguelController.excluirAluguel);

export default routes;