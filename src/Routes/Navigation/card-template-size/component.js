import React, { Component } from 'react'
import {
  Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,
  Button, Col, Row, Dropdown, DropdownMenu, DropdownToggle, DropdownItem
} from 'reactstrap'

class CardTemplateSize extends Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false
    }
  }

  toggle () {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  render () {
    return (
      <Col sm="3">
        <Row sm="3">
          <Card>
            <CardImg top width="100%" src={this.props.product.src} alt={this.props.product.cardTitle}/>
            <CardBody>
              <CardTitle>{this.props.product.cardTitle}</CardTitle>
              <CardSubtitle>{this.props.product.Price}</CardSubtitle>
              <CardText>
                {this.props.product.cardText}
                <div className="d-flex justify-content-between align-items-center">
                  <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>Size</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>5</DropdownItem>
                      <DropdownItem>6</DropdownItem>
                      <DropdownItem>6.5</DropdownItem>
                      <DropdownItem>7</DropdownItem>
                      <DropdownItem>7.5</DropdownItem>
                      <DropdownItem>8</DropdownItem>
                      <DropdownItem>8.5</DropdownItem>
                      <DropdownItem>9</DropdownItem>
                      <DropdownItem>9.5</DropdownItem>
                      <DropdownItem>10</DropdownItem>
                      <DropdownItem>10.5</DropdownItem>
                      <DropdownItem>11</DropdownItem>
                      <DropdownItem>11.5</DropdownItem>
                      <DropdownItem>12</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>Color</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Black</DropdownItem>
                      <DropdownItem>Grey</DropdownItem>
                      <DropdownItem>White</DropdownItem>
                      <DropdownItem>Red</DropdownItem>
                      <DropdownItem>Green</DropdownItem>
                      <DropdownItem>Orange</DropdownItem>
                      <DropdownItem>Yellow</DropdownItem>
                      <DropdownItem>Blue</DropdownItem>
                      <DropdownItem>Silver</DropdownItem>
                      <DropdownItem>Gold</DropdownItem>
                      <DropdownItem>Pink</DropdownItem>
                      <DropdownItem>Purple</DropdownItem>
                      <DropdownItem>Nude</DropdownItem>
                      <DropdownItem>Brown</DropdownItem>
                      <DropdownItem>Multicolor</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <Button tex color="primary">Buy Now</Button>
                </div>
              </CardText>
            </CardBody>
          </Card>
        </Row>
      </Col>

    )
  }
}

export default CardTemplateSize
