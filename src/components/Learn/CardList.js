import { useState, useEffect } from 'react';
function CardList (props) {
    
    //Step 3: Create a function to pass as props to CardList (See line 29 for step 3.5), which attaches to each dropdown option as the Cardlist funcion maps through our original array
    const {onGetTarotCard} = props
    
        

    // create a state value for holding the full array of tarot cards
    const [ tarotCardSearch, setTarotCardSearch ] = useState([]);
    

    function handleClick(card) {

        // Step 1: isolate the target values in a variable
        let value = card.target.value;
        let name = card.target.label;
        let upright = card.target.dataset.upright;
        let reverse = card.target.dataset.reverse;
        // let tarotSearchImage = `/images/${value}.jpg`
        let description = card.target.dataset.description;
        
        console.log("HANDLE CLICK IS WORKING");
        console.log(`${value}, ${name}, ${upright}, ${reverse}, ${description}`);
        
        // Step 2: pass the variable as props to this new object
        const newTarotCard = {name:name, upright:upright}

        //Step 3.5: pass the new object into this function which we have declared above (line 4)
        onGetTarotCard(newTarotCard)

        //*Note: this could also be written like this below - will automatically assume that key/value have the same name*//
        // const newTarotCard = {name, upright}
          
    }
    

    useEffect( () => {
    
        fetch('https://rws-cards-api.herokuapp.com/api/v1/cards/')
          .then((result) => {
            return result.json()
          })
          .then((jsonResult) => {
            setTarotCardSearch(jsonResult.cards)

            
          })
    
    }, [])


    return(
        <>
        {/* Map over the API results to produce the dropdown menu options */}
            {tarotCardSearch.map(({name, name_short, meaning_up, meaning_rev, desc}) => {
                return(
                    <option id="tarotCard"  key={name_short} value={name_short} data-upright={meaning_up} data-reverse={meaning_rev} data-description={desc} onClick={handleClick}>{name}</option>
                    )
                }
            )}
        </>
    )
}

export default CardList