import express from "express";
import AutorController from "../controllers/autorController.js";

const autorRoutes = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Autor:
 *       type: object
 *       required:
 *         - nome
 *         - anoNascimento
 *         - cpf
 *       properties:
 *         id:
 *           type: string
 *           description: ID do autor
 *         nome:
 *           type: string
 *           description: Nome do autor
 *         sexo:
 *           type: string
 *           description: Sexo do autor
 *         anoNascimento:
 *           type: number
 *           description: Ano de nascimento do autor
 *         cpf:
 *           type: string
 *           description: CPF do autor
 *       example:
 *         nome: "J.K. Rowling"
 *         sexo: "F"
 *         anoNascimento: 1965
 *         cpf: "12345678901"
 */

/**
 * @swagger
 * tags:
 *   name: Autores
 *   description: Gerenciamento de autores
 */

/**
 * @swagger
 * /autores:
 *   get:
 *     summary: Lista todos os autores
 *     tags: [Autores]
 *     responses:
 *       200:
 *         description: Lista de autores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Autor'
 */
autorRoutes.get('/', AutorController.listarAutores);

/**
 * @swagger
 * /autores/{id}:
 *   get:
 *     summary: Obtém um autor pelo ID
 *     tags: [Autores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do autor
 *     responses:
 *       200:
 *         description: Autor encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Autor'
 *       404:
 *         description: Autor não encontrado
 */
autorRoutes.get('/:id', AutorController.listarAutorPorId);

/**
 * @swagger
 * /autores:
 *   post:
 *     summary: Cria um novo autor
 *     tags: [Autores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Autor'
 *     responses:
 *       201:
 *         description: Autor criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Autor'
 */
autorRoutes.post('/', AutorController.cadastrarAutor);

/**
 * @swagger
 * /autores/{id}:
 *   put:
 *     summary: Atualiza um autor
 *     tags: [Autores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do autor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Autor'
 *     responses:
 *       200:
 *         description: Autor atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Autor'
 */
autorRoutes.put('/:id', AutorController.atualizarAutor);

/**
 * @swagger
 * /autores/{id}:
 *   delete:
 *     summary: Exclui um autor
 *     tags: [Autores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do autor
 *     responses:
 *       200:
 *         description: Autor excluído com sucesso
 *       404:
 *         description: Autor não encontrado
 */
autorRoutes.delete('/:id', AutorController.excluirAutor);

export default autorRoutes;
