import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  name: String,
  description: String,
  ingredients: String,
  preparation: String,
  imageURL: String,
});

export default mongoose.model("recipecontent", recipeSchema);
