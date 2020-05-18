import React, { Component } from "react";
import API from "../../utils/API";
import { Container } from "../Grid/index";
import { FormBtn, Input } from "../Form";
import { List, ListItem } from "../List";
import { Link } from "react-router-dom";
import DeleteBtn from "../DeleteBtn";
import Modal from '../Modal';

class SearchJumbo extends Component {
    state = {
        name: '',
        contacts: {},
        show: false
    };

    handleFormSubmit = e => {
        e.preventDefault();
        API.getByName(this.state.name.toLowerCase())
            .then(res => res.json())
            .then(json => {
                this.setState({ contacts: json })
                if (this.state.contacts[0]) {
                    this.hideModal()
                }
                else { this.setState({ show: true }) }
            })
            .catch(err => console.log(err))
        this.setState({ name: '' })
    };

    handleInputChange = e => {
        this.setState({ name: e.target.value })
    };

    deleteContact = id => {
        API.deleteContact(id)
            .then(res => window.location.reload())
            .catch(err => console.log(err))
    };

    capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {

        return (
            <Container>
                <div id="searchRes">
                    <div>
                        <form onSubmit={this.handleFormSubmit}>
                            <Input
                                value={this.state.name}
                                type="text"
                                onChange={this.handleInputChange}
                                placeholder="Enter Contact Name" />
                            <FormBtn
                                onClick={this.handleFormSubmit}>
                                Search
                  </FormBtn>
                        </form>
                        {this.state.show ? (
                            <Modal show={this.state.show} handleClose={this.hideModal}>
                                <h4>No matches found</h4>
                            </Modal>
                        ) : (
                                null
                            )}

                        {this.state.contacts.length ? (
                            <List>
                                {this.state.contacts.map(contact => (
                                    <ListItem key={contact._id}>
                                        <Link to={"/contacts/" + contact._id}>
                                            <strong>
                                                <h2>{this.capitalize(contact.lastName)}, {this.capitalize(contact.firstName)}</h2>
                                            </strong>
                                        </Link>
                                        <DeleteBtn onClick={() => this.deleteContact(contact._id)} />
                                        <Link id="editBtn" to={"/edit/" + contact._id}>Edit</Link>
                                    </ListItem>

                                ))}
                            </List>
                        ) : (
                                null
                            )}
                    </div>
                </div>
            </Container>
        );
    }
}

export default SearchJumbo