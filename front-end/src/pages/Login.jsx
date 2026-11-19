
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="flex items-center ">
      <div className="mx-auto  max-w-96  flex-col items-center gap-4 p-8 w-full">
       <h1 className="text-3xl font-bold">Faça seu login</h1>

       <form className="flex flex-col gap-2 w-full">
        <input type="email" className="w-full  rounded-full border border-gray-300 px-4 py-2" placeholder="Digite seu melhor e-mail" />
        <input type="password" className="w-full  rounded-full border border-gray-300 px-4 py-2" placeholder="Digite sua senha" /> 
        <button  className="w-full cursor-pointer bg-primary-400 text-white font-bold rounded-full border border-gray-300 px-4 py-2"></button>
       </form>

       <p>Ainda não tem uma conta? {""}<Link to="/register" className="font-semibold underline">Registre-se Aqui!</Link> </p>
      </div>
    </section>
  );
};

export default Login;
