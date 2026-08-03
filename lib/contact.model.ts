import { Schema, models, model, Document } from "mongoose";

export interface IContact extends Document {
  name: string;
  senderTitle: string;
  company: string;
  roleType: string;
  email: string;
  message?: string;
  createdAt: Date;
}

const ContactSchema = new Schema({
  name: { type: String, required: true },
  senderTitle: { type: String, required: true },
  company: { type: String, required: true },
  roleType: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
});

const Contact = models.Contact || model<IContact>("Contact", ContactSchema);
export default Contact;