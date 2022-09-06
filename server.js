import express from "express";
import mongoose from "mongoose";
import Recipes from "./MongooseDB.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.json());
app.use(cors());

const url = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.${process.env.MONGO_NUMBER}.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(url);

app.get("/", (req, res) => {
  res.send("Welcome to the Recipe site backend");
});

app.get("/api/recipes/sync", (req, res) => {
  Recipes.find((err, foundItems) => {
    if (err) {
      res.send(err);
    } else {
      res.send(foundItems);
    }
  });
});

app.post("/api/compose", (req, res) => {
  const newRecipe = req.body;

  Recipes.create(newRecipe, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.post("/api/edit/:id", (req, res) => {
  const { id } = req.params;
  const update = req.body;

  Recipes.findByIdAndUpdate(id, update, (err) => {
    if (err) {
      console.log(err);
<<<<<<< HEAD
    } else {
      res.send("success");
=======
>>>>>>> b5ae5c5548b2513d03a3cfd8fa85ec0ed759fa8b
    }
  });
});

app.delete("/api/deletedocument/:id", (req, res) => {
  const { id } = req.params;
  Recipes.deleteOne({ _id: id }, (err) => {
    if (err) {
      console.log(err);
    }
  });
<<<<<<< HEAD

  res.send("success");
=======
>>>>>>> b5ae5c5548b2513d03a3cfd8fa85ec0ed759fa8b
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
