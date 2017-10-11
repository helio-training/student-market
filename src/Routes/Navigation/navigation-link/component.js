import React, {Component} from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavLink } from 'reactstrap';

class NavigationLink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false
        }
    }

    toggle = () => {
        this.setState({
            dropdownOpen : !this.state.dropdownOpen
        })
    }
    renderLink () {
        return <NavLink href="#">{this.props.label}</NavLink>
    }
    renderDropdown () {
        const items = this.props.dropdownLinks.map((link) => {
            return <DropdownItem disabled={link.disabled}
                                 header={link.header}>{link.label}</DropdownItem>
        })
        return (
            <div>
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                        {this.props.label}
                    </DropdownToggle>
                    <DropdownMenu>
                        {items}
                    </DropdownMenu>
                </ButtonDropdown>
            </div>
        );
    }

    render () {
        return (this.props.type === 'dropdown') ? this.renderDropdown() : this.renderLink()
    }
}

export default NavigationLink