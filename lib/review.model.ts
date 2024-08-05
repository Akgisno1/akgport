import { Schema, models, model, Document } from "mongoose";

export interface IReview extends Document {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

const ReviewSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Review = models.Review || model("Review", ReviewSchema);
export default Review;
