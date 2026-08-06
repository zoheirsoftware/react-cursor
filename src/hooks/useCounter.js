import {  useState } from "react";

export const useCounter = (init ,value) => {
  const [count, setCount] = useState(init);
  
  const incream = () => {
    setCount(count + value);
  };
  const decream = () => {
    setCount(count - value);
  };
  const reset= () => {
    setCount(init);
  };
  
  return [count,incream,decream,reset]
};

export default  useCounter;
