import React, { Component } from 'react'
import './component.js.css'
import {
  Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,
  Button,
} from 'reactstrap'

class CardTemplate extends Component {
  render () {
    return (

          <Card>
          <CardImg className="img" top width="100%" src={this.props.product.src} alt={this.props.product.cardTitle}/>
            <CardBody>
              <CardTitle>{this.props.product.cardTitle}</CardTitle>
              <CardSubtitle>{this.props.product.Price}</CardSubtitle>
              <CardText>{this.props.product.cardText}</CardText>
              <Button color="primary">Buy Now</Button>
            </CardBody>
          </Card>


    )
  }
}

export default CardTemplate



/*
import React from 'react'
import CardTemplate from '../Navigation/card-template/component'

export default (props) => {
  const XXXX = [
    {
      src: 'insert link',
      cardTitle: 'Title of Product',
      Price: '$$$$',
      cardText: 'Description of Product'
    },

  ]

  const products = XXXX.map((OOOO) => {
    return <CardTemplate product={OOOO}/>
  })

  return (
    <div>
      {products}
    </div>
  )
}
 */