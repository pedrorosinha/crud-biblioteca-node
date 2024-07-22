import mongoose from 'mongoose';

const autorSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { type: String, required: true },
  sexo: { type: String, enum: ['M', 'F'], default: null },
  anoNascimento: { type: Number, required: true },
  cpf: { type: String, required: true, unique: true },
}, { versionKey: false });

const Autor = mongoose.model('Autores', autorSchema);

export default Autor;