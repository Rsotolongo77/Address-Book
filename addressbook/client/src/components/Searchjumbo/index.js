import React, { Component } from "react";
import API from "../../utils/API";
import { Container } from "../Grid/index";
import { FormBtn, Input } from "../Form";

//client side filter for search component
class SearchJumbo extends Component {
    state = {
        search: "",
        firstName: "",
        contacts: []
    };


    handleFormSubmit = e => {
        e.preventDefault();
        API.getByName(this.state.firstName)
            .then(res => console.log(res)
            )

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
            </Container>
        );
    }
}

export default SearchJumbo