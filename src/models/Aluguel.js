import mongoose from 'mongoose';

const aluguelSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  livros: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Livros', required: true }],
  locatario: { type: mongoose.Schema.Types.ObjectId, ref: 'Locatarios', required: true },
  dataRetirada: { type: Date, default: Date.now },
  dataDevolucao: { type: Date, default: () => new Date(+new Date() + 2*24*60*60*1000) },
}, { versionKey: false });

const Aluguel = mongoose.model('Alugueis', aluguelSchema);

export default Aluguel;
