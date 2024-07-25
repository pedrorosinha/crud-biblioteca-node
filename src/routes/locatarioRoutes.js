import express from "express";
import LocatarioController from "../controllers/locatarioController.js";

const locatarioRoutes = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Locatario:
 *       type: object
 *       required:
 *         - nome
 *         - cpf
 *         - telefone
 *         - email
 *         - dataNascimento
 *       properties:
 *         id:
 *           type: string
 *           description: ID do locatário
 *         nome:
 *           type: string
 *           description: Nome do locatário
 *         cpf:
 *           type: string
 *           description: CPF do locatário
 *         telefone:
 *           type: string
 *           description: Telefone do locatário
 *         email:
 *           type: string
 *           description: Email do locatário
 *         dataNascimento:
 *           type: string
 *           format: date
 *           description: Data de nascimento do locatário
 *       example:
 *         nome: "João da Silva"
 *         cpf: "123.456.789-00"
 *         telefone: "(11) 98765-4321"
 *         email: "joao.silva@example.com"
 *         dataNascimento: "1990-01-01"
 */

/**
 * @swagger
 * tags:
 *   name: Locatarios
 *   description: Gerenciamento de locatarios
 */

/**
 * @swagger
 * /locatarios:
 *   get:
 *     summary: Lista todos os locatarios
 *     tags: [Locatarios]
 *     responses:
 *       200:
 *         description: Lista de locatarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Locatario'
 */
locatarioRoutes.get('/', LocatarioController.listarLocatarios);

/**
 * @swagger
 * /locatarios/{id}:
 *   get:
 *     summary: Obtém um locatario pelo ID
 *     tags: [Locatarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do locatario
 *     responses:
 *       200:
 *         description: Locatario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Locatario'
 *       404:
 *         description: Locatario não encontrado
 */
locatarioRoutes.get('/:id', LocatarioController.listarLocatarioPorId);

/**
 * @swagger
 * /locatarios:
 *   post:
 *     summary: Cria um novo locatario
 *     tags: [Locatarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Locatario'
 *     responses:
 *       201:
 *         description: Locatario criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Locatario'
 */
locatarioRoutes.post('/', LocatarioController.cadastrarLocatario);

/**
 * @swagger
 * /locatarios/{id}:
 *   put:
 *     summary: Atualiza um locatario
 *     tags: [Locatarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do locatario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Locatario'
 *     responses:
 *       200:
 *         description: Locatario atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Locatario'
 */
locatarioRoutes.put('/:id', LocatarioController.atualizarLocatario);

/**
 * @swagger
 * /locatarios/{id}:
 *   delete:
 *     summary: Exclui um locatario
 *     tags: [Locatarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do locatario
 *     responses:
 *       200:
 *         description: Locatario excluído com sucesso
 *       404:
 *         description: Locatario não encontrado
 */
locatarioRoutes.delete('/:id', LocatarioController.excluirLocatario);

export default locatarioRoutes;
