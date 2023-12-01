import React from "react";

const FooterSegment = () => {
  return (
    <>
      <section className="bg-[#cdcccc] dark:bg-[#cdcccc] dark:text-[#121c24]">
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
