import React from "react";

function Item() {
  return (
    <a href="/" className=" flex flex-col gap-2">
      <img
        src="https://a0.muscache.com/im/pictures/4b8d4f3d-1d8e-4f99-96ef-cf21d8511f4a.jpg?im_w=960"
        alt="Imagem da acomodação"
        className="aspect-square object-cover rounded-2xl"
      />
    <div>
      <h3 className="text-xl font-semibold">Espaço inteiro: apartamento em Salvador, Brasil</h3>
      <p className="truncate text-gray-600">
        Flat reformado, espaçoso, com enxoval padrão hotel na região central de
        Brasília, perto de TUDO! Perfeito para hospedagem à trabalho ou a lazer,
        pra quem não quer perder tempo com deslocamento. Flat amplo e a limpeza
        é impecável, com travesseiros e camas com proteção antialérgicas Próximo
        à Esplanada dos Ministérios, estádio, Centro de Convenções, embaixadas,
        4 shoppings e restaurantes O Hotel possui 2 restaurantes, segurança por
        câmeras, 2 lanchonetes, salão de beleza e mini mercado 24h!
      </p>
      </div>
      <p>
        <span className="font-semibold">R$550 </span>p/ noite
      </p>
    </a>
  );
}

export default Item;
