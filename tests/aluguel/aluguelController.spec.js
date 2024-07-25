import express from "express";
import request from "supertest";
import aluguelRoutes from "../../src/routes/aluguelRoutes";
import Locatario from "../../src/models/Locatario";
import Livro from "../../src/models/Livro";

const app = express();
app.use(express.json());
app.use('/alugueis', aluguelRoutes);

describe('Testes para AluguelController', () => {
    let aluguelId;
    let locatarioId;
    let livroId1;
    let livroId2;

    beforeAll(async () => {
        const novoLocatario = await Locatario.create({
            nome: 'Teste Locatario',
            cpf: '12345678901',
            dataNascimento: '1990-01-01',
            email: 'teste@locatario.com',
            telefone: '123456789'
        });
        locatarioId = novoLocatario._id;

        const novoLivro1 = await Livro.create({ nome: 'Livro Teste 1', isbn: '111-1111111111', dataPublicacao: '2023-12-22' });
        const novoLivro2 = await Livro.create({ nome: 'Livro Teste 2', isbn: '222-2222222222', dataPublicacao: '2024-07-25' });
        livroId1 = novoLivro1._id;
        livroId2 = novoLivro2._id;
    });

    it('deve criar um novo aluguel', async () => {
        const novoAluguel = {
            dataRetirada: '2024-07-25',
            dataDevolucao: '2024-07-27',
            locatario: locatarioId,
            livros: [livroId1, livroId2]
        };

        const response = await request(app)
            .post('/alugueis')
            .send(novoAluguel);

        expect(response.status).toBe(201);
        expect(response.body.message).toBe('Criado com sucesso');
        expect(response.body.aluguel).toHaveProperty('_id');
        aluguelId = response.body.aluguel._id;
    });

    it('deve listar todos os alugueis', async () => {
        const response = await request(app).get('/alugueis');
        expect(response.status).toBe(200);
    });

    it('deve listar um aluguel por ID', async () => {
        const response = await request(app).get(`/alugueis/${aluguelId}`);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('_id', aluguelId);
    });

    it('deve atualizar um aluguel', async () => {
        const aluguelAtualizado = {
            dataDevolucao: '2024-07-28'
        };

        const response = await request(app).put(`/alugueis/${aluguelId}`).send(aluguelAtualizado);

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Aluguel atualizado com sucesso!');
    });

    it('deve excluir um aluguel', async () => {
        const response = await request(app).delete(`/alugueis/${aluguelId}`);
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Aluguel removido com sucesso');
    });
});