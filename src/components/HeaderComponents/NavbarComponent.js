import React from 'react'
import logo from '../../images/logo_rj.png'
import { Navbar , Nav , Form , FormControl} from 'react-bootstrap'

const NavbarComponent = () => {
    return (
    <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">
            <img
                alt=""
                src={logo}
                width="60"
                height="50"
                className="d-inline-block align-top"
            />{' '}
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/" style={{"color" : "cyan" , "fontSize" : "xx-large"}}>Loan Calculator</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            </Form>
        </Navbar>
    </>
    )
}

export default NavbarComponent