import React, { useEffect, useState } from "react";
import api from "./services/api";

export default function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    api
      .get("/users/IamThiago-IT")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className="App">
      <p>Name: {user?.login}</p>
      <p>Biografia: {user?.bio}</p>
      <p>Repositorio: {user?.repos}</p>
    </div>
  );
}