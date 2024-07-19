import express from "express";
import LocatarioController from "../controllers/locatarioController.js";

const routes = express.Router();

routes.get('/locatarios', LocatarioController.listarLocatarios);
routes.get('/locatarios/:id', LocatarioController.listarLocatarioPorId);
routes.post('/locatarios', LocatarioController.cadastrarLocatario);
routes.put('/locatarios/:id', LocatarioController.atualizarLocatario);
routes.delete('/locatarios/:id', LocatarioController.excluirLocatario);

export default routes;