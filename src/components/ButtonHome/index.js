import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`

  min-width: 300px;
  min-height: 60px;
  
  font-family: 'Nunito', sans-serif;
  font-size: 22px;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-weight: 700;
  color: #ffffff;
  background: ${({ theme }) => theme.colors.third};
  border: none;
  border-radius: 1000px;
  box-shadow: 12px 12px 24px ${({ theme }) => theme.colors.third};
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: absolute;



button::before {
content: '';
  border-radius: 1000px;
  min-width: calc(300px + 12px);
  min-height: calc(60px + 12px);
  border: 6px solid ${({ theme }) => theme.colors.third};
  box-shadow: 0 0 60px ${({ theme }) => theme.colors.third};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all .3s ease-in-out 0s;
}

hover, focus {
  color: #313133;
  transform: translateY(-6px);
}

hover::before, focus::before {
  opacity: 1;
}

:after {
  content: '';
  width: 30px; height: 30px;
  border-radius: 100%;
  border: 6px solid ${({ theme }) => theme.colors.third};
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
@media screen and (max-width: 484px) {
margin-left:-35px;
margin-top:250px;
  
}
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;