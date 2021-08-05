import React from 'react'
import ReactDom from 'react-dom'
import Table from 'react-bootstrap/Table'

const ScoreTable = (props) => {

    let users = props.users
    console.log('score table api usrs')
    console.log(props.users)

    return (
    <>
        <Table striped bordered hover variant='dark' size="sm">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {users && 
                        users.map((user) => {
                        let {id , name , username, website} = user;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{username}</td>
                                <td>{website}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
    </>
    )
}

export default ScoreTable