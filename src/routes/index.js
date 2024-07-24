import express from "express";
import locatarios from "./locatarioRoutes.js";
import alugueis from "./aluguelRoutes.js"
import autorRoutes from "./autorRoutes.js";
import livroRoutes from "./livroRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));

    // app.use(express.json(), livros, autores, locatarios, alugueis);
    app.use("/autores", autorRoutes);
    app.use("/locatarios", locatarios);
    app.use("/alugueis", alugueis);
    app.use("/livros", livroRoutes);
};

export default routes;