import { Container } from './style';
import { Link } from 'react-router-dom';

import logo from '../../assets/02_Groovy_neon_text_effect sm.png'
import avatar from '../../assets/unsplash_rDEOVtE7vOs.png'

export function Nav() {

   return (
      <Container>
         <div className="navbar-left">
            <img src={logo} alt="Logo" className="logo" />
         </div>
         <div className="navbar-right">
            <ul className="nav-links">
               <li><Link href="/">AULAS</Link></li>
               <li><Link href="#">DESAFIOS</Link></li>
               <li><Link to="/ranking">RANKING</Link></li>
               <li><Link href="#">FEEDBACKS</Link></li>
            </ul>
            <div className="user-avatar">
               <img src={avatar} alt="Usuário" className="avatar" />
            </div>
         </div>
      </Container>
   )
}