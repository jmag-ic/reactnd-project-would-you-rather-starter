import { React } from 'react';
import PropTypes from 'prop-types';
import QuestionItem from './QuestionItem';
import '../styles/QuestionList.css';

function QuestionList(props) {
console.log(props.questions);
    function sortQuestions(questions) { return questions.sort((a, b) => b.timestamp - a.timestamp) }

    return props.questions.length > 0 
    ? sortQuestions(props.questions).map(
        question => <QuestionItem key={question.id} question={question}/>
    )
    : (
        <div className="empty-list">
            <span>Empty list</span>
        </div>)
    ;
}

QuestionList.propTypes = {
    questions: PropTypes.array.isRequired
};

export default QuestionList;