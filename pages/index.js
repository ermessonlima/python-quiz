import React from 'react';
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
import GitHubCorner from '../src/components/GitHubCorner';
import Button from '../src/components/ButtonHome';
import Link from '../src/components/Link';

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

  return (
<>
    <GitHubCorner projectUrl="https://github.com/ermessonlima" />
       
    <QuizBackground backgroundImage={''}>
      <Head>
      <title>
          AluraQuiz -
          {db.title}
        </title>
      </Head>
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
       
       <Content>
          </Content>
          
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
              <Button className="button" type="submit" >
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
      
    </QuizBackground>
    
    </>
  );
}
