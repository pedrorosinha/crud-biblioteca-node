import express from "express";
import livros from "./livroRoutes.js";
import autores from "./autorRoutes.js";
import locatarios from "./locatarioRoutes.js";
import alugueis from "./aluguelRoutes.js"

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));

    // app.use(express.json(), livros, autores, locatarios, alugueis);
    app.use("/autores", autores);
    app.use("/locatarios", locatarios);
    app.use("/alugueis", alugueis);
    app.use("/livros", livros);
};

export default routes;