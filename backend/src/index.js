import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import messageRoutes from "./routes/message.route.js";
import {app,server} from "./lib/socket.js";
import path from "path";

dotenv.config();

const PORT=process.env.PORT;
const __dirname=path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials:true
}))

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if(process.env.NODE_ENV==="production"){
  app.use(express.static(path.join(__dirname, "../frontend1/dist")));

  app.get("/*path", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend1", "dist", "index.html"));
  });
}

server.listen(PORT, ()=> {
  console.log("server is running on PORT:"+ PORT);
  connectDB();
})