import mongoose, { Schema } from "mongoose";
import * as bcrypt from "bcrypt"

const PersonModels = new Schema<personName>({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    date: { type: String, required: true }
}, { versionKey: false })

PersonModels.pre('save', async function (next) {
    this.password = bcrypt.hashSync(this.password.toString(), 10);
    return next();
})

export const PersonModel = mongoose.model<personName>('PersonModel', PersonModels)

export interface personName {
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    date: String
}

