import {  Link } from 'react-router-dom';


const Home = () => {
    return(
        
            <div className="homePage">

                <p>Welcome Friends! This site is currently not optimized for mobile. Please enjoy exploring this work-in-proress!</p>

                <h1>Choose a path to get started:</h1>
                
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



