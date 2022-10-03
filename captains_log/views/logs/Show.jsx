const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

// Class Component
class Show extends React.Component {
    render() {

        const { _id, title, entry, shipIsBroken } = this.props.log;

        return (
            <DefaultLayout title={`${title}`} logGroup="logs">
                <body>
                    <h1> Captain's Log: {title} </h1>
                    <p>
                        This log is titled: {title}. Entry: {entry}.
                    </p>
                    <p>
                        {shipIsBroken ? "The ship is broken... :(" : "The ship is NOT broken"}
                    </p>

                    <button>
                        <a href={`/logs/${_id}/edit`}>Edit</a>
                    </button>

                    <form action={`/logs/${_id}?_method=DELETE`} method="POST">
                        <input type="submit" value="Delete"/>
                    </form>

                    <nav>
                        <a href="/logs">Back</a>
                    </nav>
                </body>
            </DefaultLayout>
        );
    }
}

module.exports = Show;