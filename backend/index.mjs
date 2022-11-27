import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

const CONN_STRING = process.env.CONN_STRING;

app.use(cors());

const uri = CONN_STRING;
const client = await new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
await client.connect();
const db = await client.db("recipeBook");

app.get("/recipes", async (req, res) => {
  const collection = await db.collection("recipes");
  const recipes = await collection.find({}).toArray();
  res.send(recipes).status(200);
});

app.get("/chefs", async (req, res) => {
  const collection = await db.collection("chefs");
  const chefs = await collection.find({}).toArray();
  res.send(chefs).status(200);
});

app.listen(PORT, () => {console.log(`Server started on port ${PORT}`)});