import express from "express";
import LivroController from "../controllers/livroController.js"

const livroRoutes = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Livro:
 *       type: object
 *       required:
 *         - nome
 *         - isbn
 *         - dataPublicacao
 *       properties:
 *         id:
 *           type: string
 *           description: ID do livro
 *         nome:
 *           type: string
 *           description: Nome do livro
 *         isbn:
 *           type: string
 *           description: ISBN do livro
 *         dataPublicacao:
 *           type: string
 *           format: date
 *           description: Data de publicação do livro
 *       example:
 *         nome: "Harry Potter e a Pedra Filosofal"
 *         isbn: "978-3-16-148410-0"
 *         dataPublicacao: "1997-06-26"
 */

/**
 * @swagger
 * tags:
 *   name: Livros
 *   description: Gerenciamento de livros
 */

/**
 * @swagger
 * /livros:
 *   get:
 *     summary: Lista todos os livros
 *     tags: [Livros]
 *     responses:
 *       200:
 *         description: Lista de livros
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Livro'
 */
livroRoutes.get('/', LivroController.listarLivros);

/**
 * @swagger
 * /livros/{id}:
 *   get:
 *     summary: Obtém um livro pelo ID
 *     tags: [Livros]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do livro
 *     responses:
 *       200:
 *         description: Livro encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Livro'
 *       404:
 *         description: Livro não encontrado
 */
livroRoutes.get('/:id', LivroController.listarLivroPorId);

/**
 * @swagger
 * /livros:
 *   post:
 *     summary: Cria um novo livro
 *     tags: [Livros]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Livro'
 *     responses:
 *       201:
 *         description: Livro criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Livro'
 */
livroRoutes.post('/', LivroController.cadastrarLivro);

/**
 * @swagger
 * /livros/{id}:
 *   put:
 *     summary: Atualiza um livro
 *     tags: [Livros]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do livro
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Livro'
 *     responses:
 *       200:
 *         description: Livro atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Livro'
 */
livroRoutes.put('/:id', LivroController.atualizarLivro);

/**
 * @swagger
 * /livros/{id}:
 *   delete:
 *     summary: Exclui um livro
 *     tags: [Livros]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do livro
 *     responses:
 *       200:
 *         description: Livro excluído com sucesso
 *       404:
 *         description: Livro não encontrado
 */
livroRoutes.delete('/:id', LivroController.excluirLivro);

export default livroRoutes;
