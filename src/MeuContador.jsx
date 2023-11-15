import { useState } from "react";

export default function MeuContador() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }

  function diminuir() {
    setContador(contador - 1);
  }

  if (contador > 5) {
    return (
      <div className="container">
        <h1>Valor passou de 5!</h1>
        <h2>Contador: {contador}</h2>
        <button onClick={aumentar}>aumentar</button>
        <button onClick={diminuir}>diminuir</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Meu Contador: {contador}</h1>
      <button onClick={aumentar}>aumentar</button>
    </div>
  );
}
