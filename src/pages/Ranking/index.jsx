import { useState } from 'react';
import { Container } from './style';

import { Punctuation } from '../../components/Punctuation';
import { RankingWeek } from '../../components/RankingWeek';
import { TableRanking } from '../../components/TableRanking';
import { Vetores } from '../../components/Vetores';
import { Modal } from '../../components/Modal';

export function Ranking() {
   const [isOpen, setIsOpenModal] = useState(false); 
   const [dataUser, setDataUser] = useState({});

   // Function to open the modal and set user data
   const openModal = (data) => {
      console.log("Opening Modal 2");
      if (data) {
         setDataUser(data);
      }
      else {
         setDataUser({});
      }
      setIsOpenModal(true);
   }

   // Function to close the modal
   const closeModal = () => {
      console.log("CLosing Modal 2");
      setIsOpenModal(false);
   }

   return (
      <Container>
         <Modal isOpenModal={isOpen} closeModal={closeModal} data={dataUser} />
         <Vetores />
         <h1 className='home-title'>RANKING</h1>
         <Punctuation />
         <RankingWeek openModal={openModal} closeModal={closeModal}/>
         <div className='division'></div>
         <TableRanking openModal={openModal} closeModal={closeModal} />
      </Container>
   )
}