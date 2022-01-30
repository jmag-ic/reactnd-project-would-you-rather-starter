import React from 'react';
import { connect } from 'react-redux';
import QuestionItem from './QuestionItem';

function Home(props) {
  return (
    <div>
      {Object.values(props.questions).map(question => <QuestionItem key={question.id} question={question}/>)}
    </div>
  );
}

export default connect(({ questions })=>({
  questions
}))(Home);