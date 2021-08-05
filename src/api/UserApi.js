import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'

export default function UserApi(props) {

    const [users, setUsers] = useState()

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
            const usersResponse = res.data;
            setUsers(usersResponse)
        })
    } , [])

    return (
        <div>
            <Table striped bordered hover variant='dark' size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users && 
                        users.map((user) => {
                        let {id , name , username, email} = user;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{username}</td>
                                <td>{email}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    )
}