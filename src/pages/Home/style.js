import styled from 'styled-components';

export const TaskManager = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'DM Sans', sans-serif;
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0.3px 2.2px rgba(0, 0, 0, 0.011),
    0 0.7px 5.3px rgba(0, 0, 0, 0.016), 0 1.3px 10px rgba(0, 0, 0, 0.02),
    0 2.2px 17.9px rgba(0, 0, 0, 0.024), 0 4.2px 33.4px rgba(0, 0, 0, 0.029),
    0 10px 80px rgba(0, 0, 0, 0.04);
  overflow: hidden;
`;

export const LeftBar = styled.div`
  background-color: ${props => props.theme.bgColor};
  width: 230px;
  border-right: 1px solid #e3e7f7;
  position: relative;
`;

export const mainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 40px 20px 0 20px;

  .header {
    font-size: 26px;
    color: ${props => props.theme.mainColor};
    margin-top: 30px;
  }
`;

export const RightBar = styled.div`
  width: 320px;
  border-left: 1px solid #e3e7f7;
  display: flex;
  flex-direction: column;

  .header {
    font-size: 20px;
    color: ${props => props.theme.mainTextColor};
    margin-left: 30px;
  }
`;

export const LeftContent = styled.div`
  padding: 40px;
`;

export const sideItem = styled.li`
  color: ${props => props.theme.mainColor};
  margin-bottom: 14px;
  font-weight: 500;
`;

export const sideItemSvg = styled(sideItem)`
  svg {
    width: 14px;
    height: 14px;
    margin-right: 10px;
  }
`;
