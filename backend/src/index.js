import express from "express";
import dotenv from "dotenv"

import { connectDB } from "./lib/db.js";

import authRoutes from "./routes/auth.route.js";

dotenv.config()
const app = express();    
// mongodb+srv://adarshvasudev8055:H4vRBIkGRX5fP4YF@cluster0.yvvxslc.mongodb.net/chat_db?retryWrites=true&w=majority&appName=Cluster0

const PORT =process.env.PORT

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("server is running on PORT:"+ PORT);
  connectDB()
});
