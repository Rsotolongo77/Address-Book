import React, { Component } from "react";
import API from "../../utils/API";
import { Container } from "../Grid/index";
import { FormBtn, Input } from "../Form";
import { List, ListItem } from "../List";
import { Link } from "react-router-dom";
import DeleteBtn from "../DeleteBtn";

//client side filter for search component
class SearchJumbo extends Component {
    state = {
        firstName: "",
        contacts: []
    };

    handleFormSubmit = e => {
        e.preventDefault();
        API.getByName(this.state.firstName)
            .then(res => this.setState({
                contacts: res.data
            }))

            .catch(err => console.log(err));
    };

    handleInputChange = e => {
        this.setState({ firstName: e.target.value });
    };

    render() {
        return (
            <Container>
                <Input
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                    placeholder="Enter Name" />
                <FormBtn
                    onClick={this.handleFormSubmit}>
                    Search Contact
                  </FormBtn>
                {this.state.contacts.length ? (
                    <List>
                        {this.state.contacts.map(contact => (
                            <ListItem key={contact._id}>
                                <Link to={"/contacts/" + contact._id}>
                                    <strong>
                                        {contact.lastName}
                                        {contact.firstName}
                                        {contact.email}
                                        {contact.phoneNumber}
                                        {contact.birthDate}
                                        {contact.address}
                                        {contact.notes}
                                    </strong>
                                </Link>
                                <DeleteBtn onClick={() => this.deleteContact(contact._id)} />
                                <Link to={"/edit/" + contact._id}>Edit Contact</Link>
                            </ListItem>
                        ))}
                    </List>
                ) : (
                        <h3>No Contacts</h3>
                    )}
            </Container>
        );
    }
}

export default SearchJumbo