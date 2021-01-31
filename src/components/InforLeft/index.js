import styled from 'styled-components';

// src/components/Footer/index.js
const FooterWrapper = styled.footer`
  background-color: #ffffff10;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 10px; 
  position: fixed;
  height: 626px;
  max-width: 300px;
  margin-right:1000px;
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
  @media (max-width:500px){
    &:hover .octo-arm{
      animation:none
    }
    & .octo-arm{
      animation:octocat-wave 560ms ease-in-out
    }
  }
  @media screen and (max-width:1300px) {

    margin-left: 100px;
  }
  @media screen and (max-width:1100px) {

    margin-left: 200px;
  }
  @media screen and (max-width:1000px) {

    margin-left: 400px;
  }
  @media screen and (max-width:825px) {

    display:none;
  }
  @media screen and (max-width: 600px) {

    display:none;
  }

`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
 
    
      <p align="justify">
      <h1>QuizPython </h1>
      
        O quiz é composto por 5 perguntas de mútiplas escolha, com tempo Indeterminado.<br/>
        <br/>
     
       Caso erre a questão, o participante terá que jogar novamente, caso queira aumentar sua pontuação.
       <br/>
       <br/>
      Portanto, é um jogo na qual o participante tem o intuito de aprender jogando.
      </p>
    </FooterWrapper>
  );
}
