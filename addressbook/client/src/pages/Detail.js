import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Detail extends Component {
    state = {
        //establish state as contact object
        contact: {}
    };

    componentDidMount() {
        API.getContact(this.props.match.params.id)
            .then(res => this.setState({ contact: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>
                                {this.state.contact.lastName}
                                {this.state.contact.firstName}
                                {this.state.contact.email}
                                {this.state.contact.phoneNumber}
                                {this.state.contact.birthDate}
                                {this.state.contact.address}
                                {this.state.contact.notes}
                            </h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-2">
                        <Link to="/">← Back to Address Book</Link>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Detail;