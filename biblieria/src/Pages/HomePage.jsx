import React from 'react';
import axios from "../api/axios";

export default function HomePage() {

  async function handleSubmit(e) {
    e.preventDefault();
  
    await axios.get("/sanctum/csrf-cookie").then(response=>console.log(response)).catch(error=>console.log(error));

    await axios.post("/login", {
      email: "test@example.com",
      password: "password"
    }).then(response=>console.log(response)).catch(error=>console.log(error));

    await axios.get("/sanctum/csrf-cookie").then(response=>console.log(response)).catch(error=>console.log(error));

    await axios.get("/api/user").catch(error=>console.log(error));;
  }

  
  return (

    <div>HomePage
       <button onClick={handleSubmit}>Cliccami</button></div>
   
  )
}
