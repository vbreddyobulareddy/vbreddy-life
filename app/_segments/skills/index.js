import React from "react";
import BackendSkills from "./components/backend";
import FrontendSkills from "./components/frontend";
import ResumeDownloadComponent from "./components/resumeDownload";

const SkillsSegment = () => {
  return (
    <>
      <section className="p-4 mt-[-10rem] w-full dark:bg-[#fff] dark:text-[#121c24]">
        <div className="card w-full bg-base-100 shadow-xl dark:bg-[#fff] dark:text-[#121c24]">
          <div className="card-body">
            <div className="w-full flex flex-col md:flex-row">
              <div className="w-full md:w-1/2">
                <BackendSkills />
              </div>
              <div className="w-full md:w-1/2 border-t-2 md:border-t-0  md:border-l-2">
                <FrontendSkills />
              </div>
            </div>
            <ResumeDownloadComponent />
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsSegment;
