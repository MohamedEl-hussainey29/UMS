import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaSearch } from "react-icons/fa";
import { CiBellOn } from 'react-icons/ci';

export default function NavBar() {

  return (
    <Navbar expand="md" className="bg-body-tertiary">

      <Container fluid>
        <Navbar.Brand className='fw-bolder navbarLogo'>UMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <InputGroup className="ms-auto mt-2" style={{width:"250px"}}>
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <InputGroup.Text>
              <FaSearch className='text-secondary'/>
            </InputGroup.Text>
            <CiBellOn size={30} className='text-secondary mx-3'/>
          </InputGroup>
        </Navbar.Collapse>
      </Container>

    </Navbar>
  )
}
