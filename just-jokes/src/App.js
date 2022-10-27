import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RandomDadJokes from './pages/RandomDadJokes';
import getRandomDadJoke from './pages/RandomDadJokes'
import YoMamaJokes from './pages/YoMamaJokes';
import SearchForJokes from './components/SearchForJokes';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home />
          }
        />
        <Route
          path="/dadjokes"
          element={
            <RandomDadJokes 
            
            getRandomDadJoke={getRandomDadJoke}
            />
          }
        />
        <Route
          path="/searchjokes"
          element={
            <SearchForJokes 
            />
          }
        />
        <Route
          path="/yomamajokes"
          element={
            <YoMamaJokes />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
