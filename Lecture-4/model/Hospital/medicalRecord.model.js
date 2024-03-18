
import moment from "moment";

const medicalRecord = new Schema({},{timestamps: true});

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecord);