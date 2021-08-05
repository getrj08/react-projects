import React,{useEffect, useReducer, useState} from 'react'
import { Container , Row , Col ,Nav, Modal , Form, Button } from "react-bootstrap";
import ReactDOM from 'react-dom';
import '../MenuComponents/sidebarcomponent.css'
import EndContent from './EndContent';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios'
import getLoanDetailsData from '../../actions/loanActions'
import loanReducer from '../../reducers/loanReducer';

const LoanComponent = () => {

    const [show, setShow] = useState(false);
    const [modelHeader , setModelHeader] = useState('')
    const [amount,setAmount] = useState(0)
    const [roi, setRoi] = useState(0.0)
    const [tenure , setTenure] = useState(1)
    const [dateValue , setDateValue] = useState(new Date())
    const [loanDetails, dispatch] = useReducer(loanReducer,{})

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const selectedTab = (value) => {
        setModelHeader(value + ' loan calculator')
        handleShow()
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const vLoanDetails = {
            loanAmount : amount,
            nominalRate : roi,
            duration : tenure*12,
            startDate : dateValue.toISOString().substring(0,19) + "Z",
        }
        loanDetails.loanRequest = vLoanDetails;
        getLoanDetailsData(vLoanDetails,dispatch);
        setAmount(0)
        setRoi(0.0)
        setTenure(1)
        setDateValue(new Date());
        handleClose()
        
    }

    const buildModel = () => {
    
        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{modelHeader}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={(e) => handleSubmit(e)} id="loanFormId">
                    <Form.Group controlId="idloanValue">
                        <Form.Label>Amount (Numbers only)</Form.Label>
                        <Form.Control type="text" name="loan-amount" value={amount}
                         placeholder="Enter Amount" onChange={(e) => setAmount(e.target.value)} 
                         pattern="[0-9]*"/>
                    </Form.Group>
                    <Form.Group controlId="idRoiValue">
                        <Form.Label>Rate of Interest (eg : 05.00)</Form.Label>
                        <Form.Control type="text" name="roi" value={roi}
                         placeholder="Enter Rate of Interest" onChange={(e) => setRoi(e.target.value)} 
                         pattern="[0-9]{1,2}.[0-9]{1,2}"/>
                    </Form.Group>
                    <Form.Group controlId="idYearValue">
                        <Form.Label>Loan Tenure (Number of years only. Minimum 1)</Form.Label>
                        <Form.Control type="text" name="tenure" value={tenure}
                         placeholder="Enter Loan Tenure" onChange={(e) => setTenure(e.target.value)} 
                         pattern="[1-9]{1}[0-9]*"/>
                    </Form.Group>
                    <Form.Group controlId="idDatePicker">
                        <Form.Label>Loan Start Date</Form.Label>
                        <Calendar  onChange={(e) => setDateValue(e)}
                          value={dateValue} 
                        />
                        
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
				</Form>
				
			</Modal.Body>
            </Modal>
        )
    }


    return (
    <>
        {buildModel()}
        <Container fluid>
                <Row>
                    <Col xs={4} id="home-wrapper">      
                        <Nav.Item >
                            <Nav.Link href="#" 
                            eventKey='Home'
                            value='home'
                            style={{"color" : "green" , "fontWeight": "bold" , "fontSize" : "x-large"}}
                            onSelect={(selectedKey) => selectedTab(selectedKey)}
                            >Home Loan</Nav.Link>
                        </Nav.Item>
                    </Col>
                    <Col xs={4} id="car-wrapper">      
                        <Nav.Item>
                            <Nav.Link href="/car" style={{"color" : "green" , "fontWeight": "bold" , "fontSize" : "x-large"}}>Car Loan</Nav.Link>
                        </Nav.Item>
                    </Col>
                    <Col xs={4} id="personal-wrapper">      
                        <Nav.Item>
                            <Nav.Link href="/personal" style={{"color" : "green" , "fontWeight": "bold" , "fontSize" : "x-large"}}>Personal Loan</Nav.Link>
                        </Nav.Item>
                    </Col>
                </Row>

            </Container>
            <div id='loanDataValues'>
            {loanDetails.showValues ? 
                        <EndContent showValues = {loanDetails.showValues} data={loanDetails}/> 
                        : null
            }
            </div>
            
            
            
    </>)
}

export default LoanComponent