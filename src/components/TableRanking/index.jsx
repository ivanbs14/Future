import { useCallback, useEffect, useState } from "react";
import { Container } from "./style";

import { api } from '../../services/api'

import { TopTen } from "../TopTen";
import { TopStack } from "../TopStack";
import { TopWeek } from "../TopWeek";

export function TableRanking({ openModal, closeModal }) {
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

   return (
      <Container>
         <TopTen 
            title={"Top 10 [Design]"}
            data={data}
            openModal={openModal}
         />

         <div className="left">
            <TopStack 
               title={"Os melhores de cada stack"} 
               data={data} 
               openModal={openModal}
            />
            
            <TopWeek 
               data={data} 
               title={"Top 5 Semana"}
               openModal={openModal}
            />
         </div>
      </Container>
   )
}