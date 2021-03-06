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
 @media screen and (max-width: 505px) {
  margin-top: -520px;
  margin-right: -125px;
}
@media (max-width:400px){
  
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
              
            <h1>INSTRUTORES DE PYTHON</h1>
            <p style={{color:'#00d8f3', fontSize:25}}>GUILHERME</p>
            <p>PROFESSOR E ORIENTADOR</p>
            <p style={{color:'#00d8f3', fontSize:25}}>Ermesson Lima</p>
            <p>Cursando Sistemas de Informação</p>
            <p style={{color:'#00d8f3', fontSize:25}}>Karol Monteiro</p>
            <p>Cursando Engenharia de produção</p>
        
        <div style={{  justifyContent:'center', display:'flex'}}>
            <button className="button" onClick={handleButtonClick} style={{width:120, height: 45, borderRadius: 15, background: '#4FD1C5'}}>
              <p style={{color:'#ffffff', fontWeight:'bold' }}>Fechar</p>          
              </button>
            </div>
            </Modal>


    </Wrapper>
  );
}
