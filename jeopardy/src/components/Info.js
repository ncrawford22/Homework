export default function Info({question}) {
    let questionData = question[0]

    const loaded = () => {
        return (
            <div className="container">
                <h3 className="infoLabel">Category: <span className="infoSpan">{questionData.category.title}</span></h3>
                <h3 className="infoLabel">Points: <span className="pointsSpan">${questionData.value}</span></h3>
                <h3 className="infoLabel">Question: <span className="questionSpan">{questionData.question}</span></h3>
            </div>
        )
    }
    const loading = () => {
        return (
            <div className="container">
                <h3 className="infoLabel">Category: </h3>
                <h3 className="infoLabel">Points: </h3>
                <h3 className="infoLabel">Question: </h3>
            </div>
        )
    }

    return question ? loaded() : loading()
}