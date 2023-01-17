import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const Register = () => {

  const [name, setName] = useState('')
  const [nameErr, setNameErr] = useState('')

  const [email, setEmail] = useState('')
  const [emailErr, setEmailErr] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    {
      name.trim() == '' ? setNameErr('Name is Required.') : setNameErr('')
    }
    {
      email.trim() == '' ? setEmailErr('Email is Required.') : setEmailErr('')
    }
  }

  return (
    <>
      <Form onSubmit={submitHandler}>
        <Row>
          <Col lg={6} xs={12} md={6}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="john Doe" className={`${nameErr ? 'border-danger' : 'border-primary'}`} onChange={e => setName(e.target.value)} />
              { !nameErr ? null : <i>{nameErr}</i> }
            </Form.Group>
          </Col>

          <Col lg={6} xs={12} md={6}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="john Doe" className={`${emailErr ? 'border-danger' : 'border-primary'}`} onChange={e => setEmail(e.target.value)} />
            { !emailErr ? null : <i>{emailErr}</i> }
          </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit"> Submit </Button>
      </Form>
    </>
  );
};

export default Register;
