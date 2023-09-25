import { useEffect, useState } from "react";
import { Container } from "./style";

export function TopStack({ data, title, openModal }) {
   const [selectedUsers, setSelectedUsers] = useState([]);

   // Function to randomly choose 4 users
   const chooseRandomFourUsers = () => {
      const randomUsers = [];
      const dataCopy = [...data];

      while (randomUsers.length < 4 && dataCopy.length > 0) {
         const randomIndex = Math.floor(Math.random() * dataCopy.length);
         randomUsers.push(dataCopy.splice(randomIndex, 1)[0]);
      }

      setSelectedUsers(randomUsers);
   };

   // Call the function to select random users when the component mounts
   useEffect(() => {
      chooseRandomFourUsers();
   }, []);

   return (
      <Container>
         <h2 className="left">{title}</h2>
         <div className="topStack">
            {selectedUsers.map((user) => (
               <div className="tableUser" key={user.id}>
                  <img src={user.avatar} alt={user.name} />
                  <h4>{user.name}</h4>
                  <h4>[{user.field}]</h4>
                  <span className="spanBtn" onClick={() => openModal(user)}>Editar</span> 
               </div>
            ))}
         </div>
      </Container>
   )
}