import React, { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function addCount() {
    setCount(count + 1);
  }

  function subtractCount() {
    setCount(count - 1);
  }
  return (
    <>
      <h2>Número: {count}</h2>
      <button onClick={() => subtractCount()}>Subtrair</button>
      <button onClick={() => addCount()}>Adicionar</button>
    </>
  );
}
