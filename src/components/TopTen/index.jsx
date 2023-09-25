import { useEffect, useState } from "react";
import { Container } from "./style";


export function TopTen({ title, data, openModal }) {
   const [filteredUsers, setFilteredUsers] = useState([]);

   // Function to randomly filter 10 users based on points
   const filterRandomUsers = () => {
      const clonedData = [...data];
      
      clonedData.sort((a, b) => b.points - a.points);
      const selectedUsers = clonedData.slice(0, 10);

      setFilteredUsers(selectedUsers);
   };

   // Call function filterRandomUsers
   useEffect(() => {
      filterRandomUsers();
   }, []);

   return (
      <Container>
         <h2>{title}</h2>
         <div className="box">
            {filteredUsers.map((user, index) => (
               <div className="tableUser" key={user.id}>
                  <p>{`${index + 1}º`}</p>
                  <img src={user.avatar} alt={user.name} />
                  <h4>{user.name}</h4>
                  <h3>
                     {user.points}
                     <span>pts</span>
                  </h3>
                  <span className="spanBtn" onClick={() => openModal(user)}>Editar</span> 
               </div>
            ))}
         </div>
      </Container>
   )
}