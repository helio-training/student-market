import React, { Component } from 'react'
import { Table, } from 'reactstrap'

class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <Table>
          <thead>
          <tr>
            <th>Items</th>
            <th>{Product Name}</th>
            <th>{Price}</th>
          </tr>
          </thead>
          <tbody>
            <tr>
             <th scope="row">{/*change state according to how many items there are*/}</th>
              <td>{/*product name*/}</td>
              <td>{/*product price*/}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}
export default ShoppingCart