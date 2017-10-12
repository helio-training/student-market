import React, { Component } from 'react'
import Header from './Header/component'
import Navigation from './Navigation/component'
import Chickens from './Products/chickens'
import DragonEggs from './Products/dragon-eggs'
import Shoes from './Products/shoes'
import Watches from './Products/watches'
import Wine from './Products/wine'
import { Switch, Route } from 'react-router-dom'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Navigation/>

        <Switch>
          <Route path='/chickens' component={Chickens}/>
          <Route path='/dragon-eggs' component={DragonEggs}/>
          <Route path='/shoes' component={Shoes}/>
          <Route path='/watches' component={Watches}/>
          <Route path='/wine' component={Wine}/>
        </Switch>
      </div>
    )
  }
}