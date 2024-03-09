import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Navbar1 from "../../component/Navbar1/Navbar1";

const Login = () => {
  return (
    <>
          <Navbar1 />

    <div
      className="login"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={(e) => {
        e.preventDefault();
        window.location.href="/home"
      }
      }
        className="login2"
        style={{
          backgroundColor: "#000",
          width: "30%",
          borderRadius: "20px",
          boxShadow: "5px 5px 15px #9e9999",
          color: "#ffffff",
          textAlign: "center",
          padding: "20px",
          margin: "50px",
        }}
      >
        <h1> Welcome Back! </h1>
        <div>
          <p style={{ opacity: ".7" }}> welcome back we missed you</p>
          <label htmlFor="email" style={{ textAlign: "end", display: "flex" }}>
            {" "}
            Email{" "}
          </label>{" "}
          <br />
          <input
            type="email"
            name=""
            id=""
            style={{
              width: "100%",
              height: "30px",
              backgroundColor: "#151516",
              border: "none",
              borderRadius: "10px",
              outline: "none",
              color: "#fff",
            }}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mt-5">
          <label
            htmlFor="password"
            style={{ textAlign: "end", display: "flex" }}
          >
            {" "}
            password{" "}
          </label>{" "}
          <br />
          <input
            type="password"
            name=""
            id=""
            style={{
              width: "100%",
              height: "30px",
              backgroundColor: "#151516",
              border: "none",
              borderRadius: "10px",
              outline: "none",
              color: "#fff",
            }}
            placeholder="Enter your Password"
            required
          />
        </div>

        <div style={{ textAlign: "right", margin: "20px auto" }}>
          <Link to={"#"} style={{ color: "#fff" }}>
            {" "}
            Forgot Password?{" "}
          </Link>
        </div>

        <div>
          <button
            style={{
              width: "100%",
              padding: "10px 2px",
              borderRadius: "10px",
              backgroundColor: "#fff",
              color: "#000",
            }}
          >
            {" "}
            Sign In{" "}
          </button>
        </div>
        <p> Or continue with</p>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Link to={"#"}>
            {" "}
            <img src="/google.svg" alt="" height={50} />
          </Link>
          <Link to={"#"}>
            {" "}
            <img src="/iphone icon.svg" alt="" height={57} />{" "}
          </Link>
          <Link to={"#"}>
            {" "}
            <img src="/facebook.svg" alt="" height={50} />{" "}
          </Link>
        </div>
        <p>
          {" "}
          First time here?{" "}
          <Link to={"/signup"} style={{ color: "#0f16e6" }}>
            {" "}
            Signup{" "}
          </Link>
        </p>
      </form>
    </div>
    </>
  );
};

export default Login;
