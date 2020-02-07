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
        lastName: "",
        contacts: []
    };

    handleFormSubmit = e => {
        e.preventDefault();
        API.getByName(this.state.lastName)
            .then(res => this.setState({
                contacts: res.data
            }))

            .catch(err => console.log(err));
    };

    handleInputChange = e => {
        this.setState({ lastName: e.target.value });
    };

    render() {
        return (
            <Container>
                <div>
                    <Input
                        type="text"
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                        placeholder="Enter Name" />
                    <FormBtn
                        onClick={this.handleFormSubmit}>
                        Search
                  </FormBtn>
                </div>
                {this.state.contacts.length ? (
                    <List>
                        {this.state.contacts.map(contact => (
                            <ListItem key={contact._id}>
                                <Link to={"/contacts/" + contact._id}>
                                    <strong>
                                        <h2>{contact.lastName}, {contact.firstName}</h2>
                                    </strong>
                                </Link>
                                <DeleteBtn onClick={() => this.deleteContact(contact._id)} />
                                <Link id="editBtn" to={"/edit/" + contact._id}>Edit Contact</Link>
                            </ListItem>
                        ))}
                    </List>
                ) : (
                        <h4></h4>
                    )}
            </Container>
        );
    }
}

export default SearchJumbo