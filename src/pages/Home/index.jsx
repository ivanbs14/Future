import { Container } from './style';

import { Notice } from '../../components/Notice';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Play } from '../../components/Play';
import { Vetores } from '../../components/Vetores/index';

export function Home() {
   const videoId = 's9r_fLXbWn4';

   return (
      <Container>
            <Vetores />
            <h1>HOME</h1>
            <h3>Continue assistindo:</h3>

            <Play videoId={videoId}/>

            <div className='division'></div>
            <Section title={'Avisos recentes'}>
               <div className='notice'>
                  <Notice />
                  <Notice />
                  <Button title={"Mural de avisos"}/>
               </div>
            </Section>
      </Container>
   )
}