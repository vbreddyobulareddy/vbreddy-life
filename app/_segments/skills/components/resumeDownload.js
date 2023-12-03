"use client";
import * as yup from "yup";
import { useFormik } from "formik";
import { postMutationOfResumeContacts } from "@/app/_client-service/resumeContacts";
import { useContext } from "react";
import { ContextEntity } from "@/app/context";

const ResumeDownloadComponent = () => {
  const contextProviderEntity = useContext(ContextEntity);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (payload) => {
      console.log("---== Send Resume ==--");
      contextProviderEntity.setLoading(true);
      await postMutationOfResumeContacts({ email: payload.email });
      contextProviderEntity.setLoading(false);
      contextProviderEntity.toastMessage({
        message: `Resume sent successfully`,
        type: "alert-info",
      });
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
            onClick={formik.handleSubmit}
            className="btn btn-primary join-item rounded-r-full dark:text-[#fff] dark:disabled:text-[#fff]"
          >
            Send Resume.
          </button>
        </div>
      </div>
    </>
  );
};

export default ResumeDownloadComponent;
