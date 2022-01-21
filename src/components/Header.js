import {  Link } from 'react-router-dom';


const Header = () => {
    return(
        <header>
            <Link to="/"><h1 className="title">Tarot Time</h1></Link>

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/reading">Reading</Link></li>
                    <li><Link to="/learn">Learn More</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                </ul>
            </nav>

            

        </header>
    )
}

export default Header;