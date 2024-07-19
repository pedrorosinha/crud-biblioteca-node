import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    isbn: { type: String, required: true, unique: true },
    dataPublicacao: { type: Date, required: true },
    autores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Autores', required: true }],
}, { versionKey: false });

const Livro = mongoose.model('Livros', livroSchema);

export default Livro;