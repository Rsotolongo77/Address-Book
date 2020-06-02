import { Link } from "react-router-dom";
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Container, Col } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import SearchJumbo from "../components/SearchJumbo";
import Modal from '../components/Modal';

class EditContact extends Component {

    state = {
        contact: {},
        lastName: "",
        firstName: "",
        email: "",
        phoneNumber: "",
        birthDate: "",
        address: "",
        notes: "",
        show: false
    };

    //return obect with values in db and then set to state for possible edit
    componentDidMount() {
        API.getContact(this.props.match.params.id)
            .then(res => res.json())
            .then(json => this.setState({
                contact: json,
                firstName: json.firstName,
                lastName: json.lastName,
                email: json.email,
                phoneNumber: json.phoneNumber,
                birthDate: json.birthdate,
                address: json.address,
                notes: json.notes
            }))
            .then(() => {
                let fName = this.state.contact.firstName
                fName = this.capitalize(fName)
                this.setState({ firstName: fName })

                let lName = this.state.contact.lastName
                lName = this.capitalize(lName)
                this.setState({ lastName: lName })
            })
            .catch(err => console.log(err));
    };

    //function to get values from input elements and set them in state 
    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
    //redirect on submit
    routeChange() {
        let path = "/";
        this.props.history.push(path);
    };

    //function to handle form submit with current state, and pass to db
    handleFormSubmit = e => {

        //prevent default form submission
        e.preventDefault();

        //conditional to make sure required fields are filled before sending data to db
        if (this.state.lastName && this.state.firstName) {
            API.updateContact(this.state.contact._id, {
                lastName: this.state.lastName,
                firstName: this.state.firstName,
                email: this.state.email,
                phoneNumber: this.state.phoneNumber,
                birthDate: this.state.birthDate,
                address: this.state.address,
                notes: this.state.notes
            })
                .then(res => res.json())
                .then(json => this.setState({
                    contact: json,
                    firstName: json.firstName,
                    lastName: json.lastName,
                    email: json.email,
                    phoneNumber: json.phoneNumber,
                    birthDate: json.birthdate,
                    address: json.address,
                    notes: json.notes
                }))
                .then(() => {
                    let fName = this.state.contact.firstName
                    fName = this.capitalize(fName)
                    this.setState({ firstName: fName })

                    let lName = this.state.contact.lastName
                    lName = this.capitalize(lName)
                    this.setState({ lastName: lName })
                })
                .then(this.routeChange())
                .catch(err => console.log(err));
        }
        else (this.showModal());
    };

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };


    capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    render() {
        return (
            <Container fluid>
                <div id="rowGen">
                    <Col size="md-12">
                        <Jumbotron>
                            <h1 id="header">Michael Scott Paper Company</h1>
                            <h1 className="display-4">Directory</h1>
                            <Link to={"/add"} id="addLink">Add Contact</Link>
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
                                value={this.state.lastName}
                                onChange={this.handleInputChange}
                                name="lastName"
                                placeholder="Last Name (required)" />
                            <Input
                                value={this.state.firstName}
                                onChange={this.handleInputChange}
                                name="firstName"
                                placeholder="First Name (required)" />
                            <Input
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                name="email"
                                placeholder="Email" />
                            <Input
                                value={this.state.phoneNumber}
                                onChange={this.handleInputChange}
                                name="phoneNumber"
                                placeholder="Phone Number" />
                            <Input
                                value={this.state.birthDate}
                                onChange={this.handleInputChange}
                                name="birthDate"
                                placeholder="Birth Date" />
                            <Input
                                value={this.state.address}
                                onChange={this.handleInputChange}
                                name="address"
                                placeholder="Address" />
                            <TextArea
                                value={this.state.notes}
                                onChange={this.handleInputChange}
                                name="notes"
                                placeholder="Notes" />

                            <FormBtn
                                onClick={this.handleFormSubmit}>
                                Submit Edit
                  </FormBtn>
                        </form>
                    </Col>
                </div>
            </Container>
        );
    }
}
//
export default EditContact;