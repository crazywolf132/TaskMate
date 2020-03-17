import React from 'react';
import {MeetingList} from './style';
import MeetingItemComponent from './MeetingItem';

function MeetingsListComponent() {
  const MeetingMembers = [
    {
      src:
        'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
      name: 'Diego',
    },
    {
      src:
        'https://images.unsplash.com/photo-1476657680631-c07285ff2581?ixlib=rb-1.2.1&auto=format&fit=crop&w=2210&q=80',
      alt: 'member-2',
    },
    {
      src:
        'https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
      alt: 'member-3',
    },
    {
      src:
        'https://images.unsplash.com/photo-1455504490126-80ed4d83b3b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
      alt: 'member-4',
    },
  ];
  const Meetings = [
    {
      id: 0,
      color: 'yellow',
      time: '08:00 - 09:00 AM',
      name: 'Product Review',
      members: MeetingMembers,
    },
    {
      id: 1,
      color: 'blue',
      time: '10:00 - 11:00 AM',
      name: 'Design Meeting',
      members: MeetingMembers,
    },
    {
      id: 2,
      color: 'red',
      time: '01:00 - 02:00 PM',
      name: 'Team Meeting',
      members: MeetingMembers,
    },
    {
      id: 3,
      color: 'green',
      time: '03:00 - 04:00 PM',
      name: 'Release Event',
      members: MeetingMembers,
    },
    {
      id: 4,
      color: 'blue',
      time: '08:00 - 09:00 PM',
      name: 'Release Event',
      members: MeetingMembers,
    },
    {
      id: 5,
      color: 'yellow',
      time: '11:00 - 12:00 PM',
      name: 'Practise',
      members: MeetingMembers,
    },
  ];

  return (
    <MeetingList>
      {Meetings.map(Meeting => (
        <MeetingItemComponent
          id={Meeting.id}
          key={Meeting.id}
          color={Meeting.color}
          time={Meeting.time}
          name={Meeting.name}
          members={Meeting.members}
          onClick={() => {}}
        />
      ))}
    </MeetingList>
  );
}

export default MeetingsListComponent;
