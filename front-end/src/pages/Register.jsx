import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useUserContext } from "../contexts/UserContext";

const Register = () => {
  const {Setuser}=useUserContext();
     const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [riderect, setriderect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && password && name) {
      try {
        const { data: userDoc } = await axios.post("/users/", {
            name,
          email,
          password,
        });

        setUser(userDoc);
        setriderect(true);
      } catch (error) {
        alert(`deu erro a cadastrar :${JSON.stringify(error)}`);
      }
    } else {
      alert("voce precisar colocar o email, nome e senha");
    }
  };

  if (riderect) return <Navigate to = "/"/>
  

  return (
    <section className="flex items-center">
      <div className="mx-auto w-full max-w-96 flex-col items-center gap-4 p-8">
        <h1 className="text-3xl font-bold">Faça seu cadastro</h1>

        <form className="flex w-full flex-col gap-2" onSubmit={handleSubmit}>
          <input
            type="name"
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            placeholder="Digite seu melhor nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
           <input
            type="email"
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            placeholder="Digite seu melhor nome"
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
            Registrar
          </button>
        </form>

        <p>
          Já  tem uma conta? {""}
          <Link to="/login" className="font-semibold underline">
            Logue Aqui!
          </Link>{" "}
        </p>
      </div>
    </section>
  );
};

export default Register;
