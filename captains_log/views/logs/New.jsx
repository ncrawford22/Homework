const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="New Log" logGroup="logs">
                <body>
                    <h1>New Page</h1>
                    <form action="/logs" method="POST">
                        <label htmlFor='title'>Title: </label>
                        <input type="text" id="title" name="title"/>

                        <label htmlFor="textarea">Entry: </label>
                        <input type="textarea" id="entry" name="entry"/>

                        <label htmlFor="shipIsBroken">The Ship Is Broken</label>
                        <input type="checkbox" id="shipIsBroken" name="shipIsBroken" defaultChecked={true}/>

                        <input type="submit" value="Create Log"/>
                    </form>
                </body>
            </DefaultLayout>
        )
    }
}

module.exports = New;