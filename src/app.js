import express from "express";
import conectaNaDatabase from "./config/dbconnect.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco de dados feita com sucesso!");
});

const app = express();

export default app;