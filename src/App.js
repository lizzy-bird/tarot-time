import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Reading from './components/Reading/Reading';
import Learn from './components/Learn/Learn';
import Shop from './components/Shop/Shop';
import RandomCard from './components/Reading/RandomCard';
import ThreeRandom from './components/Reading/ThreeRandom'
import PickACard from './components/Reading/PickACard'




function App() {
  return (
    <Router>
      <div className ="App">  
      <Header/>

      <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/reading" element={ <Reading /> }/>
          {/* <Route exact path="/learn" element={ <Learn /> } />
          <Route exact path="/shop" element={ <Shop /> } /> */}
          <Route exact path="/learn" element={ <UnderConstruction /> } />
          <Route exact path="/shop" element={ <UnderConstruction /> } />
          <Route exact path="/random" element={ <RandomCard /> }/>
          <Route exact path="/three" element={ <ThreeRandom />} />
          <Route exact path="/pick-a-card" element={ <PickACard /> } />
      </Routes> 
      </div>

      

    </Router>
  );
}

export default App;


//! Psuedo Code:

// * MVP
// Make an API call, store the returned cards in an array called AllCards
// When the Random button is clicked, open a new window, select a random card from the array and display it to the DisplayCard module
// Map over the array to generate a dropdown list
// Add an event listener to listen for when a list item is clicked, register which list item it is, and return the corresponding card to the DisplayCard module.


// * Stretch Goals:
// Create a 3 card spread and display it with DisplayThree
// Create a way for users to search card descriptions
// Design custom card images

