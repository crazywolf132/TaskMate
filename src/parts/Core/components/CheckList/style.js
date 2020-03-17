import styled from 'styled-components';

export const CheckList = styled.div`
  padding: 30px 0;
  flex: 1;
  overflow-y: auto;
  height: 100%;
  padding-right: 8px;
`;

export const Task = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 16px;
  padding-left: 30px;
  color: ${props => props.theme.taskColor};
  font-size: 13px;
  font-weight: 500;

  &:hover {
    transform: translatex(2px);
  }
`;

export const TaskInfo = styled.label``;

export const TaskLabel = styled.span`
  cursor: pointer;
  position: relative;

  ${TaskInfo} &:before {
    content: '';
    position: absolute;
    border-radius: 100%;
    width: 14px;
    height: 14px;
    border: 2px solid #ddd;
    // border-radius: 2px;
    left: -24px;
    transition: 0.2s ease;
  }
`;

export const TaskItem = styled.input.attrs({type: 'checkbox'})`
  display: none;

  &:checked + ${TaskInfo} ${TaskLabel}:before {
    background-color: ${props => props.theme.checkboxColor};
    border-radius: 100%;
    border: none;
    // background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpolyline points='20 6 9 17 4 12' /%3E%3C/svg%3E");
    // background-image: url('https://www.svgrepo.com/show/43432/tick.svg');
    background-repeat: no-repeat;
    background-size: 10px;
    background-position: center;
    border: 1px solid ${props => props.theme.checkboxColor};
  }
`;

export const TaskTag = styled.span`
  font-size: 10px;
  padding: 4px;
  border-radius: 20px;

  ${props => {
    switch (props.status) {
      case 'approved':
        return `
                        background-color: ${props.theme.tagColorOne};
                        color: ${props.theme.tagColorTextOne};
                        `;
      case 'progress':
        return `
                        background-color: ${props.theme.tagColorTwo};
                        color: ${props.theme.tagColorTextTwo};
                        `;
      case 'review':
        return `
                        background-color: ${props.theme.tagColorThree};
                        color: ${props.theme.tagColorTextThree};
                        `;
      case 'waiting':
      default:
        return `
                        background-color: ${props.theme.tagColorFour};
                        color: ${props.theme.tagColorTextFour};
                        `;
    }
  }}
`;
