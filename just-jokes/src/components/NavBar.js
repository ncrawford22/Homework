import { Link, useLocation } from "react-router-dom";

export default function NavBar() {

    const location = useLocation();
    
    if (location.pathname === "/") {
        return (

            <ul>
                <li>
                    <Link to="/dadjokes">Dad Jokes</Link>
                </li>
                <li>
                    <Link to="/searchjokes">Search Dad Jokes</Link>
                </li>
                <li>
                    <Link to="/yomamajokes">Yo Mama Jokes</Link>
                </li>
        </ul>
        )
    } else if (location.pathname === "/dadjokes") {
        return (
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/searchjokes">Search Dad Jokes</Link>
                </li>
                <li>
                    <Link to="/yomamajokes">Yo Mama Jokes</Link>
                </li>
        </ul>
        )
    } else if (location.pathname === "/searchjokes") {
        return (
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/dadjokes">Dad Jokes</Link>
                </li>
                <li>
                    <Link to="/yomamajokes">Yo Mama Jokes</Link>
                </li>
        </ul>
        )
    } else {
        return (
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/dadjokes">Dad Jokes</Link>
                </li>
                <li>
                    <Link to="/searchjokes">Search Dad Jokes</Link>
                </li>
        </ul>
        )
    }
        
}