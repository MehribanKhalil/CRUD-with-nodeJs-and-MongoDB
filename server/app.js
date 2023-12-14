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

// const url = process.env.CONNECTION_URL.replace(
//   "<password>",
//   process.env.PASSWORD
// );


const url ="mongodb+srv://tu833kmn0:mehriban098@cluster0.xewqdvo.mongodb.net/"

const PORT = 5000

connect(url).catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log("Server is running");
});
