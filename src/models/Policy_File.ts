import mongoose, { Schema, Document } from "mongoose";

export interface IFile extends Document {
  filename: string;
  data: Buffer;
  mimetype: string;
}

const FileSchema: Schema = new Schema({
  filename: { type: String, required: true },
  data: { type: Buffer, required: true },
  mimetype: { type: String, required: true },
});

export default mongoose.model<IFile>("Policy_files", FileSchema);
