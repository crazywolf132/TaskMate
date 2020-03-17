import styled from 'styled-components';

export const MainStyle = styled.div`
  width: 320px;
  border-left: 1px solid #e3e7f7;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  font-size: 20px;
  color: ${props => props.theme.mainTextColor};
  margin-left: 30px;
`;
