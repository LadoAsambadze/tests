import { useState } from "react";

export default function Shoes() {
  const [data, setData] = useState();

  async function GetData() {
    const res = await fetch("http://localhost:3001/shoes");
    const json = await res.json();
    setData(json);
  }

  async function SendData() {
    const response = await fetch("http://localhost:3001/shoes", {
      method: "POST",
      body: JSON.stringify({
        size: "22",
        brand: "Vike",
        color: "Red",
        price: "19.99",
        img: "",
      }),
    });
  }

  async function DeleteData() {
    const response = await fetch("http://localhost:3001/shoes/s29rF9CW5_s", {
      method: "DELETE",
    });
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <button onClick={GetData}>Get Data</button>
      <button onClick={SendData}>Send Data</button>
      <button onClick={DeleteData}>Delete Data</button>
    </div>
  );
}
