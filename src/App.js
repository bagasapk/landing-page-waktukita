import logo1 from "./logo1.svg";
import "./App.css";
import "./register.css";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      {/* <Navbar bg="dark"> */}
        <div className="registerContainer">
          <div className="navbarRegister">
            <img src={logo1}></img>
            <div className="col-lg-6">
              <div className="buttonFlexNav">
                <span
                  style={{ color: "#404041", opacity: "0.5" }}
                  className="textButton "
                >
                  Register Sebagai ?
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
      {/* </Navbar> */}
    </div>
  );
}

export default App;
