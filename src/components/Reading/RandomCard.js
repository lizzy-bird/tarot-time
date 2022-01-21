import { useState, useEffect } from 'react';

function RandomCard () {

    const [randomTarotCard, setRandomTarotCard ] = useState([]);

  const [moreInfo, setMoreInfo] = useState(true);

  const handleMoreInfo = () => {
    setMoreInfo(!moreInfo);
    console.log(randomTarotCard.desc);
    return (
      <>
      <h2>Description:</h2>
      <p>{randomTarotCard.desc}</p>
      </>
    )
  }

  //This API doesn't contain images, so link to local folder of custom images//
  const tarotImage = `/images/${randomTarotCard.name_short}.jpg`

  useEffect( () => {

    fetch('https://rws-cards-api.herokuapp.com/api/v1/cards/random')
      .then((result) => {
        return result.json()
      })
      .then((jsonResult) => {
        setRandomTarotCard(jsonResult.cards[0])
      })

  }, [])

  

    return(
        <section className="tarotCardInfo clearfix"> 
        <img src={tarotImage} alt={randomTarotCard.name} />
        <div className="cardText">
          <h2>{randomTarotCard.name}</h2>
          <h4>Meaning Upright:</h4>
          <p>{randomTarotCard.meaning_up}</p>
          <h4>Meaning Reverse:</h4>
          <p>{randomTarotCard.meaning_rev}</p>
          <button onClick={handleMoreInfo}>{moreInfo ? "More Info" : "Less Info"}</button>
          {
            moreInfo
            ? null 
            : 
            <>
            <h2>Description:</h2>
            <p>{randomTarotCard.desc}</p>
            </>
          }
        </div>
      
        </section>  
    );
}

export default RandomCard;