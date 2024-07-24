import express from "express";
import request from "supertest";
import locatarioRoutes from "../../src/routes/locatarioRoutes";

const app = express();
app.use(express.json());
app.use('/locatarios', locatarioRoutes);

describe('Testes Locatario', () => {
    let locatarioId;
    it('Deve criar um novo locatario (POST /locatarios)', async () => {
        const newLocatario = {
            nome: 'Locatario Teste',
            sexo: 'M',
            telefone: '123456789',
            email: 'teste@teste.com',
            dataNascimento: '2000-01-01',
            cpf: '123.456.789-00'
        };

        const response = await request(app).post('/locatarios').send(newLocatario);
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('locatario._id');
        expect(response.body.locatario.nome).toBe(newLocatario.nome);

        locatarioId = response.body.locatario._id;
    });

    it('Deve listar todos os locatarios (GET /locatarios)', async () => {
        const response = await request(app).get('/locatarios');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
    it('Deve listar um locatario por ID (GET /locatarios/:id)', async () => {
        const response = await request(app).get(`/locatarios/${locatarioId}`);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('_id', locatarioId);
    });

    it('Deve atualizar um locatario existente (PUT /locatarios/:id)', async () => {
        const updatedLocatario = {
            nome: 'Locatario Atualizado',
            sexo: 'F',
            telefone: '987654321',
            email: 'atualizado@teste.com',
            dataNascimento: '1990-01-01',
            cpf: '987.654.321-00'
        };
        const response = await request(app).put(`/locatarios/${locatarioId}`).send(updatedLocatario);
        expect(response.status).toBe(200);
        expect(response.body.locatario.nome).toBe(updatedLocatario.nome);
        expect(response.body.locatario.email).toBe(updatedLocatario.email);
    });

    it('Deve excluir um locatario (DELETE /locatarios/:id)', async () => {
        const response = await request(app).delete(`/locatarios/${locatarioId}`);
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Locatario removido com sucesso');

        const getResponse = await request(app).get(`/locatarios/${locatarioId}`);
        expect(getResponse.status).toBe(404);
    });
});