import styled from 'styled-components';

export const WidgetPrimary = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 0px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;
  -webkit-box-shadow: -2px -2px 18px 6px rgba(76,149,212,1);
  -moz-box-shadow: -2px -2px 18px 6px rgba(76,149,212,1);
  box-shadow: -2px -2px 18px 6px rgba(76,149,212,1);

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