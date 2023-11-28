"use client";
import * as yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
const LetsConnectComponent = () => {
  const [submitted, setSubmitted] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
    onSubmit: () => {
      setSubmitted(true);
    },
    validationSchema: yup.object({
      name: yup.string().trim().required("Name is required"),
      email: yup
        .string()
        .email("Must be a valid email")
        .required("Email is required"),
    }),
  });
  return (
    <>
      <div className="form-control w-full m-2">
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <label className="label">
          <span className="font-eurostile text-[#dc3545] label-text-alt">
            {formik?.errors?.name}
          </span>
          <span className="font-eurostile text-[#dc3545] label-text-alt">
            *
          </span>
        </label>
      </div>
      <div className="form-control w-full m-2">
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <label className="label">
          <span className="font-eurostile text-[#dc3545] label-text-alt">
            {formik?.errors?.email}
          </span>
          <span className="font-eurostile text-[#dc3545] label-text-alt">
            *
          </span>
        </label>
      </div>
      <div className="form-control w-full m-2">
        <input
          type="text"
          placeholder="Mobile"
          className="input input-bordered w-full"
          id="mobile"
          name="mobile"
          value={formik.values.mobile}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      <div className="form-control w-full m-2">
        <button
          className="btn btn-primary"
          disabled={
            !formik.isValid ||
            Object.keys(formik.touched).length === 0 ||
            Object.keys(formik.errors).length > 0
          }
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default LetsConnectComponent;
