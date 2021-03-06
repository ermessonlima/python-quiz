import styled from 'styled-components';

export const WidgetPrimary = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;
  -webkit-box-shadow: -2px -2px 18px 6px rgba(76,149,212,1);
  -moz-box-shadow: -2px -2px 18px 6px rgba(76,149,212,1);
  box-shadow: -2px -2px 18px 6px rgba(76,149,212,1);

  width:350px;
  height: 350px;
  border-radius: 50%;

 
 

  @keyframes loading {
    0% {
      transform: rotate(5);
    }
    50% {
      transform: rotate(5deg);
    }
    50% {
      transform: rotate(-2deg);
    }
  }

animation: loading 2s linear infinite;




@media screen and (max-width: 505px) {
  width:330px;
  height: 330px;
  position: absolute;
  margin-top: -150px;
}
`;

export const WidgetButton = styled.div`

position:absolute;
margin-top: -150px;
  @keyframes loading {
    0% {
      transform: rotate(5);
    }
    50% {
      transform: rotate(5deg);
    }
    50% {
      transform: rotate(-2deg);
    }
  }

animation: loading 2s linear infinite;
`;

export const WidgetFooter = styled.div`
.wrap {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button {
  min-width: 100%;
  min-height: 60px;
  font-family: 'Nunito', sans-serif;
  font-size: 22px;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-weight: 700;
  color: #313133;
  background: #4FD1C5;
background: linear-gradient(90deg, rgba(129,230,1,1) 0%, rgba(79,209,197,1) 100%);
  border: none;
  border-radius: 1000px;
  box-shadow: 12px 12px 24px rgba(79,209,197,.64);
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 10px;
  }

button::before {
content: '';
  border-radius: 1000px;
  min-width: calc(300px + 12px);
  min-height: calc(60px + 12px);
  border: 6px solid #00FFCB;
  box-shadow: 0 0 60px rgba(0,255,203,.64);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all .3s ease-in-out 0s;
}

.button:hover, .button:focus {
  color: #313133;
  transform: translateY(-6px);
}

button:hover::before, button:focus::before {
  opacity: 1;
}

button::after {
  content: '';
  width: 30px; height: 30px;
  border-radius: 100%;
  border: 6px solid #00FFCB;
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ring 1.5s infinite;
}

button:hover::after, button:focus::after {
  animation: none;
  display: none;
}

@keyframes ring {
  0% {
    width: 30px;
    height: 30px;
    opacity: 1;
  }
  100% {
    width: 300px;
    height: 300px;
    opacity: 0;
  }
}

  @keyframes loading {
    0% {
      transform: rotate(5);
    }
    50% {
      transform: rotate(5deg);
    }
    50% {
      transform: rotate(-2deg);
    }
  }

animation: loading 2s linear infinite;
`;


export const WidgetInfor = styled.div`

position:absolute;


width: 60px;
  height: 60px;
.button {
  width: 60px;
  height: 60px;
  background:none;
  
  border: none;
  border-radius: 50%;
  box-shadow: 12px 12px 24px rgba(79,209,197,.64);
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  
  align-items: center;
  justify-content: center;
  }

button::before {
content: '';
  border-radius: 50%;
  min-width: calc(60px + 12px);
  min-height: calc(60px + 12px);

  box-shadow: 0 0 60px rgba(0,255,203,.64);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all .3s ease-in-out 0s;
}

.button:hover, .button:focus {
  color: #313133;
  transform: translateY(-6px);
}

button:hover::before, button:focus::before {
  opacity: 1;
}


button:hover::after, button:focus::after {
  animation: none;
  display: none;
}

@keyframes ring {
  0% {
    width: 30px;
    height: 30px;
    opacity: 1;
  }
  100% {
    width: 60px;
    height: 60px;
    opacity: 0;
  }
}

  @keyframes loading {
    0% {
      transform: rotate(5);
    }
    50% {
      transform: rotate(5deg);
    }
    50% {
      transform: rotate(-2deg);
    }
  }

animation: loading 2s linear infinite;
`;

export const WidgetSecondary = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 0px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;
  -webkit-box-shadow: -2px -2px 18px 6px rgba(75,214,91,1);
  -moz-box-shadow: -2px -2px 18px 6px rgba(75,214,91,1);
  box-shadow: -2px -2px 18px 6px rgba(75,214,91,1);

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  * {
    margin: 0;
  }
`;

export const Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;



export const Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;
  
  &:hover,
  &:focus {
    opacity: .5;
  }
`;