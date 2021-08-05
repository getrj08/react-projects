import React, {useState} from "react";
import ReactDOM from 'react-dom';
import { Container , Row , Col ,Nav, Modal} from "react-bootstrap";
import '../MenuComponents/sidebarcomponent.css'
import EndContent from "../BodyComponent/EndContent";
import FormModal from "../BodyComponent/FormModal";
import LoanComponent from "../BodyComponent/LoanComponent";

const Dashboard = () => {

    return (
        <>         
            <LoanComponent />
        </>
    )
}

export default Dashboard