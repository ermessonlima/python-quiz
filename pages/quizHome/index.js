import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import db from '../../db.json';
import {WidgetPrimary, WidgetSecondary, Header, Content, Topic} from '../../src/components/Widget';
import Input from '../../src/components/Input';
import QuizLogo from '../../src/components/QuizLogo';
import QuizBackground from '../../src/components/QuizBackground';
import Footer from '../../src/components/Footer';
import GitHubCorner from '../../src/components/GitHubCorner';
import Button from '../../src/components/Button';
import Link from '../../src/components/Link';
import useSound from 'use-sound';
import boopSfx from '../../pages/sounds/clicka.mp3';
// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
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

  function handleButtonClick (){

    isChecked ? playOff() : playOn();
  }
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
      <title>
      
          {db.title}
        </title>
      </Head>
      <QuizContainer>
 
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
          <Header>
            <h1>PythonQuiz</h1>
          </Header>
          <Content>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo uma submissão por meio do react');
            }}
            >
                 <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="Diz ai seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0} onClick={handleButtonClick}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Content>
        </WidgetPrimary>

        <WidgetSecondary
        as={motion.section}
        transition={{ delay: 0.5, duration: 0.5 }}
        variants={{
          show: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        initial="hidden"
        animate="show"
      >

    
        </WidgetSecondary>
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
      <GitHubCorner projectUrl="https://github.com/ermessonlima" />
    </QuizBackground>
  );
}
