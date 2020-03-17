import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {
  Meeting,
  MeetingDescription,
  MeetingTime,
  MeetingName,
  MoreButton,
  MeetingMembers,
  MemberImage,
} from './style';

function MeetingItemComponent(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const {color, time, members, name} = props;
  return (
    <Meeting color={color}>
      <MeetingDescription>
        <MeetingTime>{time}</MeetingTime>
        <MeetingName>{name}</MeetingName>
      </MeetingDescription>
      <MoreButton onClick={event => setAnchorEl(event.currentTarget)} />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}>
        <MenuItem onClick={() => setAnchorEl(null)}>Delete</MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>Edit</MenuItem>
      </Menu>
      <MeetingMembers>
        {members.map(member => (
          <MemberImage src={member.src} alt={member.name} />
        ))}
      </MeetingMembers>
    </Meeting>
  );
}

MeetingItemComponent.propTypes = {
  color: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  members: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
};

export default MeetingItemComponent;
