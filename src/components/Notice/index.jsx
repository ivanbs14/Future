import { Container } from "./style";

import avatar from '../../assets/unsplash_Zz5LQe-VSMY.png'

export function Notice() {

   return (
      <Container>
         <div className="user">
            <img src={avatar} alt="" />
            <span>Andréa Designer</span>
         </div>

         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est nibh eget facilisis dapibus duis nulla varius nunc egestas. Dictum ornare mauris lacinia orci amet. Nibh elit orci vestibulum sapien parturient id consequat elit. Augue fermentum risus pretium fringilla. Feugiat volutpat amet ornare vitae enim interdum.
            At vestibulum at congue blandit fringilla condimentum nam. Malesuada ut eu euismod urna, in egestas sit felis. At lectus nunc est scelerisque quisque adipiscing. </p>
         <span>Data </span>
         <a href="#">Ver mais</a>
      </Container>
   )
}