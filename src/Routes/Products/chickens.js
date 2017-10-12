import React from 'react'
import CardTemplate from '../Navigation/card-template/component'
import {CardDeck} from 'reactstrap'

export default (props) => {
  const Chickens = [
    {
      src: 'https://static3.mypetchicken.com/images/product_images/large/ChickenSwing09.jpg',
      cardTitle: 'Chicken on a swing',
      Price: '$30',
      cardText:'Highly skilled Trapeze chicken'
    },
    {
      src: 'http://cdn.shopify.com/s/files/1/0252/1753/products/harness_copy_e722aeb1-f193-4e41-bc20-5f706a0705f6_1024x1024.jpg?v=1436304643',
      cardTitle: 'Matched pair of walking chickens for when you want chicken on the go',
      Price: '$70',
      cardText:'Certified walking chickens'
    },
    {
      src: 'http://static2.uk.businessinsider.com/image/556c9c53dd08955f528b456c-480/mutant-chicken-final-copy-1.jpg',
      cardTitle: 'Pure Breed chickens',
      Price: '$20',
      cardText:'Feathers not included'
    },
    {
      src: 'https://i.ytimg.com/vi/68RKNJkarAM/maxresdefault.jpg',
      cardTitle: 'World Cup champion chickens',
      Price: '$45',
      cardText:'Great for kickin it'
    },
    {
      src: 'http://cdn0.wideopenpets.com/wp-content/uploads/2016/06/backyard-chickens.jpeg',
      cardTitle: 'Freeloading chicken',
      Price: '$27',
      cardText:'May overstay it"s welcome'
    },
    {
      src: 'http://cdn0.wideopenpets.com/wp-content/uploads/2016/06/11374220_1471370763181569_78348943_n.jpg',
      cardTitle: 'Pair of lawnmower chickens',
      Price: '$70',
      cardText:'Saves on gas for the lawnmower'
    }
  ]

  const products = Chickens.map((chicken, idx) => {
    return <CardTemplate key={idx} product={chicken}/>
  })

  return (
    <div>
      <CardDeck>
        {products}
      </CardDeck>
    </div>
  )
}
