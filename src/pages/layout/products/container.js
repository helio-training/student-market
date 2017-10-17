import React, { Component } from 'react'
import { connect } from 'react-redux'


class Products extends Component {
  render() {
    return(
      this.props.state
    )
  }
}
const mapStateToProps = (state) => ({
    currentPath: state.router.pathname
})
export default connect(mapStateToProps)(Products)