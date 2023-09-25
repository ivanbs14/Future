import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;

   form, button {
      margin: 0;
      padding: 0;
      border: none;
      outline: none;
      font-size: 1.6rem;
      font-family: inherit;
      color: inherit;
      background-color: transparent;
   }

   h1 {
      margin-bottom: 1.5rem;
   }


   form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 3rem;

      label {
         width: 100%;
         font-size: 2rem;
         font-weight: 600;

         padding: 0 2rem;

         display: flex;
         flex-direction: column;

         input {
            width: 100%;
            height: 3rem;

            padding: 2rem;
            margin-top: 1rem;

            background: ${({ theme }) => theme.COLORS.NEUTRAL09};;
            outline: none;
            border: 0.5px solid ${({ theme }) => theme.COLORS.PRIMARY01};
            border-radius: 1.5rem;

            color: red;
            font-size: 1.8rem;
            font-weight: 400;
            color: ${({ theme }) => theme.COLORS.NEUTRAL01};
         }
      }
      .numb {
         width: 20%;
      }
   }

   .containerOne {
      display: flex;
      margin-bottom: 3rem;
   }

   .containerTwo {
      display: flex;
      gap: 2rem;

   }

   .inpt {
      display: none;
   }

   .btn {
      width: 13rem;
      height: 4.4rem;

      border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY01};
      border-radius: 2rem;
      background: none;

      font-size: 1.4rem;
      font-weight: 500;
      background-color: ${({ theme }) => theme.COLORS.NEUTRAL09};
      color: ${({ theme }) => theme.COLORS.NEUTRAL01};
      cursor: pointer;
   }

   .btn:hover {
    background-color: ${({ theme }) => theme.COLORS.NEUTRAL08};
    color: ${({ theme }) => theme.COLORS.PRIMARY02};
  }
`;