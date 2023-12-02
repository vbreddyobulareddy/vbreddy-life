"use client";
import * as yup from "yup";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

import { postMutationOfConnection } from "@/app/_client-service/connectUsService";
import { useState } from "react";

const LetsConnectComponent = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      mobile: "",
      comment: "",
    },
    onSubmit: async (payload) => {
      setLoading(true);
      const { addNewConnect } = await postMutationOfConnection({
        name: payload.name,
        email: payload.email,
        mobile: payload.mobile,
        comment: payload.comment,
      });
      setLoading(false);
      if (addNewConnect.id) {
        router.push("/");
      }
    },
    validationSchema: yup.object({
      name: yup.string().trim().required("Name is required"),
      email: yup
        .string()
        .email("Must be a valid email")
        .required("Email is required"),
      comment: yup.string().required("Please give the comment"),
    }),
  });
  return (
    <>
      <div className="flex flex-col items-center justify-center m-4 p-4 w-full relative">
        {loading && (
          <div className="flex items-center justify-center w-full h-full z-[9999] absolute bg-[rgba(255,255,255,0.7)]">
            <span class="loading loading-spinner loading-lg"></span>
          </div>
        )}
        <div className="form-control w-full m-2 dark:bg-[#fff] dark:text-[#121c24]">
          <label
            htmlFor="name"
            className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <input
              type="text"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Name"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
              Name
            </span>
          </label>
          <label className="label">
            <span className="font-eurostile text-[#dc3545] label-text-alt">
              {formik?.errors?.name}
            </span>
          </label>
        </div>
        <div className="form-control w-full m-2 dark:bg-[#fff] dark:text-[#121c24]">
          <label
            htmlFor="email"
            className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Email"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
              Email
            </span>
          </label>
          <label className="label">
            <span className="font-eurostile text-[#dc3545] label-text-alt">
              {formik?.errors?.email}
            </span>
          </label>
        </div>
        <div className="form-control w-full m-2 dark:bg-[#fff] dark:text-[#121c24]">
          <label
            htmlFor="mobile"
            className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={formik.values.mobile}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Mobile"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
              Mobile
            </span>
          </label>
          <label className="label">
            <span className="font-eurostile text-[#dc3545] label-text-alt">
              {formik?.errors?.mobile}
            </span>
          </label>
        </div>
        <div className="form-control w-full m-2 dark:bg-[#fff] dark:text-[#121c24]">
          <label
            htmlFor="comment"
            className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <textarea
              placeholder="comment"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm pt-3"
              id="comment"
              name="comment"
              value={formik.values.comment}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
              Comment
            </span>
          </label>
          <label className="label">
            <span className="font-eurostile text-[#dc3545] label-text-alt">
              {formik?.errors?.comment}
            </span>
          </label>
        </div>
        <div className="form-control w-full m-2 dark:bg-[#fff] dark:text-[#121c24]">
          <div className="flex justify-around w-full">
            <div className="w-full">
              <a
                className="btn bg-[#6c757d] hover:text-[#000] dark:hover:text-[#fff] border-[#6c757d] w-1/2 text-white"
                href="/"
              >
                Cancel
              </a>
            </div>
            <button
              type="button"
              className="btn btn-primary w-1/2 dark:disabled:text-[#fff] dark:text-[#fff] dark:hover:text-[#fff]"
              disabled={
                !formik.isValid ||
                Object.keys(formik.touched).length === 0 ||
                Object.keys(formik.errors).length > 0
              }
              onClick={formik.handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LetsConnectComponent;
