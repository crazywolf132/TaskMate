import styled from 'styled-components';

export const CategoryList = styled.ul`
  margin-top: 50px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
  font-weight: 500;

  ${props =>
    !props.active &&
    `&:hover {
      background-color: #ddd;
      padding: 6px 12px 6px 16px;
      border-radius: 50px;
      transition: 0.2s ease;
      cursor: pointer
  }`}

  ${props =>
    props.active &&
    `
  background-color: ${props.theme.tagColorOne};
  padding: 6px 12px 6px 16px;
    border-radius: 50px;
    transition: 0.2s ease;`}
`;

export const CategoryItem = styled(Item)`
  color: ${props => props.theme.secondaryColor};
`;

export const CategorySVG = styled.div`
  width: 14px;
  height: 14px;
  color: currentcolor;
  margin-right: 10px;
`;
