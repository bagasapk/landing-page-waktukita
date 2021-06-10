import logo from './logo.svg';
import logo1 from "./resources/images/logo1.svg";
import "./register.css";
import './App.css';
import * as ReactBootStrap from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      {/* <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="white" variant="light">
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
        {/* <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
            <ReactBootStrap.Nav.Link href="#test">Login sebagai ?</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Button variant="outline-info">Student</ReactBootStrap.Button>{' '}
            <ReactBootStrap.Button variant="info">Educator</ReactBootStrap.Button>{' '} */}

            {/* <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
              Educator
            </ReactBootStrap.Nav.Link> */}
          {/* </ReactBootStrap.Nav> */}
        {/* </ReactBootStrap.Navbar.Collapse> */}
      {/* </ReactBootStrap.Navbar> */}
      <div className="registerContainer">
          <div className="navbarRegister">
            <img src={logo1}></img>
            <div className="col-lg-6">
              <div className="buttonFlexNav">
                <span
                  style={{ color: "#404041", opacity: "0.5" }}
                  className="textButton "
                >
                  Login Sebagai ?
                </span>
                <div className="col-lg-6">
                  <div className="buttonFlexNav">
                    <button className="navButtonPrimary1">
                      <span style={{ color: "#00A69C" }} className="textButton">
                        Student
                      </span>
                    </button>
                    <button className="navButtonPrimary2">
                      <span style={{ color: "#FFF" }} className="textButton">
                        Educator
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <section className="login">
        <div className="loginContainer">
          <h1>Login</h1>
          <label>Email</label>
          <input
            type="text"
            autoFocus
            required
          />
          <label>Kata Sandi</label>
          <input type="password" required/>
          <button>Login</button>
        </div>
      </section>
    
    </div>
  );
}

export default App;
