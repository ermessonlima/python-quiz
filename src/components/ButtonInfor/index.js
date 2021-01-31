// src/components/GitHubCorner/index.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { WidgetInfor} from '../WidgetHome';
import { motion } from 'framer-motion';

import Modal from '../Modal';
import useSound from 'use-sound';
import boopSfx from '../../../pages/sounds/clicka.mp3';


const Wrapper = styled.div`

  top: 0;
  border: 0;
  display:flex;
  z-index: 20;
 margin-top: -620px;
 margin-left: 135px;
 margin-right: -185px;
`;

const SVGWrapper = styled.svg`
  fill: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
  cursor: pointer;
  &:hover .octo-arm{
    animation:octocat-wave 560ms ease-in-out
  }
  @keyframes octocat-wave{
    0%,100%{transform:rotate(0)}
    20%,60%{transform:rotate(-25deg)}
    40%,80%{transform:rotate(10deg)}
  }
  @media (max-width:500px){
    &:hover .octo-arm{
      animation:none
    }
    & .octo-arm{
      animation:octocat-wave 560ms ease-in-out
    }
  }
`;



// eslint-disable-next-line react/prop-types
export default function ButtonInfor({ projectUrl }) {

  const [modalVisible, setModalVisible] = useState(false);
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
    setModalVisible(true)

    isChecked ? playOff() : playOn();
  }
  
  return (
    <Wrapper>
        <WidgetInfor
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
       
      
              <div class="wrap">
              <button className="button" onClick={handleButtonClick}>
              <img src="https://img.freepik.com/free-icon/info-logo-circle_318-947.jpg?size=338&ext=jpg" style={{height:60, width:60, borderRadius: "50%",}} />
               
              </button>
              </div>


        </WidgetInfor>

            <Modal  visible ={modalVisible} setVisible={setModalVisible}>
              
            <h1>INSTRUTORES NESSA IMERSÃO</h1>
            <p style={{color:'#00d8f3', fontSize:25}}>Mario Souto, DevSoutinho</p>
            <p>instrutor da Alura, engenheiro Nubank</p>
            <p style={{color:'#00d8f3', fontSize:25}}>Juliana Amoasei</p>
            <p>dev e coordenadora da Alura</p>
            <p style={{color:'#00d8f3', fontSize:25}}>Paulo Silveira</p>
            <p>CEO da Alura</p>
        <div style={{  justifyContent:'center', display:'flex'}}>
            <button className="button" onClick={handleButtonClick} style={{width:120, height: 45, borderRadius: 15, background: '#4FD1C5'}}>
              <p style={{color:'#ffffff', fontWeight:'bold' }}>Fechar</p>          
              </button>
            </div>
            </Modal>


    </Wrapper>
  );
}
