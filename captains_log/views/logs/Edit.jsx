const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class Edit extends React.Component {
    render() {

        const { _id, title, entry, shipIsBroken } = this.props.log;

        return (
            <DefaultLayout title={`Edit ${title}`} logGroup="logs">
                <h1>Edit Log Page</h1>
                <form action={`/logs/${_id}?_method=PUT`} method="POST">
                    <label htmlFor='title'>Title: </label>
                    <input type="text" id="title" name="title" defaultValue={title}/>

                    <label htmlFor="textarea">Entry: </label>
                    <input type="textarea" id="entry" name="entry" defaultValue={entry}/>

                    <label htmlFor="shipIsBroken">Is the Ship Broken? </label>
                    <input type="checkbox" id="shipIsBroken" name="shipIsBroken" defaultChecked={shipIsBroken}/>

                    <input type="submit" value="Edit Log"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = Edit;