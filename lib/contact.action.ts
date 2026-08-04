"use server";


import { connectDB } from "./mongoose";
import Contact from "./contact.model";
import { ContactFormData, ContactSchema } from "./formSchema";



export async function createContact(data: ContactFormData) {
  try {
    // 1. Validate payload on server side
    const validatedData = ContactSchema.parse(data);

    // 2. Connect to Database
    await connectDB();

    // 3. Create document
    await Contact.create(validatedData);

    return { success: true };
  } catch (error: any) {
    console.error("Failed to create contact message:", error);
    return {
      success: false,
      error: error?.message || "Failed to send contact message",
    };
  }
}