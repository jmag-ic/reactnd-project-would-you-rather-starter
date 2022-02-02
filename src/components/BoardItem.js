import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function BoardItem(props) {
    const { user } = props;
    const answersCount = Object.keys(user.answers).length;
    const questionsCount = user.questions.length;

    return (
        <div className="board-item">
            <div className="board-item-avatar"></div>
            <div className="board-info">
                <h2>{user.name}</h2>
                <p>Answered questions: {answersCount}</p>
                <p>Created questions: {questionsCount}</p>
            </div>
            <div className="board-score">
                <h3>Score</h3>
                <p>{answersCount + questionsCount}</p>
            </div>
        </div>
    );
}

BoardItem.propTypes = {
    id: PropTypes.string.isRequired
};

export default connect(({ users }, { id }) => ({
    user: users[id]
}))(BoardItem);