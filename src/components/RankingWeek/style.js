import styled from "styled-components";

export const Container = styled.div`
   h3 {
      font-size: 3.6rem;
      font-weight: 400;
      margin-bottom: 3rem;
   }

   .display {
      width: 112rem;
      height: 38rem;
      padding: 3.2rem 6.4rem;
      align-items: center;
      margin-bottom: 3.5rem;

      display: flex;
      justify-content: space-between;

      border: 2px solid ${({ theme }) => theme.COLORS.PRIMARY01};
      border-radius: 2rem;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.00) 100%), rgba(248, 249, 250, 0.20);
      backdrop-filter: blur(5px);

      .spanBtn {
         font-size: 1.8rem;
         font-weight: 600;
      }

      .spanBtn {
         cursor: pointer;
      }

      .spanBtn:hover {
         color: ${({ theme }) => theme.COLORS.PRIMARY01};;
      }
   }

   .user {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
         width: 15rem;
         border-radius: 50%;
      }

      h4 {
         margin: 1.2rem 0;
      }
   }
`;