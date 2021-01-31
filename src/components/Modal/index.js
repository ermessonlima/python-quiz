import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import React , {useState} from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
        position:fixed;
        left:0;
        top:0;
        right:0;
        bottom:0;
        z-index:90;
        background-color: rgba(0,0,0,0.7);
        display:flex;
        justify-content:center;
        align-items:center;`;

        const ModalArea = styled.div`
        background-color: rgba(0,0,0,0.8);
        padding:10px;
        width: 400px;
        height:500px;
        -webkit-box-shadow: -2px -2px 18px 6px rgba(76,149,212,1);
        -moz-box-shadow: -2px -2px 18px 6px rgba(76,149,212,1);
        box-shadow: -2px -2px 18px 6px rgba(76,149,212,1);

      `;

function Modal(props){
    const handleBackgroundClick = () =>{
        props.setVisible(false);
    }
    return (

        <>
        {props.visible === true && 
        
        <ModalBackground onClick={handleBackgroundClick}>
        <ModalArea>
        {props.children}
        </ModalArea>
    
    </ModalBackground>
}
        </>
        
    )
}
export default Modal;