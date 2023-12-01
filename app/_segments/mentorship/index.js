import Link from "next/link";
import React from "react";

const MentorshipSegment = () => {
  return (
    <>
      <section className="font-eurostile dark:bg-[#fff] dark:text-[#121c24]">
        <div className=" flex justify-center">
          <div className="container bg-[#121c24] text-white shadow-xl">
            <div className="w-full flex flex-row">
              <div className="w-full flex flex-col md:flex-row md:justify-around items-center m-4 p-4">
                <div className="text-[2rem] font-medium m-4">
                  Looking for a Mentorship
                </div>
                <div className="text-[1.3rem] font-medium m-4">
                  <div>Interested in pair programming?</div>
                  <div>
                    Let me be the trainer and school your daily job responsibilities.
                  </div>
                </div>
                <Link className="btn btn-primary text-white m-2" href="/connect">
                  Join Now !!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MentorshipSegment;
