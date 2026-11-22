import React from "react";
import { useParams } from "react-router-dom";

const Account = () => {
    const {subpage} = useParams();
    const buttonClass=(button) =>{
        const finalClass ="hover:bg-primary-400 cursor-pointer rounded-full px-4 py-2 transition hover:text-white";
        if(button === subpage) finalClass += "bg-primary-400 text-white";
        return finalClass;
    }
  return (
    <section className="p-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4">
        <div className="flex ">
          <button className="hover:bg-primary-400 cursor-pointer rounded-full px-4 py-2 transition hover:text-white">Perfil</button>
          <button className="hover:bg-primary-400 cursor-pointer rounded-full px-4 py-2 transition hover:text-white">Reservas</button>
          <button className="hover:bg-primary-400 cursor-pointer rounded-full px-4 py-2 transition hover:text-white">Lugares</button>
        </div>

        <div className="flex flex-col items-center gap-2">
          <p>Logado por Vitoria</p>
          <button>Logout</button>
        </div>
      </div>
    </section>
  );
};

export default Account;
