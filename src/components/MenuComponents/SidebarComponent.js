import React, { useEffect, useState } from "react";
import {Nav} from "react-bootstrap";
//import './sidebarcomponent.css'



const SidebarComponent = () => {

    return (
        <>
            <Nav className="col-md-12 d-none d-md-block"
                activeKey="/home"
                onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <Nav.Item>
                    <Nav.Link href="/home">Home Loan</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/car">Car Loan</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/personal">Personal</Nav.Link>
                </Nav.Item>
            </Nav>
          
        </>
    )
}

export default SidebarComponent