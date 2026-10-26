import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Compteur : {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </div>
  );
}

export default Counter;