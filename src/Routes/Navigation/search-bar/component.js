import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap'

class Search extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div>
        <FormGroup>
          <Label for="exampleSearch">Search</Label>
          <Input type="search" name="search" id="exampleSearch" placeholder="search placeholder" />
        </FormGroup>
      </div>
    )
  }
}

export default Search
