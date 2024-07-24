import express from "express";
import request from "supertest";
import autorRoutes from "../src/routes/autorRoutes";
const app = express();
app.use(express.json());
app.use('/autores', autorRoutes);


describe('Testes Autor', () => {
   it('Testes jest', async () => {

      const response = await request(app).get('/autores');
      console.log(response.body);
      expect(response.status).toBe(200);
      // expect(response.body.autor.nome).toBe(newAutor.nome);
      // expect(response.body.autor.anoNascimento).toBe(newAutor.anoNascimento);
      // expect(response.body.autor.cpf).toBe(newAutor.cpf);
   }); 
});