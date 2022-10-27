import NavBar from "../components/NavBar";
import SearchForJokes from "../components/SearchForJokes";

export default function SearchJoke() {

    // const searchApi = `https://icanhazdadjoke.com/search?term=${searchTerm}`;

    return (
        <div>
            <NavBar />
            <SearchForJokes />
        </div>
    )
}