function SentimentAnalysis(props) {
    return (
        <div>
            <div className="saScores">
                <h2>Sentimental Analysis</h2>
                <h2>{props.saScores.Positive}</h2>
                <h2>{props.saScores.Neutral}</h2>                
                <h2>{props.saScores.Negative}</h2>                                
           </div>
        </div>
    )
}

export default SentimentAnalysis;