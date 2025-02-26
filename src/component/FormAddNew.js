import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { createNewUserRedux } from '../action/actions';
import { useDispatch, useSelector } from 'react-redux';

const FormAddNew = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();
    const isCreating = useSelector(state => state.user.isCreating);
    const handleCreateNewUser = () => {

        dispatch(createNewUserRedux(email, password, username));
        setEmail('');
        setPassword('');
        setUsername('');
    }


    return (
        <>
            <Container>
                <br />
                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={email}
                            onChange={(event) => setEmail(event.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type='password' rows={3}
                            value={password}
                            onChange={(event) => setPassword(event.target
                                .value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Username: </Form.Label>
                        <Form.Control type='text' rows={3}
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </Form.Group>
                    <Button disabled={isCreating} onClick={() => handleCreateNewUser()} variant="primary">Create</Button>
                </Form>
            </Container>
        </>
    )

}
export default FormAddNew;