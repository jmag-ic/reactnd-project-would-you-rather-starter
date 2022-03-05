import React from 'react';
import { connect } from 'react-redux';
import BoardItem from './BoardItem';

function LeaderBoard(props) {
  return props.users.map((user, index) => 
    <BoardItem key={user.id} id={user.id} rank={index + 1}/>
  );
}


export default connect(({ users }) => ({
  users: Object.values(users).sort((a, b) => {
    const aScore = Object.keys(a.answers).length + a.questions.length;
    const bScore = Object.keys(b.answers).length + b.questions.length;
    return bScore - aScore;
  })
}))(LeaderBoard);