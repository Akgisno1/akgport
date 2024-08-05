"use server";

import { connectDB } from "./mongoose";
import Review from "./review.model";

interface ReviewProps {
  name: string;
  email: string;
  message: string;
}

export async function createReview({ name, email, message }: ReviewProps) {
  try {
    connectDB();
    const review = await Review.create({
      name,
      email,
      message,
    });
  } catch (error) {
    throw new Error("Failed to create review");
  }
}
