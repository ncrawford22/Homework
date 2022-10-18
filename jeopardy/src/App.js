import { useState } from 'react';
import './App.css';
import GetQuestion from './components/GetQuestion';
import Header from './components/Header';
import Info from './components/Info';
import RevealAnswer from './components/RevealAnswer';
import Score from './components/Score';


function App() {

  let [question, setQuestion] = useState("");


  const getQuestion = async () => {
    const response = await fetch('http://jservice.io/api/random')
    const data = await response.json()
    setQuestion(data)
}

  return (
    <div className='container'>
      <div className="App">
        <Header/>
        <Score question={question}/>
        <GetQuestion getQuestion={getQuestion}/>
        <Info question={question}/>
        <RevealAnswer question={question}/>
      </div>
    </div>
  );
}

export default App;
