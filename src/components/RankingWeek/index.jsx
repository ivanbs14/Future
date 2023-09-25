import { useCallback, useEffect, useState } from "react";
import { Container } from "./style";

import { api } from '../../services/api'

export function RankingWeek({ openModal }) {
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState(null);

   // Encapsulate the fetchData function using useCallback
   const fetchUsers = useCallback(async () => {
      try {
         const response = await api.get('/users');
         setData(response.data);
         setIsLoading(false);

      } catch (error) {
         setError(error);
         setIsLoading(false);
      }
   }, []);

   // Call fetchUsers when the component mounts or when dependencies change
   useEffect(() => {
      fetchUsers();
   }, [fetchUsers]);

   // If the data is still loading, display a loading message
   if (isLoading) {
      return <div>Loading...</div>;
   }
  
   // If an error occurred during data fetch, display an error message
   if (error) {
      return <div style={{ color: 'red', fontSize: '28px', alignItems: "center"}} className="error">Server is currently unavailable. Please check the server status.: {error.message}</div>;
   }

    // Filter the first 5 users with the highest score
    const topUsers = data
    .sort((a, b) => b.points - a.points)
    .slice(0, 5); 

   return (
      <Container>
         <h3>Destaques da semana:</h3>

         <div className="display">
            {topUsers.map((user) => (
               <div className="user" key={user.id}>
                  <img src={user.avatar} alt={user.name} />
                  <h4>{user.name}</h4>
                  <span>[{user.field}]</span>
                  <span className="spanBtn" onClick={() => openModal(user)}>Editar</span>
               </div>
            ))}
         </div>
      </Container>
   )
}