import * as z from "zod";

export const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  senderTitle: z.string().min(1, "Sender title is required"),
  company: z.string().min(1, "Company name is required").max(100),
  roleType: z.string().min(1, "Role type is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().max(2000).optional(),
});

export type ContactFormData = z.infer<typeof ContactSchema>;