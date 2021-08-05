import React, { useEffect,useState } from 'react'
import ReactDOM  from 'react-dom'
import { takeUntil } from 'rxjs/operators'
import PostsTable from '../components/PostsTable'


const PostsObserver = (props) => {

    const [postsCount , setPostsCount] = useState(0)
    const [postsList , setPostsList]   = useState([]) 
    const [usersList , setUsersList]   = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(res => {
            res.json()
            .then((posts) => {
                console.log(posts.length)
                setPostsCount(posts.length)
            })
        })
    },[])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/').then(res => {
            res.json()
            .then((users) => {
                console.log(users.length)
                setUsersList(users)
            })
        })
    },[])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(res => {
            res.json()
            .then((posts) => {
                //console.log(posts.length)
                setPostsList(posts)
            })
        })
    },[])

    return (
        <>
            TotalPosts : {postsCount}
            <PostsTable posts = {postsList} users = {usersList} />
        </>
    )
}

export default PostsObserver