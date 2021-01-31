import styled from 'styled-components';

// src/components/Footer/index.js
const FooterWrapper = styled.footer`
background-color: #ffffff10;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 10px; 
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
  @media screen and (max-width: 505px) {
    margin-top: 203px;
    margin-bottom: -110px;
  }

`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
    <a target="_blank" href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante
        {' '}
        a
        {' '}
        <a target="_blank" href="https://www.alura.com.br/">
          <span>Imersão React da Alura</span>
        </a>
      </p>
    </FooterWrapper>
  );
}
