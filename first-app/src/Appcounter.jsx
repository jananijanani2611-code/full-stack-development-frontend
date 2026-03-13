import { useState }from "react";

export default function App(){
  let [counter,setCounter]=useState(10);
  function handleClick(){
    setCounter(counter+1)
  }
  return(
    <div>
      {counter}
       <button onClick={handleClick}>+ </button>
    </div>

  );

}