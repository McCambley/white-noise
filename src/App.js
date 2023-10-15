import "./styles.css";
import { useEffect, useState } from "react";

function Dot() {
  const [number, setNumber] = useState(0);

  function createRandomNumber() {
    const randomNumber = Math.round(Math.random() * 10);
    setNumber(randomNumber);
  }
  useEffect(() => {
    const intervalId = setInterval(createRandomNumber, 10);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const isGray = number > 5;

  return <div className={`dot ${isGray ? "gray" : ""}`}></div>;
}

export default function App() {
  const dots = Array.from({ length: 625 });
  return (
    <div className="App">
      {dots.map((d, i) => (
        <Dot key={i} />
      ))}
    </div>
  );
}
