import './App.css';
import Landing from './components/landing';
import Sentiment_Visual from './components/sentiment_visual';
import Sidebar from './components/side_menu';


function App() {
  return (
    <div className="App">
        <div className="container mx-auto p-4">
          <div className="w-full md:w-1/2 mx-auto">
            <Landing />
            <Sentiment_Visual />
            <Sidebar/>
          </div>
        </div>
    </div>
  );
}

export default App;
