import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

const Form = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const endPoint = "http://localhost:3002/user";

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: (value) => {
      console.log(value);
      axios
        .post(endPoint, value)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // validate: (value) => {
    //   let errors = {};

    //   if (value.username == "") {
    //     errors.username = "This input cannnot be empty";
    //   }
    //   if (value.email == "") {
    //     errors.email = "This email cannnot be empty";
    //   }
    //   if (emailRegex.test(value.email)) {
    //     errors.email = "Invaild email";
    //   }
    //   if (value.password == "") {
    //     errors.password = "This password cannnot be empty";
    //   }
    //   return errors;
    // },

    validationSchema: yup.object({
      username: yup
        .string()
        .required("This input cannnot be empty")
        .min(5, "username cannot be less than 5"),
      email: yup
        .string()
        .email("Invaild email")
        .required("email cannot be empty"),
      password: yup
        .string()
        .required("Password cannot be empty")
        .matches(
          `^(?=.*[A-Z])(?=.*?[0-9])(?=.*[#?!@$ %^&*-])`,
          "Your Password much have aleast one uppercase,charater, number"
        ),
    }),
  });

  console.log(formik);

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="w-50 mx-auto py-20 px-20">
        <h1 className="text-center">Registration</h1>
        <div className="form-group">
          <label htmlFor="">UserName</label>
          <input
            name="username"
            className="form-control"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
          />
          {formik.touched.username && formik.errors.username ? (
            <small className="text-danger">{formik.errors.username}</small>
          ) : (
            ""
          )}{" "}
        </div>
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input
            name="email"
            className="form-control"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="email"
          />
          {formik.touched.email && formik.errors.email ? (
            <small className="text-danger">{formik.errors.email}</small>
          ) : (
            ""
          )}{" "}
        </div>
        <div className="form-group">
          <label htmlFor="">Password</label>
          <input
            name="password"
            className="form-control"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="password"
          />
          {formik.touched.password && formik.errors.password ? (
            <small className="text-danger">{formik.errors.password}</small>
          ) : (
            ""
          )}
        </div>

        <div className="w-50 mx-auto mt-4 h-50  ">
          <button className="border-0 w-50 h-50 bg-info" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
