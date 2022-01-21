import { Routes, Route, Link} from 'react-router-dom';
import RandomCard from './RandomCard';

const PickACard = () => {


    return(
        <>
            <h2>Pick a Card</h2>
            <section className="cardDisplay">
                <Link to="/random" className="pickACard card1"></Link>
                <Link to="/random" className="pickACard card2"></Link>
                <Link to="/random" className="pickACard card3"></Link>
                <Link to="/random" className="pickACard card4"></Link>
                <Link to="/random" className="pickACard card5"></Link>
                <Link to="/random" className="pickACard card6"></Link>
                <Link to="/random" className="pickACard card7"></Link>
                <Link to="/random" className="pickACard card8"></Link>
                <Link to="/random" className="pickACard card9"></Link>
                <Link to="/random" className="pickACard card10"></Link>
            </section>

            <Routes>
                    <Route exact path="/random" element={ <RandomCard /> }/>
            </Routes>
        </>
       
    )
}

export default PickACard;