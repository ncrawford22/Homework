function WebsiteVisitors(props) {
    return (
        <div className="visitors">
            <h3>Website Visitors</h3>
            <h1>{props.visitors}</h1>
            <div className="blank-square"></div>
        </div>

    )
}

export default WebsiteVisitors;