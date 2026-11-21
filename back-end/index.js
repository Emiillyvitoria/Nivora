import "dotenv/config";
import express from "express";
import { connectDb } from "./config/db";

const app= express();
const {PORT} = process.env;

app.get("/users", (req,res)=> {
    res.json("Ola mundo");
})

app.listen(PORT,()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
});