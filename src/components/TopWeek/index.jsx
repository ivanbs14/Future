import { useEffect, useState } from "react";
import { Container } from "./style";

export function TopWeek({ data, title, openModal }) {
   const [selectedFiveUsers, setSelectedFiveUsers] = useState([]);

   // Function to randomly choose 5 users and organize them by points
   const chooseRandomAndSortUsers = () => {
      const randomUsers = [];
      const dataCopy = [...data];

      while (randomUsers.length < 5 && dataCopy.length > 0) {
         const randomIndex = Math.floor(Math.random() * dataCopy.length);
         randomUsers.push(dataCopy.splice(randomIndex, 1)[0]);
      }

      randomUsers.sort((a, b) => b.points - a.points);

      setSelectedFiveUsers(randomUsers);
   };

   // Call function chooseRandomAndSortUsers
   useEffect(() => {
      chooseRandomAndSortUsers();
   }, []);

   return (
      <Container>
         <h2 className="left">{title}</h2>
         <div className="topFive">
            {selectedFiveUsers.map((user, index) => (
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