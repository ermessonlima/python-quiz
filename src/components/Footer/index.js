import styled from 'styled-components';

// src/components/Footer/index.js
const FooterWrapper = styled.footer`
  background-color: #00000070;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px; 
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
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
    <a target="_blank" href="https://www.instagram.com/ermesson_lima">
        <img src="https://avatars.githubusercontent.com/u/59540379?s=60&v=4" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado para o curso de Python
        {' '}
        
     
    
  
      </p>
    </FooterWrapper>
  );
}
