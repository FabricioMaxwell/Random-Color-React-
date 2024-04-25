import { useState, useEffect } from 'react'
import './App.css'


function App() {
  const [color, setColor] = useState("#000000");
  const [typeOfColor, setTypeOfColor] = useState("hex");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let  hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <>
      <div style={{
          background: color,
        }} className='App'
        >
          <button onClick={() => setTypeOfColor("hex")}>Criar HEX Cor</button>
          <button onClick={() => setTypeOfColor("rgb")}>Criar RGB Cor</button>
          <button onClick={typeOfColor === "hex" ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Gerar Cor Aleatória</button>

          <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontSize: "60px",
            marginTop: "50px",
            flexDirection  :'column',
            gap :'20px'
          }}>
            <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
            <h1>{color}</h1>
          </div>
      </div>
    </>
  )
}

export default App
