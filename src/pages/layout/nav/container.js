import React, { Component } from 'react'

import { connect } from 'react-redux'
import { replace, Fragment } from 'redux-little-router'

import MainNavbar from './main-navbar/component'

import Cart from '../cart/container'
import ProductsList from '../products/container'

export class Layout extends Component {
    componentWillMount () {
        if (this.props.currentPath === '/') {
            console.log(this.props.dispatch(replace({
                pathname: '/products'
            })))
        }

    }

    render () {
        return (
            <div className="Layout-container">
                <MainNavBar/>
                <Fragment for Route="/">
                    <div className="routable-container">
                        <Fragment forRoute="/products">
                            <ProductsList/>
                        </Fragment>
                        <fragment forRoute={"/cart"}>
                            <cart/>
                        </fragment>
                    </div>
                </Fragment>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentPath: state.router.pathname
})

export default connect(mapStateToProps)(Layout)