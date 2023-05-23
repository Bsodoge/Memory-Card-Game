const ScoreBoard = ({topScore, currentScore}) => {
    return (
        <div className="scoreBoard">
            <div>Top score: {topScore}</div>
            <div>Current score: {currentScore}</div>
        </div>
    )
}

export default ScoreBoard;