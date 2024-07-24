import express from "express";
import request from "supertest";
import autorRoutes from "../../src/routes/autorRoutes";

const app = express();
app.use(express.json());
app.use('/autores', autorRoutes);

describe('Testes Autor', () => {
   let autorId;
 
   it('Deve criar um novo autor (POST /autores)', async () => {
     const newAutor = {
       nome: 'Autor Teste',
       anoNascimento: 1980,
       cpf: '12345678900'
     };
 
     const response = await request(app).post('/autores').send(newAutor);
     expect(response.status).toBe(201);
     expect(response.body.autor).toHaveProperty('_id');
     expect(response.body.autor.nome).toBe(newAutor.nome);
 
     autorId = response.body.autor._id;
   });
 
   it('Deve listar todos os autores (GET /autores)', async () => {
     const response = await request(app).get('/autores');
     expect(response.status).toBe(200);
     expect(Array.isArray(response.body)).toBe(true);
     expect(response.body.length).toBeGreaterThan(0);
   });
 
   it('Deve obter um autor por ID (GET /autores/:id)', async () => {
     const response = await request(app).get(`/autores/${autorId}`);
     expect(response.status).toBe(200);
     expect(response.body).toHaveProperty('_id');
     expect(response.body._id).toBe(autorId);
   });
 
   it('Deve atualizar um autor existente (PUT /autores/:id)', async () => {
     const updatedAutor = {
       nome: 'Autor Atualizado',
       anoNascimento: 1985,
       cpf: '12345678901'
     };
 
     const response = await request(app).put(`/autores/${autorId}`).send(updatedAutor);
     expect(response.status).toBe(200);
     expect(response.body.nome).toBe(updatedAutor.nome);
   });
 
   it('Deve excluir um autor (DELETE /autores/:id)', async () => {
     const response = await request(app).delete(`/autores/${autorId}`);
     expect(response.status).toBe(200);
     expect(response.body.message).toBe('Autor excluído com sucesso');
   });
 });