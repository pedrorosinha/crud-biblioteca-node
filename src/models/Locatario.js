import mongoose from 'mongoose';

const locatarioSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { type: String, required: true },
  sexo: { type: String, enum: ['M', 'F'], default: null },
  telefone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dataNascimento: { type: Date, required: true },
  cpf: { type: String, required: true, unique: true },
}, { versionKey: false });

const Locatario = mongoose.model('Locatarios', locatarioSchema);

export default Locatario;