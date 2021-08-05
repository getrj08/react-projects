import React from 'react'
import { Card, ListGroup } from 'react-bootstrap';


const LoanRequestComponent = (props) => {

    const data = props.data;

    return (
    <>
        <Card bg="info" style = {{width : "400px", margin:"5px", top : "10px"}}>    
                    <Card.Body> 
                        <Card.Title>Loan Request Data</Card.Title>
                        <Card.Text>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item variant="success">Amount : {data.loanAmount}</ListGroup.Item>
                                <ListGroup.Item variant="success">Tenure : {data.duration}</ListGroup.Item>
                                <ListGroup.Item variant="success">Rate of Interest : {data.nominalRate}</ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                    </Card.Body>
                </Card>
    </>
    )
}

export default LoanRequestComponent