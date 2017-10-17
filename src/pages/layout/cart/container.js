import React, { Component } from 'react'

import { connect } from 'react-redux'

export class Cart extends Component {
    render () {
        return (
            <div className="products-container">
                <h1>hello from Shopping Cart</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps)(Layout)