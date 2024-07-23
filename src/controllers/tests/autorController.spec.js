import request from "supertest";

describe('Testes Autor', () => {
   it('Testes jest', async () => {
    const newAutor = {
        nome: 'João Silva',
        anoNascimento: 1980,
        cpf: '123.456.789-00'
      };

      const response = (await request(app).post('/autores')).send(newAutor);
      expect(response.status).toBe(201);
      expect(response.body.autor.nome).toBe(newAutor.nome);
      expect(response.body.autor.anoNascimento).toBe(newAutor.anoNascimento);
      expect(response.body.autor.cpf).toBe(newAutor.cpf);
   }); 
});