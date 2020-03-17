import styled from 'styled-components';

export const MeetingList = styled.div`
  padding: 10px 40px;
  overflow-y: auto;
  flex: 1;
`;

export const Meeting = styled.div`
  position: relative;
  border-radius: 12px;
  width: 100%;
  margin: 20px 0;
  padding: 16px;
  cursor: pointer;
  box-shadow: 2px 2px 4px 0px rgba(235, 235, 235, 1);

  background-color: ${props => {
    switch (props.color) {
      case 'blue':
        return props.theme.boxColor2;
      case 'red':
        return props.theme.boxColor3;
      case 'green':
        return props.theme.boxColor4;
      case 'yellow':
      default:
        return props.theme.boxColor;
    }
  }};

  :hover {
    transform: scale(1.02);
  }
`;

export const MeetingDescription = styled.div``;

export const MeetingTime = styled.div`
  margin-bottom: 6px;
  opacity: 0.4;
  font-size: 10px;
`;

export const MeetingName = styled.div`
  font-size: 14px;
  font-weight: 500;
  opacity: 0.6;
`;

export const MoreButton = styled.div`
  position: absolute;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: #8E92A4;
  box-shadow 0 -4px 0 0 #8E92A4, 0 4px 0 0 #8E92A4;
  opacity: 0.4;
  right: 20px;
  top: 30px;
  cursor: pointer;
`;

export const MeetingMembers = styled.div`
  display: flex;
  margin-top: 14px;
`;

export const MemberImage = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-right: 4px;
  object-fit: cover;
`;
