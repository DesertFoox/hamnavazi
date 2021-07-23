import React, { Component } from "react";
import "../../../Assets/Style/Register.css";

const Register = () => {
  return (
    <div className="bg-c79c69">
      <div className="container grid justify-items-center">
        <h2 className="text-white text-right mt-sm">هـویت | ID</h2>
        <div className="grid khat grid-cols-1 mt-sm">
          <div>
            <label className="text-white">نـام</label>
            <br />
            <input
              type="text"
              placeholder="First Name"
              className="mt-ssm register-input"
            />
          </div>
        </div>
        <div className="grid mt-sm khat grid-cols-1">
          <div>
            <label className="text-white">نـام خـانوادگـی</label>
            <br />
            <input
              type="text"
              placeholder="Last Name"
              className="mt-ssm register-input"
            />
          </div>
        </div>
        <div className="grid khat mt-sm grid-cols-1">
          <div>
            <label className="text-white">تلفـن همـراه</label>
            <br />
            <input
              type="text"
              placeholder="Cellphone"
              className="mt-ssm register-input"
            />
          </div>
        </div>{" "}
        <div className="grid mt-sm khat grid-cols-1">
          <div>
            <label className="text-white">نـام کـاربـری</label>
            <br />
            <input
              type="text"
              placeholder="Username"
              className="mt-ssm register-input"
            />
          </div>
        </div>
        <div className="grid mt-sm khat grid-cols-1">
          <div>
            <label className="text-white">پسـت الـکـتـرونیـک</label>
            <br />
            <input
              type="email"
              placeholder="Email Address"
              className="mt-ssm register-input"
            />
          </div>
        </div>{" "}
        <div className="grid mt-sm khat grid-cols-1">
          <div>
            <label className="text-white">گـذرواژه</label>
            <br />
            <input
              type="password"
              placeholder="Password"
              className="mt-ssm register-input"
            />
          </div>
        </div>{" "}
        <div className="grid mt-sm khat grid-cols-1">
          <div>
            <label className="text-white">تکـرار گـذرواژه</label>
            <br />
            <input
              type="password"
              placeholder="Confirm Password"
              className="mt-ssm register-input"
            />
          </div>
        </div>{" "}
        <div className="grid mt-sm khat grid-cols-1">
          <div>
            <label className="text-white">جـنسیـت</label>
            <br />
            <input
              type="select"
              placeholder="Gender"
              className="mt-ssm register-input"
            />
          </div>
        </div>{" "}
        <div className="grid grid-cols-3"></div>
        <div className="grid grid-cols-3">
          <div className="col-span-2">wqe</div>
          <div className="col-span-1">qwe</div>
        </div>
        <button className="bg-a88355 mt-sm registerbtn-padding rounded-md text-16 shadow-md text-ffffcf">
          Fast Subscription | عـضویـت سـریـع
        </button>
      </div>
    </div>
  );
};

export default Register;
