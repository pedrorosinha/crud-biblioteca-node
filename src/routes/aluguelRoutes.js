import express from "express";
import AluguelController from "../controllers/aluguelController.js";

const aluguelRoutes = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Aluguel:
 *       type: object
 *       required:
 *         - dataRetirada
 *         - dataDevolucao
 *         - locatario
 *         - livros
 *       properties:
 *         id:
 *           type: string
 *           description: ID do aluguel
 *         dataRetirada:
 *           type: string
 *           format: date
 *           description: Data de retirada do aluguel
 *         dataDevolucao:
 *           type: string
 *           format: date
 *           description: Data de devolução do aluguel
 *         locatario:
 *           type: string
 *           description: ID do locatário
 *         livros:
 *           type: array
 *           items:
 *             type: string
 *           description: IDs dos livros alugados
 *       example:
 *         dataRetirada: 2024-07-25
 *         dataDevolucao: 2024-07-27
 *         locatario: 60c72b2f5f1b2c0017b9b0c5
 *         livros: [60c72b2f5f1b2c0017b9b0c6, 60c72b2f5f1b2c0017b9b0c7]
 */

/**
 * @swagger
 * tags:
 *   name: Alugueis
 *   description: Gerenciamento de aluguéis
 */

/**
 * @swagger
 * /alugueis:
 *   get:
 *     summary: Lista todos os aluguéis
 *     tags: [Alugueis]
 *     responses:
 *       200:
 *         description: Lista de aluguéis
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Aluguel'
 */
aluguelRoutes.get('/', AluguelController.listarAlugueis);

/**
 * @swagger
 * /alugueis/{id}:
 *   get:
 *     summary: Obtém um aluguel pelo ID
 *     tags: [Alugueis]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do aluguel
 *     responses:
 *       200:
 *         description: Aluguel encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Aluguel'
 *       404:
 *         description: Aluguel não encontrado
 */
aluguelRoutes.get('/:id', AluguelController.listarAluguelPorId);

/**
 * @swagger
 * /alugueis:
 *   post:
 *     summary: Cria um novo aluguel
 *     tags: [Alugueis]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Aluguel'
 *     responses:
 *       201:
 *         description: Aluguel criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Aluguel'
 */
aluguelRoutes.post('/', AluguelController.cadastrarAluguel);

/**
 * @swagger
 * /alugueis/{id}:
 *   put:
 *     summary: Atualiza um aluguel
 *     tags: [Alugueis]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do aluguel
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Aluguel'
 *     responses:
 *       200:
 *         description: Aluguel atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Aluguel'
 */
aluguelRoutes.put('/:id', AluguelController.atualizarAluguel);

/**
 * @swagger
 * /alugueis/{id}:
 *   delete:
 *     summary: Exclui um aluguel
 *     tags: [Alugueis]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do aluguel
 *     responses:
 *       200:
 *         description: Aluguel excluído com sucesso
 *       404:
 *         description: Aluguel não encontrado
 */
aluguelRoutes.delete('/:id', AluguelController.excluirAluguel);

export default aluguelRoutes;