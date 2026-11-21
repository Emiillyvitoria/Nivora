import "dotenv/config";
import express from "express";


const app= express();
const {PORT} = process.env;


app.listen(PORT,()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
});