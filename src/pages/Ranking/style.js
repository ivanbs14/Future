import styled from "styled-components";



export const Container = styled.div`
   width: 100%;

   padding: 0 19.6rem 0 18.7rem;

   .home-title {
      font-size: 5.7rem;
      font-weight: 400;

      margin-bottom: 6.8rem;
   }

   .division {
      width: 108rem;
      top: 92rem;
      left: -18.7rem;
      border: 2px solid ${({ theme }) => theme.COLORS.SECUNDARY04};
      position: absolute;
   }
`;