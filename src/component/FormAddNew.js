import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const FormAddNew = (props) => {

    return (
        <>
            <Container>
                <br />
                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type='password' rows={3} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Username: </Form.Label>
                        <Form.Control type='text' rows={3} />
                    </Form.Group>
                    <Button variant="primary">Create</Button>
                </Form>
            </Container>
        </>
    )

}
export default FormAddNew;