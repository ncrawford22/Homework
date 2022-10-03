const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class Index extends React.Component {
    render() {
        const { logs } = this.props;
        return (
            <DefaultLayout title="Logs Index " logGroup="logs">
                <body>
                    <h1>Captain's Log Index Page</h1>
                    <ul id="logs-index">
                        {logs.map((log) => {
                            return (
                                <li key={log._id}>
                                    Creation Date: {log.createdAt.toLocaleDateString()}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href={`/logs/${log._id}`}>{log.title}</a> Log.

                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Edited on: {log.updatedAt.toLocaleDateString()}
                                </li>
                            )
                        })}
                    </ul>

                    <nav>
                            <a href="logs/new">Create a new log</a>
                    </nav>
                </body>
            </DefaultLayout>
        );
    }
}

module.exports = Index;