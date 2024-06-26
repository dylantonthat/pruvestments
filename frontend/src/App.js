import './App.css';
import Landing from './components/landing';
import SentimentVisual from './components/sentimentVisual';

function App() {
  return (
    <div className="App">
        <div className="container mx-auto p-4">
          <div className="w-full md:w-1/2 mx-auto">
            <Landing />
            <SentimentVisual />
          </div>
        </div>
    </div>
  );
}

export default App;
