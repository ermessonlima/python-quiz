// src/components/QuizBackground/index.js
import styled from 'styled-components';

const QuizBackground = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-color: #000;
  flex: 1;
  display:flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 500px) {
    background-image: none;
    &:after {
      content: "";
      background-size: cover;
    background-position: center;
      background-image:none;
      display: block;
      width: 100%;
      height: 210px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
  @media (max-width:600px){
    flex-direction: column;
  }
 
  @media screen and (max-width: 505px) {
    background-image: none;
  }
  @media (max-width:400px){
    background-image: none;
  }
`;

export default QuizBackground;
