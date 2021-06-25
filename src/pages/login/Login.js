import React, { useRef, useState } from "react";
import { withRouter } from "react-router";
import NavbarLogin from "./navbar/navbar";
import hide from "../../resources/symbols/hide.svg";
import symbol from "../../resources/symbols/XMLID1386(active).svg";
import fbSymbol from "./facebook.svg";
import googleSymbol from "./google.svg";
import "./testcss.css";
import "./login1.css";
import "./login.css";
import authService from "../../services/auth.service";

//Login
// import ReactDOM from 'react-dom';
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

const responseGoogleFailure = (response) => {
  console.log("Login Gagal :", response);
};

const clientId =
  "123329037849-o2qjarpmvrpn7r9ue1b99hskvmaj1r2i.apps.googleusercontent.com";
const responseFacebook = (response) => {
  console.log(response);
};

const Login = (props) => {
  const responseGoogleSuccess = (response) => {
    console.log("Login Success :", response);
    console.log("Login Success :", response.getBasicProfile());
    console.log("ID: " + response.getBasicProfile().getId());
    console.log("Full Name: " + response.getBasicProfile().getName());
    console.log("Given Name: " + response.getBasicProfile().getGivenName());
    console.log("Family Name: " + response.getBasicProfile().getFamilyName());
    console.log("Image URL: " + response.getBasicProfile().getImageUrl());
    console.log("Email: " + response.getBasicProfile().getEmail());

    if (response.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.accessToken));
    }
    // props.history.push('/');
    // window.location.reload();
  };

  const form = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setMessage] = useState("");
  // const [loading,setLoading] = useState(false);
  // const [email,setEmail] = useState("");
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("email :", email, "password :", password);

    //   setMessage("");
    // setLoading(true);

    // form.validateAll();

    //   if (checkBtn.current.context._errors.length === 0) {
    authService.login(email, password).then(
      () => {
        props.history.push("/profile");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        // setLoading(false);
        setMessage(resMessage);
      }
    );
    //   } else {
    //     setLoading(false);
    //   }
  };

  return (
    <div>
      <div className="backgroundLogin">
        <NavbarLogin />
        <section className="login p-0">
          <div className="col-md-6"></div>
          <div className="jumbotronContainer col-md-6"></div>
          <div className="loginBox col-md-12">
            <div className="loginContainer">
              <h2 className="titleForm">Login</h2>
              <img
                className="mx-auto symbolPosition"
                alt="symbol"
                style={{ width: "20px", height: "45px" }}
                src={symbol}
              ></img>
              <form onSubmit={handleLogin} ref={form}>
                <div
                  style={{ textAlign: "left" }}
                  className="mx-auto d-flex flex-column"
                >
                  <div className="pb-3">
                    <label className="m-0">Email</label>
                    <input
                      type="email"
                      placeholder="john.doe@gmail.com"
                      value={email}
                      onChange={onChangeEmail}
                      required
                    ></input>
                  </div>
                  <div className="pb-3">
                    <label className="m-0">Kata sandi</label>
                    <input
                      id="password"
                      type={passwordShown ? "text" : "password"}
                      placeholder="************"
                      value={password}
                      onChange={onChangePassword}
                      required
                    ></input>{" "}
                    <i
                      style={{ marginLeft: "-30px", cursor: "pointer" }}
                      onClick={togglePasswordVisibility}
                    >
                      <img src={hide} alt="hide"></img>
                    </i>
                  </div>
                  <div className="pt-2"></div>
                </div>
                <button className="col-md-8 mx-auto d-flex justify-content-center Primary formButton">
                  Lanjutkan
                </button>
              </form>
              <p
                style={{ color: "#404041", fontSize: "14px" }}
                className="pt-2"
              >
                Lupa kata sandi?{" "}
                <a style={{ color: "#00A69C" }} href="/">
                  Klik disini
                </a>
              </p>
              <p style={{ color: "#404041", fontSize: "14px" }} className="">
                <a style={{ color: "#00A69C" }} href="/">
                  Registrasi
                </a>{" "}
                atau Login dengan{" "}
              </p>
              <div className="buttonFlexNav">
                {/* <button className="navButton facebookButton mb-5">
                                <span className="textButton">Facebook</span>
                                </button> */}
                <FacebookLogin
                  appId="301931954961768"
                  autoLoad={true}
                  render={(renderProps) => (
                    <button
                      className="facebookButton mb-5"
                      onClick={renderProps.onClick}
                    >
                      <img alt="facebook" className="pr-1" src={fbSymbol}></img>
                      Facebook
                    </button>
                  )}
                  // fields="name,email,picture"
                  // onClick={componentClicked}
                  callback={responseFacebook}
                />
                <GoogleLogin
                  clientId={clientId}
                  render={(renderProps) => (
                    <button
                      className="googleButton mb-5"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      <img
                        alt="google"
                        className="pr-1"
                        src={googleSymbol}
                      ></img>
                      Google
                    </button>
                  )}
                  buttonText="Login"
                  onSuccess={responseGoogleSuccess}
                  onFailure={responseGoogleFailure}
                  cookiePolicy={"single_host_origin"}
                />
                {/* <button className="navButton googleButton mb-5">
                                <span className="textButton">Google</span>
                                </button> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default withRouter(Login);
