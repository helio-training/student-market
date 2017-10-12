import React, { Component } from 'react'
import Header from './Header/component'
import Navigation from './Navigation/component'
import Chickens from './Products/chickens'
import DragonEggs from './Products/dragon-eggs'
import Watches from './Products/watches'
import { Switch, Route } from 'react-router-dom'
import Yoruba from  './Products/yoruba'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Navigation/>

        <Switch>
          <Route path='/chickens' component={Chickens}/>
          <Route path='/dragon-eggs' component={DragonEggs}/>
          <Route path='/watches' component={Watches}/>
            <Route path='/yoruba' component={Yoruba}/>
        </Switch>
      </div>
    )
  }
}