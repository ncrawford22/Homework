import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/dadjokes">Dad Jokes</Link>
            </li>
            <li>
                <Link to="/searchdadjokes">Search Dad Jokes</Link>
            </li>
            <li>
                <Link to="/yomamajokes">Yo Mama Jokes</Link>
            </li>
        </ul>
    )
}