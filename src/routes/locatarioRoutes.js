import express from "express";
import LocatarioController from "../controllers/locatarioController.js";

const routes = express.Router();

routes.get('/', LocatarioController.listarLocatarios);
routes.get('/:id', LocatarioController.listarLocatarioPorId);
routes.post('/', LocatarioController.cadastrarLocatario);
routes.put('/:id', LocatarioController.atualizarLocatario);
routes.delete('/:id', LocatarioController.excluirLocatario);

export default routes;