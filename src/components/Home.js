import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import Reading from './Reading/Reading';
import Learn from './Learn/Learn';
import Shop from './Shop/Shop';

const Home = () => {
    return(
        
            <div className="homePage">

                <h2>Choose a path to get started:</h2>
                
                <div className="Home">

                    <Link to="/reading" >
                        <div className="panels">
                            <h3>Get a Reading</h3>
                        </div>
                    </Link>
                                
                    <Link to="/learn">
                        <div className="panels">
                            <h3>Learn About Tarot</h3>
                        </div>
                    </Link>                
                    
                    <Link to="/shop">
                        <div className="panels">
                            <h3>Shop for a Deck</h3>
                        </div>    
                    </Link>

                </div>
                


            </div>


                       
        

    );
}

export default Home;



