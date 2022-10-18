function AvgRating(props) {
    return (
        <div className="avgRating">
            <h3>Average Rating</h3>
            <h1>{props.avgRating}</h1>
        </div>

    )
}

export default AvgRating;