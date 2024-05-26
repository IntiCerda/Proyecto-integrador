import React, { useState, ChangeEvent, FormEvent } from "react";

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password1: "",
    password2: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, lastName, email, password1 } = formData;

    const query = `
      mutation {
        register(registerInput: {
          name: "${name}",
          lastName: "${lastName}",
          email: "${email}",
          password: "${password1}"
        }) {
          id
          name
          lastName
          email
        }
      }
    `;

    try {
      const response = await fetch("http://localhost:4000/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>Registro de Usuario (prueba)</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          autoComplete="name"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Apellido"
          value={formData.lastName}
          onChange={handleChange}
          autoComplete="name"
        />
        <input
          type="email"
          name="email"
          placeholder="Correo"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
        />
        <input
          type="password"
          name="password1"
          placeholder="Contraseña"
          value={formData.password1}
          onChange={handleChange}
          autoComplete="new-password"
        />
        <input
          type="password"
          name="password2"
          placeholder="Confirmar contraseña"
          value={formData.password2}
          onChange={handleChange}
          autoComplete="new-password"
        />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};