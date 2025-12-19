import mongoose, { Schema, Document } from "mongoose";

export interface IFile extends Document {
  programme_code: string;
  programme_name: string;
  programme_department: string;
  programme_faculty: string;
  SIQF_level: string;
  programme_entry_requirement: string;
  programme_credits: string;
  programme_year: string;
  programme_study_type: string[];
  programme_description: number;
  programme_location: string;
  programme_study_period: string;
  programme_english_requirement: string;
  programme_level: string;
  programme_units: string;
}

const FileSchema: Schema = new Schema({
  programme_code: { type: String, required: true, unique: true }, 
  programme_name: { type: String, required: true },
  programme_department: { type: String, required: false },
  programme_faculty: { type: String, required: false },
  SIQF_level: { type: String, required: false },
  programme_entry_requirement: { type: String, required: false },
  programme_credits: { type: Number, required: false },
  programme_year: { type: String, required: false },
  programme_study_type: { type: [String], required: false },
  programme_description: { type: String, required: false },
  programme_location: { type: String, required: true },
  programme_study_period: { type: String, required: false },
  programme_english_requirement: { type: String, required: false },
  programme_level: { type: String, required: false },
  programme_units: { type: String, ref: 'unit_catalogue' },
});


export default mongoose.model<IFile>("programme_catalogue", FileSchema);
