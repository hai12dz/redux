
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import { use, useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from '../action/actions';

const TableUser = (props) => {
    // const [listUser, setListUser] = useState([]);

    // const fetchAllUser = async () => {
    //     const res = await axios.get('http://localhost:8080/users/all');
    //     const data = res && res.data ? res.data : [];
    //     setListUser(data);
    // }
    const listUser = useSelector(state => state.user.listUser);

    const dispatch = useDispatch();

    const handleDeleteUser = async (id) => {
        const res = await axios.post(`http://localhost:8080/users/delete/${id}`);
        if (res && res.data) {
            fetchAllUsers();
        }
    }
    useEffect(() => {
        // fetchAllUser();
        dispatch(fetchAllUsers());

    }, []);
    return (
        <>
            <Container>
                <hr />

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUser && listUser.length > 0 && listUser.map((item, index) => {
                            return (
                                <tr key={`user-${index}`}>
                                    <td>{index + 1}</td>
                                    <td>{item.email}</td>

                                    <td>{item.username}</td>
                                    <td>
                                        <button className="btn btn-danger"
                                            onClick={() => {
                                                handleDeleteUser(item.id);
                                            }}
                                        >Delete</button>
                                        <button className="btn btn-primary">Edit</button>

                                    </td>
                                </tr>
                            );
                        })}


                    </tbody>
                </Table>
            </Container>
        </>
    )

}
export default TableUser;