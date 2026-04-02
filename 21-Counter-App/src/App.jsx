import React, { useState } from "react";

const App = () => {
  const [num, setnum] = useState(0);

  function increase() {
    setnum(num + 1);
  }
  const btnclick = () =>{
    console.log(num);
    setnum(num+5);
    console.log(num);    
  }

  function decrease() {
    setnum(num - 1);
  }
  function jumpby5() {
    setnum(num + 5);
  }

  function reset() {
    setnum(0);
  }

  return (
    <div>
      <h1>Counter App: </h1>
      <h3>{num}</h3>
      <button onClick={increase}>Increase</button>
      <button onClick={reset}>Reset</button>
      <button onClick={jumpby5}>Jump By 5 </button>

      <button onClick={decrease}>Decrease </button>
    </div>
  );
};

export default App;
