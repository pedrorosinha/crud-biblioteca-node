import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()
async function conectaNaDatabase() {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection;
}

export default conectaNaDatabase;