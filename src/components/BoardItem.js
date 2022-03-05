import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles/BoardItem.css';

function BoardItem(props) {
    const { user } = props;
    const answersCount = Object.keys(user.answers).length;
    const questionsCount = user.questions.length;

    return (
        <div className="board-item">
            <div className="board-item-avatar">
                {props.rank < 4 && <span className={`top rank-${props.rank}`}>{props.rank}</span>}
                <img src={user.avatarURL} alt={user.name} className="avatar"/>
            </div>
            <div className="board-info">
                <h2 className="name">{user.name}</h2>
                <div className="stat"><span>Answered questions:</span><span>{answersCount}</span></div>
                <hr/>
                <div className="stat"><span>Created questions:</span><span>{questionsCount}</span></div>
            </div>
            <div className="board-score">
                <div className="score-label">
                    <span>Score</span>
                </div>
                <div className="score-value">
                    <div className='circle'>{answersCount + questionsCount}</div>
                </div>
            </div>
        </div>
    );
}

BoardItem.propTypes = {
    id: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired
};

export default connect(({ users }, { id }) => ({
    user: users[id]
}))(BoardItem);