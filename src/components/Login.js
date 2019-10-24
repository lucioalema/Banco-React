import React from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'

const Login = () => (
    <div>
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={0} md={4}></Col>
                <Col xs={12} md={4} autoCapitalize>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Ingrese un mail</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col xs={0} md={4}></Col>
            </Row>
        </Container>
    </div>
);

export default Login;