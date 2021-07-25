import React, { useState } from "react";
import "../../../Assets/Style/Register.css";
import "../../../Assets/Style/SelectOption.scss";
import Select from "react-select";

const options = [
  { value: "مرد", label: "مرد" },
  { value: "زن", label: "زن" },
];

const Register = () => {
  const [openGender, SetOpenGender] = useState(null);
  const handleChange = (selectedOption) => {
    SetOpenGender({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
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
        <div className="grid mt-sm khat w-100s grid-cols-1">
          <div>
            <label className="text-white">جـنسیـت</label>
            <br />
            <Select
              className="SelectOptionContainer1"
              classNamePrefix="SelectOption1"
              value={openGender}
              onChange={handleChange}
              options={options}
            />
          </div>
        </div>{" "}
        <div className="grid mt-sm khat w-100s grid-cols-3 ">
          <div>
            <label className="text-white">تـاریـخ تـولـد</label>
            <br />
            <Select
              className="SelectOptionContainer1"
              classNamePrefix="SelectOption1"
              value={openGender}
              onChange={handleChange}
              options={options}
            />
          </div>
          <div className="mr-ssm">
            <br />
            <Select
              className="SelectOptionContainer1"
              classNamePrefix="SelectOption1"
              value={openGender}
              onChange={handleChange}
              options={options}
            />
          </div>
          <div className="mr-ssm">
            <br />
            <Select
              className="SelectOptionContainer1"
              classNamePrefix="SelectOption1"
              value={openGender}
              onChange={handleChange}
              options={options}
            />
          </div>
        </div>
        <div className="grid mt-sm khat w-100s grid-cols-3 ">
          <div>
            <label className="text-white"> زبـان‌هـا</label>
            <br />
            <Select
              className="SelectOptionContainer1"
              classNamePrefix="SelectOption1"
              value={openGender}
              onChange={handleChange}
              options={options}
            />
          </div>
          <div className="mr-ssm">
            <br />
            <Select
              className="SelectOptionContainer1"
              classNamePrefix="SelectOption1"
              value={openGender}
              onChange={handleChange}
              options={options}
            />
          </div>
          <div className="mr-ssm">
            <br />
            <Select
              className="SelectOptionContainer1"
              classNamePrefix="SelectOption1"
              value={openGender}
              onChange={handleChange}
              options={options}
            />
          </div>
        </div>
        <div className="grid mt-sm w-100s grid-cols-3 ">
          <div>
            <label className="text-white"> مـوقعیـت مکـانـی</label>
            <br />
            <Select
              className="SelectOptionContainer1"
              classNamePrefix="SelectOption1"
              value={openGender}
              onChange={handleChange}
              options={options}
            />
          </div>
          <div className="mr-ssm">
            <br />
            <Select
              className="SelectOptionContainer1"
              classNamePrefix="SelectOption1"
              value={openGender}
              onChange={handleChange}
              options={options}
            />
          </div>
          <div className="mr-ssm">
            <br />
            <Select
              className="SelectOptionContainer1"
              classNamePrefix="SelectOption1"
              value={openGender}
              onChange={handleChange}
              options={options}
            />
          </div>
        </div>
        <div className="grid khat grid-cols-1">
          <br />
          <input
            type="password"
            placeholder="Neighborhood  |  محـلـه"
            className="mt-ssm register-input"
          />
        </div>
        <div className="grid khat mt-sm w-100s grid-cols-3">
          <div className="col-span-2">
            <label className="text-white mb-ssm"> سـاز اصـلی</label>
            <br />
            <Select
              className="SelectOptionContainer1"
              classNamePrefix="SelectOption1"
              value={openGender}
              onChange={handleChange}
              options={options}
            />
          </div>
          <div className="col-span-1 mr-ssm">
            <label className="text-white mb-ssm"> سـطح</label>
            <br />
            <Select
              className="SelectOptionContainer1"
              classNamePrefix="SelectOption1"
              value={openGender}
              onChange={handleChange}
              options={options}
            />
          </div>
        </div>
        <div className="grid mt-sm khat w-100s grid-cols-1">
          <div>
            <label className="text-white">تـاریـخ شـروع</label>
            <br />
            <Select
              className="SelectOptionContainer1"
              classNamePrefix="SelectOption1"
              value={openGender}
              onChange={handleChange}
              options={options}
            />
          </div>
        </div>{" "}
        <div className="grid mt-sm w-100s grid-cols-3 ">
          <div>
            <label className="text-white"> سـبـک‌هـا</label>
            <br />
            <Select
              className="SelectOptionContainer1"
              classNamePrefix="SelectOption1"
              value={openGender}
              onChange={handleChange}
              options={options}
            />
          </div>
          <div className="mr-ssm">
            <br />
            <Select
              className="SelectOptionContainer1"
              classNamePrefix="SelectOption1"
              value={openGender}
              onChange={handleChange}
              options={options}
            />
          </div>
          <div className="mr-ssm">
            <br />
            <Select
              className="SelectOptionContainer1"
              classNamePrefix="SelectOption1"
              value={openGender}
              onChange={handleChange}
              options={options}
            />
          </div>
        </div>
        <div className="grid mt-sm w-100s grid-cols-3 ">
          <div className="row">
            <div className="col-lg-12">
              <label className="text-white"> سـبـک‌هـا</label>
            </div>
            <div className="col-lg-12">
              <textarea className="register-input"></textarea>
            </div>
          </div>
        </div>
        <div className="grid khat grid-cols-1">
          <label className="text-white">کـد مـرجـع</label>
          <br />
          <input
            type="password"
            placeholder="Reference Code?"
            className="mt-ssm register-input"
          />
        </div>
        <button className="bg-a88355 mt-sm registerbtn-padding rounded-md text-16 shadow-md text-ffffcf">
          Fast Subscription | عـضویـت سـریـع
        </button>
      </div>
    </div>
  );
};

export default Register;
