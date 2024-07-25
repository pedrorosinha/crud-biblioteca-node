import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import express from "express";

const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "API Livraria",
            version: "1.0.0",
            description: "API para gerenciamento de uma livraria"
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    apis: ["./src/routes/*.js", "./src/models/*.js"],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

const setupSwagger = (app) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}

export default setupSwagger;