import { useState, useEffect } from 'react';

function Shop () {

    const [ shopListings, setShopListings ] = useState([]);
    

    useEffect( () => {
    
        fetch('https://api.etsy.com/v3/')
          .then((result) => {
            return result.json()
          })
          .then((jsonResult) => {
            setShopListings(jsonResult.cards)
          })
    
    }, [])

    console.log(shopListings)


    return(
        <div>
        <h1>Shop for Your Own Deck</h1>
        </div>
        
    );
}

export default Shop;