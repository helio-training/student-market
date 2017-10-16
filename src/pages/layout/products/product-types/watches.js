import React from 'react'
import CardTemplate from '../Navigation/card-template/component'
import {CardDeck, CardGroup} from 'reactstrap'

export default (props) => {
  const watches = [
    {
      src: 'https://www.oldtimecandy.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/a/candy_watch_koko.jpg',
      cardTitle: 'Candy Watch',
      Price: '400$',
      cardText: 'This is one of the best products on the market it never runs out of battery and is lightweight and delicous'
    },
    {
      src: 'https://cdn2.jomashop.com/media/catalog/product/r/o/rolex-gmt-master-ii-black-dial-stainless-steel-and-18kt-yellow-gold-rolex-oyster-automatic-men_s-watch-116713bkso-116713ln.jpg',
      cardTitle: 'Normal Rolex',
      Price: '35$',
      cardText: 'This is an ok watch but sadly you cannot eat it but, it can tell you time',
    },
    {
      src: 'https://www.oddee.com/wp-content/uploads/_media/imgs/articles2/a97808_g296_4-samurai.jpg',
      cardTitle: 'Metal Band Watch',
      Price: '80$',
      cardText: 'IT TELLS TIME',
    },
    {
      src: 'https://static.garmincdn.com/en/products/010-01688-00/g/cf-lg.jpg',
      cardTitle: 'Exercise Watch',
      Price: '300$',
      cardText: 'It helps you exercise',
    },
    {
      src: 'https://www.dhresource.com/0x0s/f2-albu-g1-M00-EE-83-rBVaGVVR1GSAb5k6AAG7Zeji6ak919.jpg/wood-watch-wooden-watches-waterproof-watch.jpg',
      cardTitle: 'Wooden Watch',
      Price: '120$',
      cardText: 'It is made of wood so it is pretty light and pretty cool',
    },
    {
      src: 'https://www.mainlinemenswear.co.uk/blog/wp-content/uploads/2014/02/Giant-watch.jpg',
      cardTitle: 'Giant Watch',
      Price: '4.23$',
      cardText: 'This watch is big for people who like to wear big watches',
    },
  ]

  const products = watches.map((watch) => {
    return <CardTemplate product={watch}/>
  })

  return (
    <div>
      <CardDeck>
        {products}
      </CardDeck>
    </div>
  )
}