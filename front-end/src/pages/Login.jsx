import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

const Login = ({ usersetUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [riderect, setriderect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && password) {
      try {
        const { data: userDoc } = await axios.post("/users/login", {
          email,
          password,
        });

        setUser(userDoc);
        setriderect(true);
      } catch (error) {
        alert(`deu erro a logar :${error.response.data}`);
      }
    } else {
      alert("voce precisar colocar o email e senha");
    }
  };

  if (riderect || user) return <Navigate to = "/"/>
  

  return (
    <section className="flex items-center">
      <div className="mx-auto w-full max-w-96 flex-col items-center gap-4 p-8">
        <h1 className="text-3xl font-bold">Faça seu login</h1>

        <form className="flex w-full flex-col gap-2" onSubmit={handleSubmit}>
          <input
            type="email"
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            placeholder="Digite seu melhor e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="bg-primary-400 w-full cursor-pointer rounded-full border border-gray-300 px-4 py-2 font-bold text-white"
          >
            Login
          </button>
        </form>

        <p>
          Ainda não tem uma conta? {""}
          <Link to="/register" className="font-semibold underline">
            Registre-se Aqui!
          </Link>{" "}
        </p>
      </div>
    </section>
  );
};

export default Login;
