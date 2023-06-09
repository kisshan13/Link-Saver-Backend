import database from "../database";
import mongoose, { Schema } from "mongoose";

interface SessionI {
  userId: Schema.Types.ObjectId;
  accessToken: string;
  refreshToken: string;
  expireAt: Date;
  createdAt: Date;
}

const sessionSchema = new Schema<SessionI>({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  accessToken: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
    required: true,
  },
  expireAt: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
});

const Session = database.model("Session", sessionSchema);

export default Session;
