
import Search from './search-bar/component'
import React, { Component } from 'react';
import { Navbar, Nav } from 'reactstrap';

import NavigationLink from './navigation-link/component'

class Navigation extends Component {
    render () {
        return (
            <Navbar light={true} className="Bg-light main-navigation">
              <Search/>
                <Nav>
                    <NavigationLink
                        type="dropdown"
                        label="Products"
                        dropdownLinks={[
                            {
                                label: 'Wine',
                                href: ''
                            },
                            {
                                label: 'Chickens',
                                href: ''
                            },
                            {
                                label: 'Watches',
                                href: ''
                            },
                            {
                                label: 'Dragon Eggs',
                                href: ''
                            },
                            {
                                label: 'Shoes',
                                href: ''
                            },
                            {
                                label: 'Clothing',
                                href: ''
                            },

                        ]}/>

                </Nav>
            </Navbar>
        )
    }
}

export default Navigation

