import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'

export default function PhotosApi(props) {

    const [photos, setPhotos] = useState()

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos`).then((res) => {
            const photosResponse = res.data;
            setPhotos(photosResponse)
        })
    } , [])

    return (
        <div>
            <Table striped bordered hover variant='dark' size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>album Id</th>
                        <th>title</th>
                        <th>Thumbnail</th>
                    </tr>
                </thead>
                <tbody>
                {photos && 
                        photos.map((photo) => {
                        let {id , albumId , title, thumbnailUrl} = photo;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{albumId}</td>
                                <td>{title}</td>
                                <td>
                                    <img src={thumbnailUrl} alt />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    )
    
    
}

