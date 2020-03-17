import styled from 'styled-components';

export const TopPart = styled.div`
  padding: 30px;
  align-self: flex-end;

  display: flex;
  align-items: center;
`;

export const NotificationCount = styled.div`
  font-size: 12px;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  background-color: #623ce8;
  color: #fff;
  justify-content: center;

  display: flex;
  align-items: center;
`;

export const ProfilePic = styled.svg`
  width: 14px;
  hieght: 14px;
  color: ${props => props.theme.mainColor};
  margin-right: 14px;
`;
