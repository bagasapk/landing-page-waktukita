import React from "react";
import { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo1 from "../../resources/images/logo1.svg";

class NavbarEducator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
  }

  // const [visible, setVisible] = useState(false);
  componentDidMount() {
    document.addEventListener("click", this.documentHandler, true);
  }
  
  componentWillUnmount() {
    document.removeEventListener("click", this.documentHandler, true);
  }

  documentHandler = (e) => {
    const container = this.element;
    if (
      e.target !== container &&
      !container.contains(e.target) &&
      this.state.visible === true
    ) {
      this.setState({ visible: false });
      // setVisible(visible ? false : false);
    }
  };
  render() {
    const clickHandler = () => {
      if (this.state.visible === false) {
        this.setState({ visible: true });
      } else {
        this.setState({ visible: false });
      }
    };

    return (
      <div ref={(c) => (this.element = c)} className="navbarWaktuKita">
        <div className="loginContainer">
          <Navbar
            expanded={this.state.visible}
            expand="lg"
            className="pl-0 pl-md-0 px-lg-5 pr-3 pr-lg-0 navbarLogin"
          >
            {/* <div className="pl-5 ml-lg-5 navbar navbar-expand-md navbarLogin"> */}
            <div className="pl-5 pl-lg-0">
              <a href="/" style={{opacity:'1'}}><img className="logoScale" alt="logo" src={logo1}></img></a>
            </div>
            {/* <div className="d-flex col-md-10 justify-content-around"> */}
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={clickHandler}
            />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="px-5 py-3 py-lg-0 px-lg-0"
              style={{ zIndex: "1", backgroundColor: "white" }}
            >
              <Nav className="ml-lg-auto col-lg-7 col-xl-4 justify-content-between navColor text-left p-0 align-items-lg-baseline">
                <span
                  style={{ color: "#404041", opacity: "0.5" }}
                  className="textButton"
                >
                  Ingin menjadi educator ?
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/register/educator";
                  }}
                  className="m-md-1 my-2 my-lg-0 px-lg-5 navButton Secondary"
                >
                  <span className="textButton d-flex justify-content-center">
                    Daftar sekarang
                  </span>
                </button>
              </Nav>
            </Navbar.Collapse>
            {/* </div> */}
          </Navbar>
        </div>
      </div>
    );
  }
}
export default NavbarEducator;
