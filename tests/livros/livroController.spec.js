import express from "express";
import request from "supertest";
import livroRoutes from "../../src/routes/livroRoutes";

const app = express();
app.use(express.json());
app.use('/livros', livroRoutes);

describe('Testes Livro', () => {
   it('Testes jest', async () => {

      const response = await request(app).get('/livros');
      console.log(response);
      expect(response.status).toBe(200);
      // expect(response.body.autor.nome).toBe(newAutor.nome);
      // expect(response.body.autor.anoNascimento).toBe(newAutor.anoNascimento);
      // expect(response.body.autor.cpf).toBe(newAutor.cpf);
   }); 
});