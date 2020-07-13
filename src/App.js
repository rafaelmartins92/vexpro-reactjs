import React, { useState } from 'react';

function App() {
  const [state, setState] = useState(0);
  const [value, setValue] = useState("Digite o texto");
  console.log('clicou!', state)
  console.log('texto', value)
  return (
    <div>
      <h1>Valor atual: {state}</h1>
      <button onClick={() => setState(state + 1)}>Somar</button>
      <br />
      <br />
      <h1>Valor do input: {value}</h1>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)}></input>
    </div>
  );
}

export default App;
