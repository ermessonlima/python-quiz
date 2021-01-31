import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import db from '../db.json';
import {WidgetPrimary, Header, Content, Topic, WidgetButton, WidgetFooter} from '../src/components/WidgetHome';
import Input from '../src/components/Input';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackgroundHome';
import Footer from '../src/components/FooterHome';
import InforLeft from '../src/components/InforLeft';
import ButtonInfor from '../src/components/ButtonInfor';
import ButtonSound from '../src/components/ButtonSound';
import Button from '../src/components/ButtonHome';
import Link from '../src/components/Link';
import useSound from 'use-sound';
import boopSfx from './sounds/clicka.mp3';
import musics from './sounds/Music.mp3';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 0px;
  margin: auto 10%;
  @media screen and (max-width: 600px) {
    margin: auto;
    padding: 15px;
    position:absolute;
  }
  @media screen and (max-width: 1100px) {
    margin: auto;
    padding: 15px;
    position:absolute;
  }

`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  const [isChecked, setIsChecked] = React.useState(true);


  const [playOn] = useSound(
    boopSfx,
    { volume: 0.25 }
  );
  const [playOff] = useSound(
    boopSfx,
    { volume: 0.25 }
  );

function playSound (){
 if (isChecked == false){
    playOn();
  }else {
    playOff();
  }
};



  return (
    
<>

  

    

    
    <QuizBackground backgroundImage={'https://i.ibb.co/2cm3Tk4/background.png'}>


    <InforLeft 
          as={motion.footer}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        />

      <QuizContainer>
        <QuizLogo />

        
        <WidgetPrimary 
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
       
       <img src="https://i.pinimg.com/originals/39/21/66/3921660807b88290cace73460abb1deb.jpg" alt="Logo" style={{marginLeft:-790, marginTop:-300}}/>;
          
        </WidgetPrimary>
        
        <WidgetButton
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
       
       <Content>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
             router.push(`/quizHome`);
            

            }}
            >  
           
              <div class="wrap">
              <Button className="button" type="submit" onClick={() => {
              isChecked ? playOff() : playOn();
              }} >
                {`Start`}
              </Button>
              </div>


            </form>
          </Content>
        </WidgetButton>


   
        <Footer
          as={motion.footer}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        />

      
      </QuizContainer>
      <ButtonInfor  />
      <ButtonSound />
    </QuizBackground>
    
    </>
  );
}
