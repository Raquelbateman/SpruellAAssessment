import { useState } from "react";


const CountContent = () => {
    const [numbers, setNumbers] = useState(0);

    const increaseClick = () => {
      setNumbers((prevNumbers) => prevNumbers + 1);
    };
  
    const decreaseClick = () => {
      if (numbers > 0) {
        setNumbers((prevNumbers) => prevNumbers - 1);
      }
    };
  
    const resetCounter = () => {
      setNumbers(0);
    };
  return (
    <>
      <main>

<div className="displayNumber">
              Current Number: {numbers}
          </div><br></br>
  <button onClick={increaseClick}>{+1}</button><br></br>
  <button onClick={decreaseClick}>{-1}</button><br></br>
  <button onClick={resetCounter}>Reset Counter</button>
</main>






    </>
  )
}

export default CountContent