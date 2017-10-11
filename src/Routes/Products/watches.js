import React from 'react'
import CardTemplate from '../Navigation/card-template/component'

export default (props) => {
  const watches = [
    {
      src: 'https://www.oldtimecandy.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/a/candy_watch_koko.jpg',
      cardTitle: 'Candy Watch',
      Price: '400$',
      cardText: 'This is one of the best products on the market it never runs out of battery and is lightweight and delicous'
    },

  ]

  const products = watches.map((watch) => {
    return <CardTemplate product={watch}/>
  })

  return (
    <div>
      {products}
    </div>
  )
}

