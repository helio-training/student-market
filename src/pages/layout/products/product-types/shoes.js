import React, { Component } from 'react'


class Shoes  extends Component {
  constructor (props) {
    super(props)
    this.state = {
      shoesList: [
        {
          src: 'https://www.ferragamo.com/shop/us/en/men/shoes-1/lace-up-shoe-514664--1?gclid=CjwKCAjwgvfOBRB7EiwAeP7ehgwh3hyKZg2smDrcXtzjYbNrMW67kBZuT8Vgim19Y9qXtLZYAnXUzhoCYRUQAvD_BwE',
          cardTitle: 'Salvatore Ferragamo',
          Price: '$730.00',
          cardText: 'Formal five-eyelet plain toe Oxford with gros grain trim and leather sole. Collection FW 2017',
          color: 'black',
          gender: 'male',
          size: '9'
        },
        {
          src: 'http://images.us.christianlouboutin.com/media/catalog/product/cache/1/thumbnail/1200x/602f0fa2c1f0d1ba5e241f914e856ff9/3/1/7/0/christianlouboutin-misstennis-3170237_M862_1_1200x1200_1493290298.jpg',
          cardTitle: 'Christian Laboutin',
          price: '$995',
          cardText: 'Trimmed with brown crocodile-stamped leather, Christian Louboutin\'s Miss Tennis ankle boots are crafted in Italy of semi-sheer beige mesh embroidered with a multicolored floral motif.',
          color: 'multicolor',
          gender: 'women',
          size: '8'
        },
        // {
        //   src: 'https://s.financesonline.com/uploads/romanee-1024x885.jpg',
        //   cardTitle: 'Domaine de la Romanee-Conti 1990',
        //   price: '$20,975.00',
        //   cardText: `This wine enjoys the reputation of the world's finest Pinot Noir. Wine is produced on a tiny parcel of land where vines are on the average over 50 years old.`
        //   color: 'black',
        //   gender: 'male',
        //   size: '9'
        // },
        // {
        //   src: 'https://s.financesonline.com/uploads/cheval.jpg',
        //   cardTitle: 'Cheval Blanc 1947',
        //   price: '$33,781.00',
        //   cardText: 'One of the most expensive wines in the world!',
        //   color: 'black',
        //   gender: 'male',
        //   size: '9'
        // },
        // {
        //   src: 'https://s.financesonline.com/uploads/margaux.jpg',
        //   cardTitle: 'Chateau Margaux 1787',
        //   price: '$500,000.00',
        //   cardText: 'Known as the most expensive wine never to be sold, this wine’s initial price was around $500,000. It was authenticated to be once part of the wine collection of Thomas Jefferson.'
        //   color: 'black',
        //   gender: 'male',
        //   size: '9'
        // },
        // {
        //   src: 'https://s.financesonline.com/uploads/eagle-1024x798.jpg',
        //   cardTitle: 'Screaming Eagle Cabernet Sauvignon 1992',
        //   price: '$500,000.00',
        //   cardText: 'This is the Grand Royale of all the most expensive wines out there. In a Napa valley wine auction in 2000, this wine got the highest bid, with a whopping price tag of around $500,000.'
        //   color: 'black',
        //   gender: 'male',
        //   size: '9'
        // },
      ]
    }
  }

  render () {
    const products = this.state.shoesList.map((shoe) => {
      return <CardTemplateSize product={shoe}/>
    })

    return (
      <div>
        {products}
      </div>
    )
  }
}

export default Shoes