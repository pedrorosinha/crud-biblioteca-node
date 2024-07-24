import express from "express";
import alugueis from "./aluguelRoutes.js"
import autorRoutes from "./autorRoutes.js";
import livroRoutes from "./livroRoutes.js";
import locatarioRoutes from "./locatarioRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));

    // app.use(express.json(), livros, autores, locatarios, alugueis);
    app.use("/autores", autorRoutes);
    app.use("/locatarios", locatarioRoutes);
    app.use("/alugueis", alugueis);
    app.use("/livros", livroRoutes);
};

export default routes;