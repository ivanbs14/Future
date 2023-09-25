import styled from "styled-components";

export const Container = styled.nav`
   width: 100%;
   height: 8rem;
   background: ${({ theme }) => theme.COLORS.NEUTRAL08};

   display: flex;
   justify-content: space-between;
   align-items: center;

   padding: 2rem 20rem 0 20rem;

   .navbar-right {
      display: flex;
      gap: 6.5rem;
      align-items: center;
   }

   .nav-links {
      display: flex;
      gap: 6.2rem;
      list-style-type: none;

      font-size: 1.4rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.NEUTRAL08};
   }
`;

/* export const Container = styled.nav`
   width: 100%;
   height: 8rem;
   background: ${({ theme }) => theme.COLORS.NEUTRAL08};

   display: flex;
   justify-content: space-between;
   align-items: center;

   padding: 2rem 20rem 0 20rem;

   .navbar-right {
      display: flex;
      gap: 6.5rem;
      align-items: center;
   }

   .nav-links {
      display: flex;
      gap: 6.2rem;
      list-style-type: none;

      font-size: 1.4rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.NEUTRAL08};
   }
`; */