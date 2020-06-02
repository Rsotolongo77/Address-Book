import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Container, Col } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import SearchJumbo from "../components/SearchJumbo";
import { Link } from "react-router-dom";
import Modal from '../components/Modal';

class AddContact extends Component {

    state = {
        lastName: "",
        firstName: "",
        email: "",
        phoneNumber: "",
        birthDate: "",
        address: "",
        notes: "",
        show: false
    };

    //function to get values on key event and set them in input value state
    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
    //redirect on submit
    routeChange() {
        let path = "/";
        this.props.history.push(path);
    }

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
                .then(res => res.json())
                .then(json => this.routeChange())
                .catch(err => console.log(err));
        }
        else (this.showModal());
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };


    render() {
        return (
            <Container fluid>
                <div id="rowGen">
                    <Col size="md-12">
                        <Jumbotron>
                            <h1 id="header">Michael Scott Paper Company</h1>
                            <h1 className="display-4">Directory</h1>
                            <Link to="/" id="addLink">Back to Address Book</Link>
                        </Jumbotron>
                        <SearchJumbo />
                        {this.state.show ? (
                            <Modal show={this.state.show} handleClose={this.hideModal}>
                                <h4>First and last name required</h4>
                            </Modal>
                        ) : (
                                null
                            )}
                        <form onSubmit={this.handleFormSubmit}>
                            <Input
                                onChange={this.handleInputChange}
                                name="lastName"
                                placeholder="Last Name (required)" />
                            <Input
                                onChange={this.handleInputChange}
                                name="firstName"
                                placeholder="First Name (required)" />
                            <Input
                                onChange={this.handleInputChange}
                                name="email"
                                placeholder="Email" />
                            <Input
                                onChange={this.handleInputChange}
                                name="phoneNumber"
                                placeholder="Phone Number" />
                            <Input
                                onChange={this.handleInputChange}
                                name="birthDate"
                                placeholder="Birth Date" />
                            <Input
                                onChange={this.handleInputChange}
                                name="address"
                                placeholder="Address" />
                            <TextArea
                                onChange={this.handleInputChange}
                                name="notes"
                                placeholder="Notes" />
                            <FormBtn
                                onClick={this.handleFormSubmit}>
                                Submit Contact
                        </FormBtn>
                        </form>
                    </Col>
                </div>
            </Container>
        );
    }
}

export default AddContact;