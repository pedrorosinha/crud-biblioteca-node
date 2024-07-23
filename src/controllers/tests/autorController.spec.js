const request = require("supertest");
const app = require("../../app").default;


describe('Testes Autor', () => {
   it('Testes jest', async () => {

      const response = await request(app).get('/autores');
      console.log(response);
      expect(response.status).toBe(200);
      // expect(response.body.autor.nome).toBe(newAutor.nome);
      // expect(response.body.autor.anoNascimento).toBe(newAutor.anoNascimento);
      // expect(response.body.autor.cpf).toBe(newAutor.cpf);
   }); 
});