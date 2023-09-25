import styled from "styled-components";

export const Container = styled.footer`
   width: 100%;
   display: flex;
   padding: 0 20rem 1.6rem;
   background: ${({ theme }) => theme.COLORS.NEUTRAL08};

   span, a {
      white-space: nowrap;
   }

   .footer-one {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 9.7rem;
      margin-top: 7rem;

      img {
         width: 29rem;
         height: 12.3rem;
         margin-bottom: 2.5rem;
      }

      a {
         text-decoration: underline;
      }
      
   }

   .one-links {
      display: flex;
      gap: 1.6rem;

      font-size: 1.1rem;
      font-weight: 500;
   }

   .footer-two, .footer-tree {
      display: flex;
      flex-direction: column;

      margin-top: 4rem;
   }

   .footer-two, .footer-tree {
      font-weight: 600;
      margin-right: 3.5rem;

      a {
         margin: 1rem 1.6rem;
         text-decoration: underline;
      }
   }

   .footer-four {
      font-weight: 600;
      margin-left: 8.9rem;
      margin-top: 4rem;

      span {
         white-space: nowrap;
      }

      .midias {
         display: flex;
         justify-content: space-between;

         margin-top: 1.6rem;
      }
   }
`;