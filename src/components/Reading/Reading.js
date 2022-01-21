import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import RandomCard from './RandomCard';

function Reading () {


    return(
        
            <div className="readingPage">
                <h2>Get a Reading</h2>

                <div className="Reading">

                    <Link to="/random">
                        <div className="panels">
                            <h3>1 Card - Random</h3>
                        </div>
                    </Link>
                    
                    <Link to="/pick-a-card">
                        <div className="panels">
                            <h3>Pick a Card</h3>
                        </div>
                    </Link>

                    <Link to="/three">
                        <div className="panels">
                            <h3>3 Card - Random</h3>
                        </div>
                    </Link>
               
                </div>
                
                <Routes>
                    <Route exact path="/random" element={ <RandomCard /> }/>
                </Routes>
            </div>
        
    );
}

export default Reading;