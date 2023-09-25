import { ModalContainer, ModalContent, ModalButton } from "./styled";
import { FormUser } from '../FormUser/index';

export function Modal({ isOpenModal, closeModal, data }) {
   
   return (
      <>
            <ModalContainer isOpen={isOpenModal}>
               <ModalContent>
                  <ModalButton className="btnClosed" onClick={closeModal}>X</ModalButton>
                  <FormUser dataUser={data} />
                 
               </ModalContent>
            </ModalContainer>
      </>
   );
}
