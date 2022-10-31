import NavBar from "../components/NavBar";

export default function Home() {
    
    return (
        <div>
            <NavBar />
            <h1 className="homeH1">We Have Jokes For Days!</h1>
            <div className="halloween">
                <h2>Happy Halloween!</h2>
                <img src="../halloweengif.gif" alt="halloween"></img>
            </div>
            
        </div>
    )
}