import logo from './logo.svg';
import './App.css';
import * as ReactBootStrap from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <ReactBootStrap.Navbar.Brand href="#home">Waktukita.com</ReactBootStrap.Navbar.Brand>
        {/* <ReactBootStrap.Navbar bg="dark">
          <ReactBootStrap.Navbar.Brand href="#home">
            <img
              src={"/logo.svg"}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </ReactBootStrap.Navbar.Brand> */}
        {/* </ReactBootStrap.Navbar> */}
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
            <ReactBootStrap.Nav.Link href="#test">Login sebagai ?</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Button variant="outline-info">Student</ReactBootStrap.Button>{' '}
            <ReactBootStrap.Button variant="info">Educator</ReactBootStrap.Button>{' '}

            {/* <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
              Educator
            </ReactBootStrap.Nav.Link> */}
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
}

export default App;
