
import { useState } from 'react';
import CardList from './CardList'


function Learn () {

    const initialTarotCard = {name:'', value:'blank'};
    const [ tarotCard, setTarotCard ] = useState(initialTarotCard);
    const tarotImage = `/images/${tarotCard.value}.jpg`

    const getTarotCard = (tarotCard) => {
        // console.log(getTarotCard)
        // console.log(tarotCard)
        setTarotCard(tarotCard)
    }
    


    return(
        <div className="learn">
            <h1>Learn More about the Rider-Waite-Smith deck!</h1>
            <p>Select a card from the dropdown below</p>
            <form action="submit">
                <label hidden htmlFor="dropdown">Select a Card:</label>  
                <select name="Search" id="dropdown">
                    <option value="" hidden>Search by Card Name</option>

                    {/* Step 4: Pass the function containing all of the card info as props to each dropdown option */}
                    <CardList onGetTarotCard={getTarotCard}/> 
                    {/* passing a function as props so that we can access the data stored in the variable which is stored inside this handleClick function, which is tied to each dropdown option */}
                </select>
            </form>

             <div className="tarotCardInfo">    
                <img src={tarotImage} alt={tarotCard.name} />
                <div className="cardText">
                    <h2>{tarotCard.name}</h2>
                    <h4>Meaning Upright:</h4>
                    <p>{tarotCard.upright}</p>
                    <h4>Meaning Reverse:</h4>
                    <p>{tarotCard.reverse}</p>
                    <h4>Description:</h4>
                    <p>{tarotCard.description}</p>
                </div>
            </div>  

        </div>
        
    );
}

export default Learn;