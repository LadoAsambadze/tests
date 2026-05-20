import React from "react";

export default function Signup() {
  async function ServerSignup() {
    const response = await fetch("http://localhost:3001/users", {
      method: "POST",
      body: JSON.stringify({ username: "Lado", password: "123456" }),
    });
  }

  return (
    <div>
      <button onClick={ServerSignup}>Send data</button>
    </div>
  );
}
