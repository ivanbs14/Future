import styled from "styled-components";

export const Container = styled.div`
   width: 92.8rem;
   height: 30.6rem;
   display: flex;
   flex-direction: column;
   gap: 1.7rem;

   padding: 1.6rem 3.2rem;
   border: 2px solid ${({ theme }) => theme.COLORS.PRIMARY01};
   border-radius: 2rem;
   background: linear-gradient(180deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.00) 100%), rgba(248, 249, 250, 0.20);
   backdrop-filter: blur(5px);

   margin-bottom: 3.2rem;

   a {
      margin: 1rem 0 1.5rem;
      text-decoration: underline;
   }

   .user {
      display: flex;
      gap: 3.2rem;
   }
`;