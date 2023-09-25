import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   padding: 8rem 19.2rem 0;

   h1 {
      font-size: 5.7rem;
      font-weight: 400;

      margin: 0rem 0 5.6rem ;
   }

   h3 {
      font-size: 3.2rem;
      font-weight: 400;
      margin-bottom: 1rem;
   }

   .movie {
      width: 112.5rem;
      height: 45rem;

      border: 1px solid red;
      margin-bottom: 3rem;
   }

   .division {
      width: 108rem;
      top: 88rem;
      left: -18.7rem;
      border: 2px solid ${({ theme }) => theme.COLORS.PRIMARY01};
      position: absolute;
   }

   section{
      h2 {
         font-size: 2.8rem;
         margin-bottom: 3rem;
      }

      .notice {
         display: flex;
         flex-direction: column;
         align-items: center;
      }
   }
`;