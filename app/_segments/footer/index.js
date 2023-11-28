import Link from "next/link";
import React from "react";

const FooterSegment = () => {
  return (
    <>
      <section className="font-eurostile">
        <div className=" flex justify-center">
          <div className="container bg-[#121c24] text-white mb-[-4rem] shadow-xl">
            <div className="w-full flex flex-row">
              <div className="w-full flex flex-col md:flex-row md:justify-around items-center m-4 p-4">
                <div className="text-[2rem] font-medium m-4">
                  Looking for a Mentorship
                </div>
                <div className="text-[1.3rem] font-medium m-4">
                  <div>Interested in pair programming?</div>
                  <div>
                    Let me be the driver, add your observation as a navigator.
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
      <section className="bg-[#cdcccc]">
        <div className="flex flex-col items-center justify-center p-[6rem]">
          <h1 className="font-extralight text-[2rem] m-2">
            Learn, improve & repeat.
          </h1>
          <div className="font-patrickhand text-[1rem]">
            Made by {`<VBReddy />`}
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterSegment;
