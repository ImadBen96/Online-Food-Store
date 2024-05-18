import dotenv from "dotenv"
dotenv.config();

import express, { response } from "express";
import cors from "cors";
import foodRouter from "./routers/food.router";
import userRouter from "./routers/user.router";
import { dbConnect } from "./configs/database.config";
import orderRouter from "./routers/order.router";
dbConnect();

const app = express();
app.use(express.json());

app.use(cors({
    credentials: true,
    origin: ["https://online-food-store-s8i9.onrender.com"]
}));

app.use("/api/foods",foodRouter);
app.use("/api/users",userRouter);
app.use("/api/orders",orderRouter);

const port = 5000;
app.listen(port,() => {
    console.log("WebSite Served On http://localhost:"+port);
});