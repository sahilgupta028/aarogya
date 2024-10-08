import mongoose, {Schema, Document}  from "mongoose";


export interface Patient extends Document{
    _id: string;
    name?: string;
    email: string;
    phoneNumber?: number;
    age?: number;
    diseases?: string[];
    height?: number;
    weight?: number;
    bloodGroup?: string;
    allergies?: string;
    currentMedications?: string;
    address?: string;
    image? : string;
}


const PatientSchema = new Schema<Patient>(
    {
        _id: { type: String, required: true },
        name: { type: String, required: false },
        email: { type: String, required: true },
        phoneNumber: { type: String, required: false },
        age: { type: Number, required: false },
        diseases: { type: String, required: false },
        height: { type: Number, required: false },
        weight: { type: Number, required: false },
        bloodGroup: { type: String, required: false },
        allergies: { type: String, required: false },
        currentMedications: { type: String, required: false },
        address: { type: String, required: false },
        image: { type: String, required: false }
    },
    { 
        timestamps: true
    }
);

const PatientModel = mongoose.models && mongoose.models.Patient || mongoose.model<Patient>('Patient', PatientSchema);
export default PatientModel;

