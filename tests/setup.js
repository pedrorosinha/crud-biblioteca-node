import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000,
  });

  console.log("Conectado ao MongoDB em memória");
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
  console.log("Conexão com MongoDB em memória fechada");
});
