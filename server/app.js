import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import { config } from "dotenv";
import bookRouter from "./routes/books.js";
config();

//Midleware
const app = express();
app.use(json());
app.use(cors());

app.use("/books", bookRouter);

const url = process.env.CONNECTION_URL.replace(
  "<password>",
  process.env.PASSWORD
);

const PORT = process.env.PORT;

connect(url).catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log("Server is running");
});
