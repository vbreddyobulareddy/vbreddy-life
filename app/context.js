"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { createContext, useState } from "react";

export const ContextEntity = createContext(null);

const ContextEntityProvider = ({ children }) => {
  const router = useRouter();
  const [state, setState] = useState({ loading: false, toast: [] });
  const setLoading = (status) => {
    setState((prevState) => {
      return {
        ...prevState,
        loading: status,
      };
    });
  };
  const toastNavigation = (attr) => {
    router.push(attr.path);
    setTimeout(() => {
      setState((prevState) => {
        return {
          ...prevState,
          toast: [
            {
              id: new Date().getTime() + Math.random(),
              message: attr.data.message,
            },
          ],
        };
      });
    }, 1000);
  };

  const toastMessage = (attr) => {
    setState((prevState) => {
      return {
        ...prevState,
        toast: [
          {
            id: new Date().getTime() + Math.random(),
            message: attr.message,
          },
        ],
      };
    });
  };

  const popToaster = (record) => {
    setTimeout(() => {
      const temp = state.toast.filter((item) => item.id !== record.id);
      setState((prevState) => {
        return {
          ...prevState,
          toast: temp,
        };
      });
    }, 10000);
  };
  return (
    <>
      <ContextEntity.Provider
        value={{ state, setState, setLoading, toastNavigation, toastMessage }}
      >
        <div className="flex flex-col items-center justify-center w-full relative">
          {state.loading && (
            <div className="flex items-center justify-center w-full h-full z-[9999] absolute bg-[rgba(255,255,255,0.7)]">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          )}
          {/* <div className="toast toast-top toast-end z-50 m-4 p-4">
            <div className={`alert alert-info text-white text-sm max-w-sm h-fit`}>
              <p className="break-all h-fit w-full">Resume sent successfully</p>
            </div>
          </div> */}
          {state.toast.map((rec) => {
            popToaster(rec);
            return (
              <div className="toast toast-top toast-end z-50 m-4 p-4" key={rec.id}>
                <div className={`alert ${rec.type || "alert-info"}`}>
                  <span>{rec.message}</span>
                </div>
              </div>
            );
          })}
          {children}
        </div>
      </ContextEntity.Provider>
    </>
  );
};

export default ContextEntityProvider;
