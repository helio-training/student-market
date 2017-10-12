import React, {Component} from 'react'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

// import { Button } from ' reactstrap '

class Header extends Component {
    render() {
        return (
            <header>
                <img src="https://d3c5s1hmka2e2b.cloudfront.net/uploads/topic/image/549/helio_mainlogo-onwhite.png"/>
                <Button color="Cart">Cart</Button>{''}
                <Form inline>
                    <FormGroup>
                        <Label for="email">Email</Label>{''}
                        <Input type="email" name="email" id="email" placeholder="email@dork.com"/>
                    </FormGroup>
                    {''}
                    <FormGroup>
                        <Label for="password">Password</Label>{''}
                        <input type="password" name="password" id="password" placeholder="Password"/>
                    </FormGroup>
                    {''}
                    <Button>Submit</Button>
                </Form>
            </header>
        )
    }
}

export default Header

