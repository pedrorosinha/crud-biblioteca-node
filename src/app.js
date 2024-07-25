import express from "express";
import conectaNaDatabase from "./config/dbconnect.js";
import routes from "./routes/index.js";
import setupSwagger from "../swagger.js";

const app = express();

async function startServer() {
    const conexao = await conectaNaDatabase();
    
    conexao.on("error", (erro) => {
        console.error("Erro de conexão", erro);
    });
    
    conexao.once("open", () => {
        console.log("Conexão com o banco de dados feita com sucesso!");
    });
    
    app.use(express.json());
    setupSwagger(app)
    routes(app);

}
startServer();

export default app;

// module.exports = app;
 