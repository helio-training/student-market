import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col, Row, CardColumns } from 'reactstrap'


class CardTemplate extends Component {
  render () {
    return(
      <Col>
        <Row>
          <CardColumns>
            <Card>
              <CardImg className="img" top width="100%" src={this.props.product.src} alt={this.props.product.cardTitle}/>
              <CardBody>
                <CardTitle>{this.props.product.cardTitle}</CardTitle>
                <CardSubtitle>{this.props.product.price}</CardSubtitle>
                <CardText>{this.props.product.CardText}</CardText>
                <Button text color="primary">Buy Now</Button>
              </CardBody>
            </Card>
          </CardColumns>
        </Row>
      </Col>
    )
  }
}
export default CardTemplate