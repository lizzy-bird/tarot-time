
import { useState } from 'react';
import CardList from './CardList'


function Learn () {

    const initialTarotCard = {name:'Wheel of Fortune', upright: 'this is the upright meaning'};
    const [ tarotCard, setTarotCard ] = useState(initialTarotCard);

    const getTarotCard = (tarotCard) => {
        // console.log(getTarotCard)
        // console.log(tarotCard)
        setTarotCard(tarotCard)
    }
    


    return(
        <div className="learn">
            <h1>Learn More</h1>
            <p>Select a card from the dropdown below to learn more!</p>
            <form action="submit">
                <label htmlFor="dropdown">Select a Card:</label>  
                <select name="Search" id="dropdown">
                    <option value="" hidden>Search by Card Name</option>

                    {/* Step 4: Pass the function containing all of the card info as props to each dropdown option */}
                    <CardList onGetTarotCard={getTarotCard}/> 
                    {/* passing a function as props so that we can access the data stored in the variable which is stored inside this handleClick function, which is tied to each dropdown option */}
                </select>
            </form>

                   
            <h2>This is where we want it to show!</h2>
            <p>{tarotCard.name}</p>

        </div>
        
    );
}

export default Learn;