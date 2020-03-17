import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 40px 20px 0 20px;
`;

export const Header = styled.div`
  font-size: 26px;
  color: ${props => props.theme.mainColor};
  margin-top: 30px;

  ${props =>
    props.upcoming &&
    `
  border-bottom: 1px solid #DDD;
  padding-bottom: 30px;
  margin-bottom: 30px;
  `}
`;

export const BurgerSpan = styled.span`
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;

  background: #cdcdcd;
  border-radius: 3px;

  z-index: 1;

  transform-origin: 4px 0px;

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

  &:first-child {
    transform-origin: 0% 0%;
  }

  &:nth-last-child(2) {
    transform-origin: 0% 100%;
  }
`;

export const Burger = styled.div``;
