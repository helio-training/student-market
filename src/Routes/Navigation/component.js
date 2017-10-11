import React, { Component } from 'react';
import { Navbar, Nav } from 'reactstrap';

import NavigationLink from './navigation-link/component'

class Navigation extends Component {
    render () {
        return (
            <Navbar light={true} className="Bg-light main-navigation">
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
                                label: '',
                                href: ''
                            },
                            {
                                label: '',
                                href: ''
                            },
                            {
                                label: '',
                                href: ''
                            },
                            {
                                label: '',
                                href: ''
                            },
                            {
                                label: '',
                                href: ''
                            },

                        ]}/>

                </Nav>
            </Navbar>
        )
    }
}

export default Navigation