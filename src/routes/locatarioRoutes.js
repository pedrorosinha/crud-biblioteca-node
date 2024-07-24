import express from "express";
import LocatarioController from "../controllers/locatarioController.js";

const locatarioRoutes = express.Router();

locatarioRoutes.get('/', LocatarioController.listarLocatarios);
locatarioRoutes.get('/:id', LocatarioController.listarLocatarioPorId);
locatarioRoutes.post('/', LocatarioController.cadastrarLocatario);
locatarioRoutes.put('/:id', LocatarioController.atualizarLocatario);
locatarioRoutes.delete('/:id', LocatarioController.excluirLocatario);

export default locatarioRoutes;