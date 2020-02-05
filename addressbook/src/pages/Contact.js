import React, { Component } from "react";

//import all components with the corresponding functions
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "../components/Grid";
import { Input, TextArea, FormBtn, SearchBtn } from "../components/Form";
import { List, ListItem } from "../components/List";

//class component to manipulate state 
class Contacts extends Component {

    //initialize state 
    state = {
        contacts: [],
        lastName: "",
        firstName: "",
        email: "",
        phoneNumber: "",
        birthDate: "",
        address: "",
        notes: ""
    };

    //have ready before render
    componentWillMount() {
        this.loadContacts
    }

    //make API call for all contacts
    loadContacts = () => {
        API.getAllContacts()

            //wait for results then..
            .then(res =>
                //set new state with results
                this.setState({
                    contacts: res.data, lastName: "", firstName: "",
                    email: "", phoneNumber: "", birthDate: "",
                    address: "", notes: ""
                })
            )

            //if err, log
            .catch(err => console.log(err));
    };

    //make API call to delete a contact. passing in id via req.params
    deleteContact = id => {
        API.deleteContact(id)
            .then(res => this.loadContacts())
            .catch(err => console.log(err));
    };

    //function to get values from input elements and set them in state 
    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    //function to handle form submit with current state, and pass to db
    handleFormSubmit = e => {

        //prevent default form submission
        e.preventDefault();

        //conditional to make sure required fields are filled before sending data to db
        if (this.state.lastName && this.state.firstName) {
            API.submitContact({
                lastName: this.state.lastName,
                firstName: this.state.firstName,
                email: this.state.email,
                phoneNumber: this.state.phoneNumber,
                birthDate: this.state.birthDate,
                address: this.state.address,
                notes: this.state.notes
            })

                //load contacts with new data included
                .then(res => this.loadContacts())
                .catch(err => console.log(err));
        }
    };

    //page view via react class required render method
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>Address Book Challenge</h1>
                        </Jumbotron>
                        <form>
                            <Input
                                value={this.state.lastName}
                                onChange={this.handleInputChange}
                                name="lastName"
                                placeholder="Last Name (required)" />
                            <Input
                                value={this.state.firstName}
                                onchange={this.handleInputChange}
                                name="firstName"
                                placeholder="First Name (required)" />
                            <Input
                                value={this.state.email}
                                onchange={this.handleInputChange}
                                name="email"
                                placeholder="Email" />
                            <Input
                                value={this.state.phoneNumber}
                                onchange={this.handleInputChange}
                                name="phoneNumber"
                                placeholder="Phone Number" />
                            <Input
                                value={this.state.birthDate}
                                onchange={this.handleInputChange}
                                name="birthDate"
                                placeholder="Birth Date" />
                            <Input
                                value={this.state.address}
                                onchange={this.handleInputChange}
                                name="address"
                                placeholder="Address" />
                            <TextArea
                                value={this.state.notes}
                                onchange={this.handleInputChange}
                                name="notes"
                                placeholder="Notes" />

                            <FormBtn
                                //don't run if condition not met
                                disabled={!(this.state.lastName && this.state.firstName)}
                                onClick={this.handleFormSubmit}>
                                Submit Contact
                            </FormBtn>
                        </form>
                    </Col>


                    <Col size="md-6">
                        <Jumbotron>
                            <h1>Contacts entered into db</h1>
                        </Jumbotron>
                        {this.state.books.length ? (
                            <List>
                                {this.state.contacts.map(contact => (
                                    <ListItem key={contact._id}>
                                        <Link to={"/contact/" + contact._id}>
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
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <h3>No Contacts</h3>
                            )}
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default Contacts