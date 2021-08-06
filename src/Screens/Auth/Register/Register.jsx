import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "react-feather";
import Select from "react-select";
import Input from "../../../Components/Input/Input";

import RegisterStyle from "../../../Assets/Style/Register.module.scss";
import "../../../Assets/Style/SelectOption.scss";
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
  console.log(RegisterStyle.register_input);
  return (
    <div className="bg-c79c69">
      <div className={`${RegisterStyle["register-bg"]}`}>
        <div className="container py-ssm">
          <div className="lg:px-lg flex flex-col justify-content-center">
            <h2 className="text-white text-right mt-sm">هـویت | ID</h2>
            <div className={`grid ${RegisterStyle.khat} grid-cols-1 mt-sm`}>
              <div>
                <label className="text-white">نـام</label>
                <br />
                <Input
                  type="text"
                  placeholder="First Name"
                  classname={`mt-ssm ${RegisterStyle["register_input"]}`}
                />
              </div>
            </div>
            <div className={`grid mt-sm ${RegisterStyle.khat} grid-cols-1`}>
              <div>
                <label className="text-white">نـام خـانوادگـی</label>
                <br />
                <Input
                  type="text"
                  placeholder="Last Name"
                  classname={`mt-ssm ${RegisterStyle["register_input"]}`}
                />
              </div>
            </div>
            <div className={`grid ${RegisterStyle.khat} mt-sm grid-cols-1`}>
              <div>
                <label className="text-white">تلفـن همـراه</label>
                <br />
                <Input
                  type="text"
                  placeholder="Cellphone"
                  classname={`mt-ssm ${RegisterStyle["register_input"]}`}
                />
              </div>
            </div>{" "}
            <div
              className={`grid mt-sm ${RegisterStyle["field-required"]} grid-cols-1`}
            >
              <div>
                <label className={`${RegisterStyle["is-required"]} text-white`}>
                  نـام کـاربـری
                </label>
                <br />
                <Input
                  type="text"
                  placeholder="Username"
                  classname={`mt-ssm ${RegisterStyle["register_input"]}`}
                />
              </div>
            </div>
            <div
              className={`grid mt-sm ${RegisterStyle["field-required"]} grid-cols-1`}
            >
              <div>
                <label className={`${RegisterStyle["is-required"]} text-white`}>
                  پسـت الـکـتـرونیـک
                </label>
                <br />
                <Input
                  type="email"
                  placeholder="Email Address"
                  classname={`mt-ssm ${RegisterStyle["register_input"]}`}
                />
              </div>
            </div>{" "}
            <div
              className={`grid mt-sm ${RegisterStyle["field-required"]} grid-cols-1`}
            >
              <div>
                <label className={`${RegisterStyle["is-required"]} text-white`}>
                  گـذرواژه
                </label>
                <br />
                <Input
                  type="password"
                  placeholder="Password"
                  classname={`mt-ssm ${RegisterStyle["register_input"]}`}
                />
              </div>
            </div>{" "}
            <div
              className={`grid mt-sm ${RegisterStyle["field-required"]} grid-cols-1`}
            >
              <div>
                <label className={`${RegisterStyle["is-required"]} text-white`}>
                  تکـرار گـذرواژه
                </label>
                <br />
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  classname={`mt-ssm ${RegisterStyle["register_input"]}`}
                />
              </div>
            </div>{" "}
            <div className={`grid mt-sm ${RegisterStyle.khat} grid-cols-1`}>
              <div>
                <label className="text-white">جـنسیـت</label>
                <br />
                <Select
                  className="SelectOptionContainer1 mt-ssm"
                  classNamePrefix="SelectOption1"
                  value={openGender}
                  onChange={handleChange}
                  options={options}
                />
              </div>
            </div>{" "}
            <div className={`grid mt-sm ${RegisterStyle.khat} grid-cols-3`}>
              <div>
                <label className="text-white">تـاریـخ تـولـد</label>
                <br />
                <Select
                  className="SelectOptionContainer1 mt-ssm"
                  classNamePrefix="SelectOption1"
                  value={openGender}
                  onChange={handleChange}
                  options={options}
                />
              </div>
              <div className="mr-ssm">
                <br />
                <Select
                  className="SelectOptionContainer1 mt-ssm"
                  classNamePrefix="SelectOption1"
                  value={openGender}
                  onChange={handleChange}
                  options={options}
                />
              </div>
              <div className="mr-ssm">
                <br />
                <Select
                  className="SelectOptionContainer1 mt-ssm"
                  classNamePrefix="SelectOption1"
                  value={openGender}
                  onChange={handleChange}
                  options={options}
                />
              </div>
            </div>
            <div className={`grid mt-sm ${RegisterStyle.khat} grid-cols-3`}>
              <div>
                <label className="text-white"> زبـان‌هـا</label>
                <br />
                <Select
                  className="SelectOptionContainer1 mt-ssm"
                  classNamePrefix="SelectOption1"
                  value={openGender}
                  onChange={handleChange}
                  options={options}
                />
              </div>
              <div className="mr-ssm">
                <br />
                <Select
                  className="SelectOptionContainer1 mt-ssm"
                  classNamePrefix="SelectOption1"
                  value={openGender}
                  onChange={handleChange}
                  options={options}
                />
              </div>
              <div className="mr-ssm">
                <br />
                <Select
                  className="SelectOptionContainer1 mt-ssm"
                  classNamePrefix="SelectOption1"
                  value={openGender}
                  onChange={handleChange}
                  options={options}
                />
              </div>
            </div>
            <div className={`grid mt-sm ${RegisterStyle.khat} grid-cols-3`}>
              <div>
                <label className="text-white"> مـوقعیـت مکـانـی</label>
                <br />
                <Select
                  className="SelectOptionContainer1 mt-ssm"
                  classNamePrefix="SelectOption1"
                  value={openGender}
                  onChange={handleChange}
                  options={options}
                />
              </div>
              <div className="mr-ssm">
                <br />
                <Select
                  className="SelectOptionContainer1 mt-ssm"
                  classNamePrefix="SelectOption1"
                  value={openGender}
                  onChange={handleChange}
                  options={options}
                />
              </div>
              <div className="mr-ssm">
                <br />
                <Select
                  className="SelectOptionContainer1 mt-ssm"
                  classNamePrefix="SelectOption1"
                  value={openGender}
                  onChange={handleChange}
                  options={options}
                />
              </div>
            </div>
            <div className={`grid mt-sm ${RegisterStyle.khat} grid-cols-1`}>
              <br />
              <Input
                type="password"
                placeholder="Neighborhood  |  محـلـه"
                classname={`mt-ssm ${RegisterStyle["register_input"]}`}
              />
            </div>
            <div className={`grid mt-sm ${RegisterStyle.khat} grid-cols-3`}>
              <div className="col-span-2">
                <label className="text-white mb-ssm"> سـاز اصـلی</label>
                <Select
                  className="SelectOptionContainer1"
                  classNamePrefix="SelectOption1"
                  value={openGender}
                  onChange={handleChange}
                  options={options}
                />
              </div>
              <div className={`grid mr-ssm col-span-1`}>
                <label className="text-white mb-ssm"> سـطح</label>
                <Select
                  className="SelectOptionContainer1"
                  classNamePrefix="SelectOption1"
                  value={openGender}
                  onChange={handleChange}
                  options={options}
                />
              </div>
            </div>
            <div className={`grid mt-sm ${RegisterStyle.khat} grid-cols-1`}>
              <div>
                <label className="text-white">تـاریـخ شـروع</label>
                <br />
                <Select
                  className="SelectOptionContainer1 mt-ssm"
                  classNamePrefix="SelectOption1"
                  value={openGender}
                  onChange={handleChange}
                  options={options}
                />
              </div>
            </div>{" "}
            <div className={`grid mt-sm ${RegisterStyle.khat} grid-cols-3`}>
              <div>
                <label className="text-white"> سـبـک‌ هـا</label>
                <br />
                <Select
                  className="SelectOptionContainer1 mt-ssm"
                  classNamePrefix="SelectOption1"
                  value={openGender}
                  onChange={handleChange}
                  options={options}
                />
              </div>
              <div className="mr-ssm">
                <br />
                <Select
                  className="SelectOptionContainer1 mt-ssm"
                  classNamePrefix="SelectOption1"
                  value={openGender}
                  onChange={handleChange}
                  options={options}
                />
              </div>
              <div className="mr-ssm">
                <br />
                <Select
                  className="SelectOptionContainer1 mt-ssm"
                  classNamePrefix="SelectOption1"
                  value={openGender}
                  onChange={handleChange}
                  options={options}
                />
              </div>
            </div>
            <div className={`grid mt-sm ${RegisterStyle.khat} grid-cols-1`}>
              <label className="text-white">
                {" "}
                نحوه آشنایی با ما
                <HelpCircle className={`${RegisterStyle["show-help"]}`} />
              </label>
              <textarea
                placeholder="? How did you hear about us"
                className={`mt-ssm px-ssm  py-ssm h-lg ${RegisterStyle["register_input"]}`}
              ></textarea>
            </div>
            <div className={`grid mt-sm ${RegisterStyle.khat} grid-cols-1`}>
              <label className={`${RegisterStyle[""]} text-white`}>
                کـد مـرجـع
                <HelpCircle className={`${RegisterStyle["show-help"]}`} />
              </label>
              <Input
                type="password"
                placeholder="? Reference Code"
                classname={`mt-ssm ${RegisterStyle["register_input"]}`}
              />
            </div>
            <button
              className={`bg-a88355 mt-sm mx-auto ${RegisterStyle["registerbtn-padding"]} rounded-md text-16 shadow-md text-ffffcf`}
            >
              عـضویـت سـریـع | Fast Subscription
            </button>
            <div className={`text-center my-sm text-white`}>
              تکـمیـل اطـلاعـات
              <ChevronDown className={`${RegisterStyle["Completion-icon"]}`} />
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
