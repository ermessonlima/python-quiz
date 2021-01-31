// src/components/GitHubCorner/index.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { WidgetInfor} from '../WidgetHome';
import { motion } from 'framer-motion';

import Modal from '../Modal';
import useSound from 'use-sound';
import boopSfx from '../../../pages/sounds/clicka.mp3';
import music from '../../../pages/sounds/Music.mp3';

const Wrapper = styled.div`

  top: 0;
  border: 0;
  display:flex;
  z-index: 0;
 margin-top: -450px;
 margin-left: 185px;
 margin-right: -225px;

  img {
    border: 3px solid #ffffff;
  }
  @media screen and (max-width: 600px) {
    margin: auto;
    margin-left: 320px;
    margin-top: 50px;
    padding: 15px;
    position:absolute;
  }
  @media screen and (max-width: 505px) {
    margin: auto;
    margin-left: 310px;
    margin-top: 250px;
    padding: 15px;
    position:absolute;
  }
  
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
export default function ButtonSound({ projectUrl }) {

  const [modalVisible, setModalVisible] = useState(false);
  const [isChecked, setIsChecked] = React.useState(true);
  const [isCheckedMusic, setIsCheckedMusic] = React.useState(true);
  const [imgSound, seimgSound] = React.useState('https://i.ibb.co/L96CF80/188-1885776-audio-volume-no-sound-output-error-mute-svg.jpg');

  const ativado ='https://i.ibb.co/L96CF80/188-1885776-audio-volume-no-sound-output-error-mute-svg.jpg';









const [playOnMusic] = useSound(
  music,
  { volume: 0.0 }
);
const [playOffMusic, { stop }] = useSound(
  music,
  { volume: 10 }
);


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
    if(isCheckedMusic == true){
      
      playOffMusic()
      setIsCheckedMusic(false)
    
    }else{
      stop()
      setIsCheckedMusic(true)
    }

    if(imgSound == ativado){
      seimgSound('https://cdn4.iconfinder.com/data/icons/media-controls-4/100/volume-up-512.png')
    }else{
    seimgSound('https://i.ibb.co/L96CF80/188-1885776-audio-volume-no-sound-output-error-mute-svg.jpg')
      
    }
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
              <img src={imgSound} style={{height:60, width:60, borderRadius: "50%"}} />
               
              </button>
              </div>


        </WidgetInfor>

           

    </Wrapper>
  );
}
