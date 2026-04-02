import React from "react";

const App = () => {
  async function getData() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    console.log(response);
  }
  return (
    <div>
      <button onClick={getData}>Getdata</button>
    </div>
  );
};

export default App;
