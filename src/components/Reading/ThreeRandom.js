import { useState, useEffect } from 'react';

function ThreeRandom () {

    const [cardOne, setCardOne ] = useState({});
    const [cardTwo, setCardTwo ] = useState({});
    const [cardThree, setCardThree ] = useState({});

    const [moreInfoOne, setMoreInfoOne] = useState(true);
    const [moreInfoTwo, setMoreInfoTwo] = useState(true);
    const [moreInfoThree, setMoreInfoThree] = useState(true);

    const handleMoreInfoOne = () => {
        setMoreInfoOne(!moreInfoOne);
        
        return (
            <>
                <h2>Description:</h2>
                <p>{cardOne.desc}</p>
            </>
        )
    }

    const handleMoreInfoTwo = () => {
        setMoreInfoTwo(!moreInfoTwo);
        
        return (
            <>
                <h2>Description:</h2>
                <p>{cardTwo.desc}</p>
            </>
        )
    }

    const handleMoreInfoThree = () => {
        setMoreInfoThree(!moreInfoThree);
        
        return (
            <>
                <h2>Description:</h2>
                <p>{cardThree.desc}</p>
            </>
        )
    }

  //This API doesn't contain images, so link to local folder of custom images//
  const tarotImageOne = `/images/${cardOne.name_short}.jpg`
  const tarotImageTwo = `/images/${cardTwo.name_short}.jpg`
  const tarotImageThree = `/images/${cardThree.name_short}.jpg`

  useEffect( () => {

    fetch('https://rws-cards-api.herokuapp.com/api/v1/cards/random')
      .then((result) => {
        return result.json()
      })
      .then((jsonResult) => {
        setCardOne(jsonResult.cards[0])
        setCardTwo(jsonResult.cards[13])
        setCardThree(jsonResult.cards[56])
    })

    
    

  }, [])

  

  

    return(
        <section className="threeCards"> 

            {/* Add a button here to return new reading */}
            {/* Edit event handler to change other handleMoreInfo functions to false when they are clicked */}

            <div className="threeRandom">
                
                <img src={tarotImageOne} alt={cardOne.name} />
                <div className="cardText">
                    <h2>{cardOne.name}</h2>
                    
                    <button onClick={handleMoreInfoOne}>{moreInfoOne ? "More Info" : "Less Info"}</button>
                    {
                        moreInfoOne
                        ? null 
                        : 
                        <div className="moreInfoThree">
                            <h4>Meaning Upright:</h4>
                            <p>{cardOne.meaning_up}</p>
                            <h4>Meaning Reverse:</h4>
                            <p>{cardOne.meaning_rev}</p>
                            <h2>Description:</h2>
                            <p>{cardOne.desc}</p>
                        </div>
                    }
                </div>
            </div>
            <div className="threeRandom">
                    
                <img src={tarotImageTwo} alt={cardTwo.name} />
                <div className="cardText">
                    <h2>{cardTwo.name}</h2>

                    <button onClick={handleMoreInfoTwo}>{moreInfoTwo ? "More Info" : "Less Info"}</button>
                        {
                            moreInfoTwo
                            ? null 
                            : 
                            <div className="moreInfoThree">
                            <h4>Meaning Upright:</h4>
                            <p>{cardTwo.meaning_up}</p>
                            <h4>Meaning Reverse:</h4>
                            <p>{cardTwo.meaning_rev}</p>
                            <h2>Description:</h2>
                            <p>{cardTwo.desc}</p>
                            </div>
                        }
                </div>
            </div>
            <div className="threeRandom">
                    
                <img src={tarotImageThree} alt={cardThree.name} />
                <div className="cardText">
                    <h2>{cardThree.name}</h2>                        
                    <button onClick={handleMoreInfoThree}>{moreInfoThree ? "More Info" : "Less Info"}</button>
                        {   
                        moreInfoThree
                        ? null 
                        : 
                        <div className="moreInfoThree">
                        <h4>Meaning Upright:</h4>
                        <p>{cardThree.meaning_up}</p>
                        <h4>Meaning Reverse:</h4>
                        <p>{cardThree.meaning_rev}</p>
                        <h2>Description:</h2>
                        <p>{cardThree.desc}</p>
                        </div>
                        }
                </div>
            </div>
                               
        </section>  
    );
}

export default ThreeRandom;