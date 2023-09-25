import styled from "styled-components";

// Define a function to check whether a property should be passed to the DOM
const shouldForwardProp = (prop) => !['isOpen'].includes(prop);

export const ModalContainer = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
`;

export const ModalContent = styled.div`
  position: absolute;
  width: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 3rem;

  border-radius: 20px;
  border: 2px solid #FFED3C;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.00) 100%), rgba(248, 249, 250, 0.20);
  backdrop-filter: blur(5px);

  .btnClosed {
    width: 5%;
    margin-left: 88%;
  }

  .btnClosed:hover {
    background-color: ${({ theme }) => theme.COLORS.NEUTRAL08};
  }
`;

export const ModalButton = styled.button`
  position: absolute;
  width: 14.3rem;
  height: 4.4rem;

  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY01};
  border-radius: 2rem;
  background: none;

  font-size: 1.4rem;
  font-weight: 500;
  background-color: ${({ theme }) => theme.COLORS.NEUTRAL09};
  color: ${({ theme }) => theme.COLORS.NEUTRAL01};
  cursor: pointer;
`;

// Use shouldForwardProp when creating styled components
ModalContainer.shouldForwardProp = shouldForwardProp;
ModalContent.shouldForwardProp = shouldForwardProp;
ModalButton.shouldForwardProp = shouldForwardProp;