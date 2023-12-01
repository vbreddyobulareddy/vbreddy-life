"use client";
import * as yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
const ResumeDownloadComponent = () => {
  const [submitted, setSubmitted] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: () => {
      setSubmitted(true);
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Must be a valid email")
        .required("Email is required"),
    }),
  });
  const isInvalid =
    !formik.isValid ||
    Object.keys(formik.touched).length === 0 ||
    Object.keys(formik.errors).length > 0;
  return (
    <>
      <div className="flex justify-center mt-4 pt-4 w-full dark:bg-[#fff] dark:text-[#121c24]">
        <div className="join md:w-1/2">
          <input
            className={`input input-bordered join-item w-full ${
              formik?.errors?.email ? "border-[#dc3545]" : ""
            }  dark:bg-[#fff] dark:text-[#121c24]`}
            placeholder="Enter your email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <button
            disabled={isInvalid}
            className="btn btn-primary join-item rounded-r-full dark:text-[#fff] dark:disabled:text-[#fff]"
          >
            Resume Download
          </button>
        </div>
      </div>
    </>
  );
};

export default ResumeDownloadComponent;
