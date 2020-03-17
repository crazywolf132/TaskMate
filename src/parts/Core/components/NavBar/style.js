import styled from 'styled-components';

export const Navbar = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  border-bottom: 1px solid #ddd;
  padding: 20px 0;
`;

export const NavItem = styled.div``;

export const NavLabel = styled.div`
    font-weight: 500;
    color: ${props => props.theme.secondaryColor};
    border-bottom: 1px solid: #DDD;
    transition: .4s ease-in;
    padding: 20px 30px;
    cursor: pointer;

    ${props =>
      props.checked &&
      `
    color: ${props.theme.checkboxColor};
    border-bottom: 2px solid ${props.theme.checkboxColor};
    `}
`;

export const Item = styled.input.attrs({type: 'radio'})`
  display: none;
`;
