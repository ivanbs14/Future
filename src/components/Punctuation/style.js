import styled from "styled-components";

export const Container = styled.div`
   width: 40rem;
   display: flex;
   flex-direction: column;
   align-items: center;

   margin-bottom: 6rem;

   h3 {
      font-size: 3.6rem;
      font-weight: 400;
   }

   h1 {
      font-size: 5.7rem;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.PRIMARY01};
   }
`;