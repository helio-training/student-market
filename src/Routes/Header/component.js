import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Account extends Component {
  render() {
    return(
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
      )
    }
  }
  export default Account

