import React, { Component } from 'react'

class WineProducts  extends Component {
    constructor (props) {
        super(props)
        this.state = {
            wineList: [
                {
                    src: 'https://www.theprisonerwinecompany.com/assets/images/contentblock/photos/Prisoner.jpg',
                    cardTitle: 'The Prisoner',
                    cardText: 'Persistent flavors of ripe raspberry, boysenberry, pomegranate, and vanilla linger for a smooth finish.',
                    price: '$47.00'
                },
                {
                    src: 'https://www.craftbeerkings.com/image/cache/data/menagecalred14-1000x1000.jpg',
                    cardTitle: 'Menage a Trois',
                    cardText: 'Luscious love affair offering bold blackberry and raspberry nature.',
                    price: '$19.00'
                },
                {
                    src: 'https://s.financesonline.com/uploads/romanee-1024x885.jpg',
                    cardTitle: 'Domaine de la Romanee-Conti 1990',
                    cardText: `This wine enjoys the reputation of the world's finest Pinot Noir. Wine is produced on a tiny parcel of land where vines are on the average over 50 years old.`,
                    price: '$20,975.00'
                },
                {
                    src: 'https://s.financesonline.com/uploads/cheval.jpg',
                    cardTitle: 'Cheval Blanc 1947',
                    cardText: 'One of the most expensive wines in the world!',
                    price: '$33,781.00'
                },
                {
                    src: 'https://s.financesonline.com/uploads/margaux.jpg',
                    cardTitle: 'Chateau Margaux 1787',
                    cardText: 'Known as the most expensive wine never to be sold, this wine’s initial price was around $500,000. It was authenticated to be once part of the wine collection of Thomas Jefferson.',
                    price: '$500,000.00'
                },
                {
                    src: 'https://s.financesonline.com/uploads/eagle-1024x798.jpg',
                    cardTitle: 'Screaming Eagle Cabernet Sauvignon 1992',
                    cardText: 'This is the Grand Royale of all the most expensive wines out there. In a Napa valley wine auction in 2000, this wine got the highest bid, with a whopping price tag of around $500,000.',
                    price: '$500,000.00'
                },
            ]
        }
    }

    render () {
        return <h1>Hi from products</h1>
    }
}

export default WineProducts