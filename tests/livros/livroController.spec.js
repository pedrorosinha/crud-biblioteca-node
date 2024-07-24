import express from "express";
import request from "supertest";
import livroRoutes from "../../src/routes/livroRoutes";

const app = express();
app.use(express.json());
app.use('/livros', livroRoutes);

describe('Testes Livro', () => {
    let livroId;

    it('Deve criar um novo livro (POST /livros)', async () => {
        const newLivro = {
            nome: 'Livro Teste',
            isbn: '123-456-789',
            dataPublicacao: '2023-07-23'
        };

        const response = await request(app).post('/livros').send(newLivro);
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('livro._id');
        expect(response.body.livro.nome).toBe(newLivro.nome);

        livroId = response.body.livro._id;
    });

    it('Deve listar todos os livros (GET /livros)', async () => {
        const response = await request(app).get('/livros');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it('Deve listar um livro por ID (GET /livros/:id)', async () => {
        const response = await request(app).get(`/livros/${livroId}`);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('_id', livroId);
    });

    it('Deve atualizar um livro existente (PUT /livros/:id)', async () => {
        const updatedLivro = {
            nome: 'Livro Atualizado',
            isbn: '987-654-321',
            dataPublicacao: '2023-07-24'
        };
        const response = await request(app).put(`/livros/${livroId}`).send(updatedLivro);
        expect(response.status).toBe(200);
        expect(response.body.nome).toBe(updatedLivro.nome);
        expect(response.body.isbn).toBe(updatedLivro.isbn);
    });

    it('Deve excluir um livro (DELETE /livros/:id)', async () => {
        const response = await request(app).delete(`/livros/${livroId}`);
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Livro excluído com sucesso');
    });
});
