import React from "react";
import xbox from "../assets/img/xbox.png";
export default function SectionOne() {
  return (
    <section className="sectionOne">
      <div className="text">
        <h2>Xbox series X</h2>
        <span>PEDIDO ANTECIPADO</span>
      </div>
      <div className="bg"></div>

      <div className="imgArea">
        <img src={xbox} alt="imagem demonstrativa do xbox series x" />
      </div>
    </section>
  );
}
