import styled from "styled-components";

export const Container = styled.button`
   width: 14.3rem;
   height: 4.4rem;

   border: 2px solid ${({ theme }) => theme.COLORS.SECUNDARY04};
   border-radius: 2rem;
   background: none;
   margin-bottom: 9rem;

   font-size: 1.4rem;
   font-weight: 500;
   color: ${({ theme }) => theme.COLORS.NEUTRAL01};
`;