import React from 'react'
import Table from 'react-bootstrap/Table'


const PostsTable = (props) => {

    let userposts = props.posts
    const users = props.users

    return (
    <>
        
        <Table striped bordered hover variant='dark' size="sm">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>username</th>
                        <th>Title</th>
                        <th>Content</th>
                    </tr>
                </thead>
                <tbody>
                    {userposts && 
                        userposts.map((posts) => {
                        let {id , userId , title, body} = posts;
                        let username = users[userId-1].username
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td onClick={() => alert('clicked ' + username)}>{username}</td>
                                <td>{title}</td>
                                <td>{body}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
    </>
    )
}

export default PostsTable