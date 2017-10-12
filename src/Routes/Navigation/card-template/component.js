import React, { Component } from 'react'
import {
  Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,
  Button, Col, Row,
} from 'reactstrap'

class CardTemplate extends Component {
  render () {
    return (
      <Col sm="3">
        <Row sm="3">
          <Card>
          <CardImg top width="100%" src={this.props.product.src} alt={this.props.product.cardTitle}/>
            <CardBody>
              <CardTitle>{this.props.product.cardTitle}</CardTitle>
              <CardSubtitle>{this.props.product.Price}</CardSubtitle>
              <CardText>{this.props.product.cardText}</CardText>
              <Button color="primary">Buy Now</Button>
            </CardBody>
          </Card>
        </Row>
      </Col>

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