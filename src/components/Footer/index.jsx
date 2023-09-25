import { Container } from './style';

import logo from '../../assets/02_Groovy_neon_text_effect 1.png'
import linkedInd from '../../assets/akar-icons_linkedin-box-fill.png'
import youTube from '../../assets/akar-icons_youtube-fill.png'
import instagram from '../../assets/ant-design_instagram-filled.png'

export function Footer() {

   return (
      <Container>
         <div className='footer-one'>
            <img src={logo} alt="imagem logo do site" />
            <ul className='one-links'>
               <a href="#">Termos de Uso</a>
               <a href="#">Política de Privacidade</a>
               <a href="#">Cookies</a>
            </ul>
         </div>
            <div className='footer-two'>
               <span>FUTURE EXPERIENCE</span>
               <a href="#">Home</a>
               <a href="#">Mural de avisos</a>
            </div>
            <div className='footer-tree'>
               <span>PAINEL DO ALUNO</span>
               <a href="#">Aulas</a>
               <a href="#">Desafios</a>
               <a href="#">Ranking</a>
               <a href="#">Feedbacks</a>
            </div>
         <div className='footer-four'>
            <span>SOCIAL MEDIA</span>
            <div className='midias'>
               <img src={linkedInd} alt="logo do linkedIn" />
               <img src={youTube} alt="logo do YouTube" />
               <img src={instagram} alt="logo do Instagram" />
            </div>
         </div>
      </Container>
   )
}