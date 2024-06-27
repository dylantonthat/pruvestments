import './App.css';
import Footer from './components/footer';
import Landing from './components/landing';
import NavBar from './components/navbar';
import SentimentVisual from './components/sentimentVisual';

function App() {
  return (
    <div className="App">
        <div className="container mx-auto p-4" >
          <div className="w-full md:w-1/2 mx-auto">
            <NavBar />
            <Landing />
            <SentimentVisual />
            
          </div>
        </div>
        <div style={{paddingTop: '20px', width: '100%', position: 'relative', zIndex: '1' }}>
            <Footer />
        </div>
    </div>
  );
}

export default App;
