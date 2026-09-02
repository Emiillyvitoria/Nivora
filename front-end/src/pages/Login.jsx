import React from "react";
import { Link, Links } from "react-router-dom";

function Login() {
  return (
    <section className="flex items-center">
      <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-8">
        <h1 className="text-3xl font-bold">Faça seu login</h1>
        <form className="flex w-full flex-col gap-2">
          <input
            type="email"
            className="w-full rounded-full border border-gray-300 py-2 pr-4 pl-6 shadow-md"
            placeholder="Digite seu melhor e-mail"
          />
          <input
            type="password"
            className="w-full rounded-full border border-gray-300 py-2 pr-4 pl-6 shadow-md"
             placeholder="Digite sua senha"
          />
          <button className="bg-primary-400 w-full cursor-pointer rounded-full border border-gray-300 py-2 pr-4 pl-6 font-bold text-white shadow-md">
            Login
          </button>
        </form>
        <p>
          Ainda não tem conta?{" "}
          <Link to="/register" className="font-semibold underline">
            {" "}
            Registre-se aqui{" "}
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
