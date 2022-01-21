import { useState, useEffect } from 'react';

function Shop () {

    const [ shopListings, setShopListings ] = useState([]);
    

    useEffect( () => {
    
        fetch('https://openapi.etsy.com/v2/listings/active?api_key=y0xh0iczq41o9m9q2vc7r3jc&includes=MainImage&fields=url,price,title,shop_section_id,description&limit=100')
          .then((result) => {
            return result.json()
          })
          .then((jsonResult) => {
            setShopListings(jsonResult.cards)
          })
    
    }, [])

    console.log(shopListings)


    return(
        <div className="shop">
        <h1>Shop</h1>
        <p>Visit one of these vendors to purchase your very own deck and continue your tarot journey!</p>
        </div>
        
    );
}

export default Shop;