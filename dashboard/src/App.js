import './App.css'
import Data from './components/Data';
import Sidebar from './components/Sidebar';
import Reviews from './components/Reviews';
import AvgRating from './components/AverageRating';
import SentimentAnalysis from './components/SentimentAnalysis';
import WebsiteVisitors from './components/WebsiteVisitors';

function App() {
  return (
    <div className='container'>
      <div className="App">
        <div id='display-sidebar'><Sidebar /></div>
        <div id='display-reviews'><Reviews reviews={Data.Reviews}/></div>
        <div id='display-avgRating'><AvgRating avgRating={Data.avgRating}/></div>
        <div id='display-SA'><SentimentAnalysis saScores={Data.saScores}/></div>
        <div id='display-visitors'><WebsiteVisitors visitors={Data.Visitors}/></div>
      </div>
    </div>
  );
}

export default App;
