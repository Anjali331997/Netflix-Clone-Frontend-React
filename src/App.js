import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Rowpost from './components/Rowpost/Rowpost';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <Rowpost/>
    </div>
  );
}

export default App;
