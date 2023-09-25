import styled from "styled-components";

export const Container = styled.div`
   h2 {
      font-size: 4.5rem;
      font-weight: 400;
   }

   .box, .topStack, .topFive {
      width: 53rem;
      padding: 3.2rem;

      border-radius: 20px;
      border: 2px solid #FFED3C;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.00) 100%), rgba(248, 249, 250, 0.20);
      backdrop-filter: blur(5px);
   }

   .tableUser {
      height: 8rem;
      padding: 0.8rem;

      display: flex;
      align-items: center;
      gap: 3.2rem;

      p, h3, span {
         font-size: 2.2rem;
         font-weight: 600;
      }

      .spanBtn {
         cursor: pointer;
      }

      .spanBtn:hover {
         color: ${({ theme }) => theme.COLORS.PRIMARY01};;
      }

      img {
         width: 6rem;
         border-radius: 50%;
      }

      h4 {
         font-size: 2.4rem;
         font-weight: 400;
      }
   }

`;