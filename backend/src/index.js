import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import messageRoutes from "./routes/message.route.js";
import {app,server} from "./lib/socket.js";

dotenv.config();

const PORT=process.env.PORT;
const URL=process.env.FRONTEND_URL;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: URL,
  credentials:true
}))

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

server.listen(PORT, ()=> {
  console.log("server is running on PORT:"+ PORT);
  connectDB();
})