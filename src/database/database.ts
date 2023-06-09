import mongoose from "mongoose";
import { SERVER_DATABASE } from "../env";

const database = mongoose.createConnection(SERVER_DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as any);

export default database;
