import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'


const FormModal = (props) => {

    const [show,setShow] = useState(false)

    const handleClose = () => setShow(false) 


    return (
        <>
            {console.log('form modal')}
            {props.show ? setShow(true) : setShow(false)}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.header}</Modal.Title>
                </Modal.Header>
            </Modal>
        </>
        
    )
}

export default FormModal