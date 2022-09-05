import contact from "./contact.css";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="form">
            <Form formAction="https://submit-form.com/I09JH50b" >
                <Row className="g-2">
                    <Col xs={12}>
                    <h1>Let me code something for you!</h1>
                    </Col>
                    <Col md>
                    <Form.Floating className="mb-3">
                            <Form.Control
                                name="name"
                                id="floatingInputCustom"
                                type="text"
                                placeholder="Full Name"
                            />
                            <label htmlFor="floatingInputCustom">Your Name</label>
                        </Form.Floating>
                    </Col>
                    <Col>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                name="mail"
                                id="floatingInputCustom"
                                type="email"
                                placeholder="name@example.com"
                            />
                            <label htmlFor="floatingInputCustom">Email</label>
                        </Form.Floating>
                    </Col>
                    <Col>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                name="subject"
                                id="floatingInputCustom"
                                type="text"
                                placeholder="Subject"
                            />
                            <label htmlFor="floatingInputCustom">Subject</label>
                        </Form.Floating>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FloatingLabel controlId="floatingTextarea2" label="Message">
                            <Form.Control
                            name="message"
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '200px' }}
                            />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className="send">
                    <Col xs={2} md={4} lg={2}>
                        <Button  className="send" variant="outline-dark" type="submit">Send</Button>
                    </Col>
                </Row>
            </Form>
            </div>
        </div>
    )
}

export default Contact;
