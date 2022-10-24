import './App.css';
import Header from './components/Header';
import SwAPI from './services/sw-api';

function App() {

    return (
        <div className='App'>
            <Header />
            <SwAPI />
        </div>
    )
}

export default App;