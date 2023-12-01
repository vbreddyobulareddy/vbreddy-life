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
      mobile: "",
      context: "",
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
      context: yup.string().required("Please give the context"),
    }),
  });
  return (
    <>
      <div className="form-control w-full m-2">
        <label
          for="name"
          class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Name"
            class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />

          <span class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
            Name
          </span>
        </label>
        <label className="label">
          <span className="font-eurostile text-[#dc3545] label-text-alt">
            {formik?.errors?.name}
          </span>
        </label>
      </div>
      <div className="form-control w-full m-2">
        <label
          for="email"
          class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Email"
            class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />

          <span class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
            Email
          </span>
        </label>
        <label className="label">
          <span className="font-eurostile text-[#dc3545] label-text-alt">
            {formik?.errors?.email}
          </span>
        </label>
      </div>
      <div className="form-control w-full m-2">
        <label
          for="mobile"
          class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formik.values.mobile}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Mobile"
            class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />

          <span class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
            Mobile
          </span>
        </label>
        <label className="label">
          <span className="font-eurostile text-[#dc3545] label-text-alt">
            {formik?.errors?.mobile}
          </span>
        </label>
      </div>
      <div className="form-control w-full m-2">
        <label
          for="context"
          class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <textarea
            placeholder="context"
            class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            id="context"
            name="context"
            value={formik.values.context}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <span class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
            context
          </span>
        </label>
        <label className="label">
          <span className="font-eurostile text-[#dc3545] label-text-alt">
            {formik?.errors?.context}
          </span>
        </label>
      </div>
      <div className="form-control w-full m-2">
        <div className="flex justify-around w-full">
          <div className="w-full">
            <a
              className="btn bg-[#6c757d] hover:text-[#000] border-[#6c757d] w-1/2 text-white"
              href="/"
            >
              Cancel
            </a>
          </div>
          <button
            className="btn btn-primary w-1/2"
            disabled={
              !formik.isValid ||
              Object.keys(formik.touched).length === 0 ||
              Object.keys(formik.errors).length > 0
            }
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default LetsConnectComponent;
