import React from 'react'
import {CardDeck} from 'reactstrap'
import CardTemplate from '../Navigation/card-template/component'

export default (props) => {
    const wines = [
                {
                    src: 'https://www.theprisonerwinecompany.com/assets/images/contentblock/photos/Prisoner.jpg',
                    cardTitle: 'The Prisoner',
                    Price: '$47.00',
                    cardText: 'Persistent flavors of ripe raspberry, boysenberry, pomegranate, and vanilla linger for a smooth finish.'
                },
                {
                    src: 'https://www.craftbeerkings.com/image/cache/data/menagecalred14-1000x1000.jp',
                    cardTitle: 'Menage a Trois',
                    price: '$19.00',
                    cardText: 'Luscious love affair offering bold blackberry and raspberry nature.'
                },
                {
                    src: 'https://s.financesonline.com/uploads/romanee-1024x885.jpg',
                    cardTitle: 'Domaine de la Romanee-Conti 1990',
                    price: '$20,975.00',
                    cardText: `This wine enjoys the reputation of the world's finest Pinot Noir. Wine is produced on a tiny parcel of land where vines are on the average over 50 years old.`
                },
                {
                    src: 'https://s.financesonline.com/uploads/cheval.jpg',
                    cardTitle: 'Cheval Blanc 1947',
                    price: '$33,781.00',
                    cardText: 'One of the most expensive wines in the world!',
                },
                {
                    src: 'https://s.financesonline.com/uploads/margaux.jpg',
                    cardTitle: 'Chateau Margaux 1787',
                    price: '$500,000.00',
                    cardText: 'Known as the most expensive wine never to be sold, this wine’s initial price was around $500,000. It was authenticated to be once part of the wine collection of Thomas Jefferson.'
                },
                {
                    src: 'https://s.financesonline.com/uploads/eagle-1024x798.jpg',
                    cardTitle: 'Screaming Eagle Cabernet Sauvignon 1992',
                    price: '$500,000.00',
                    cardText: 'This is the Grand Royale of all the most expensive wines out there. In a Napa valley wine auction in 2000, this wine got the highest bid, with a whopping price tag of around $500,000.'
                },
            ]
    const products = wines.map((wine) => {
        return <CardTemplate product={wine}/>
    })

    return (
            <div>
              <CardDeck>
                {products}
              </CardDeck>
            </div>
    )
    }
