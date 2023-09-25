import React, { useEffect, useState } from "react";
import { Container } from "./style";

import { api } from "../../services/api";

export function FormUser({ dataUser, closeModal }) {
   const [userId, setUserId] = useState(dataUser.id);
   const [formData, setFormData] = useState({
      name: "",
      age: "",
      email: "",
      field: "",
      points: "",
      avatar: "",
   });

   useEffect(() => {
      if (dataUser) {
         setFormData({
         name: dataUser.name || "",
         age: dataUser.age || "",
         email: dataUser.email || "",
         field: dataUser.field || "",
         points: dataUser.points || "",
         avatar: dataUser.avatar || "",
         });

      }
  }, [dataUser]);

  // Update the form data when input values change
  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      }));
  };

  // Update the user resource and then delete it
  const handleSubmit = async (e) => {
      e.preventDefault();

      try {
      await updateResource(dataUser.id, formData);
      await deleteResource(userId);

      } catch (error) {
      console.error("Erro ao atualizar o recurso:", error);
      }
  };

  // Function to update the user resource
  const updateResource = async (userId, formData) => {
      try {
      const response = await api.patch(`/users/${userId}`, formData);
      window.location.reload();
      console.log("Recurso atualizado com sucesso!", response.data);

      } catch (error) {
      console.error("Erro ao atualizar o recurso:", error);
      throw error;
      }
   };

   // Function to handle user removal
   async function handleRemoveUser() {
      try {
         const confirm = window.confirm("Deseja mesmo deletar usuário?")
         const userId = await dataUser.id;

         if (confirm) {
            const response = await api.delete(`/users/${userId}`);

            console.log("User excluído com sucesso!", response.data);
            window.location.reload();
         }
         
      } catch (error) {
         console.error("Erro ao excluir o recurso:", error);
         throw error;
      }
   }

  return (
    <Container>
      <h1>ATUALIZE OU REMOVA O USUÁRIO</h1>
      <form onSubmit={handleSubmit}>
         <div className="containerOne">
            <label>
               Nome:
               <input
               type="text"
               placeholder="Nome"
               name="name"
               value={formData.name}
               onChange={handleChange}
               />
            </label>
            <label className="numb">
               Idade:
               <input
               type="text"
               placeholder="Age"
               name="age"
               value={formData.age}
               onChange={handleChange}
               />
            </label>
            <label>
               Email:
               <input
               type="text"
               placeholder="Email"
               name="email"
               value={formData.email}
               onChange={handleChange}
               />
            </label>
            <label>
               Profissão:
               <input
               type="text"
               placeholder="Profissão"
               name="field"
               value={formData.field}
               onChange={handleChange}
               />
            </label>
            <label className="numb">
               Pontos:
               <input
               type="text"
               placeholder="00"
               name="points"
               value={formData.points}
               onChange={handleChange}
               />
            </label>
         </div>
         <div className="containerTwo">
            <input className="inpt" type="submit" placeholder="ATUALIZE" value="ATUALIZE" />
         </div>
      </form>
      <div className="containerTwo">
         <button className="btn" onClick={handleSubmit}>ATUALIZAR</button>
         <button className='btn' onClick={handleRemoveUser}>DELETAR</button>
      </div>
    </Container>
  );
}
