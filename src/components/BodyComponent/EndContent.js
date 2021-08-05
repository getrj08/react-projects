import React from 'react'
import { Container, Row , Col } from 'react-bootstrap'
import LoanRequestComponent from './LoanRequestComponent'
import LoanGraphContents from './LoanGraphContents'


const EndContent = (props) => {

    function buildContent() {
        
        return (
                <>
                    <Container>
                        <Row>
                            <Col><LoanRequestComponent data={props.data.loanRequest} /></Col>
                            <Col>Pie chart</Col>
                        </Row>
                    </Container>
                    
                    <LoanGraphContents data={props.data.loanData} loanRequest={props.data.loanRequest} />
                </>
        )
    }

    return (
        <>
            {props.showValues ? buildContent() : null}

        </>
    )
}

export default EndContent