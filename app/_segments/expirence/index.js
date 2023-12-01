import React from "react";

const ExperienceSegment = () => {
  function diff_months(dt2, dt1) {
    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60 * 60 * 24 * 7 * 4;
    return Math.abs(Math.round(diff));
  }
  return (
    <>
      <section className="m-4 p-4 dark:bg-[#fff] dark:text-[#121c24]">
        <div className="flex justify-center mt-4 pt-4">
          <h2 className="font-eurostile text-[36px]">
            I have collaborated with some awesome companies:
          </h2>
        </div>
        <div className="flex justify-center items-center flex-wrap">
          {[
            {
              companyName: "Wipro",
              url: "https://www.wipro.com/",
              from: new Date(2015, 6, 1),
              to: new Date(2016, 8, 30),
            },
            {
              companyName: "GE Digital",
              url: "https://www.ge.com/digital/",
              from: new Date(2016, 9, 1),
              to: new Date(2019, 8, 30),
            },
            {
              companyName: "Envestnet Yodlee",
              url: "https://www.yodlee.com/",
              from: new Date(2020, 4, 1),
              to: new Date(2022, 10, 30),
            },
            {
              companyName: "TCS",
              url: "https://www.tcs.com/",
              from: new Date(2022, 11, 1),
              to: new Date(),
            },
          ].map((entity, idx) => {
            return (
              <>
                <div
                  className="font-eurostile w-full md:w-[40vw] h-16 border-spacing-2 border-2 flex justify-center items-center m-1"
                  key={`backend_skills_${idx}`}
                >
                  <a
                    className="btn btn-link no-underline text-[#000] text-[16px] md:text-[24px]"
                    href={entity.url}
                    target="_blank"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <div>{entity.companyName}</div>
                      <div className="badge bg-[#121c24] text-white mt-1">
                        {diff_months(entity.from, entity.to)} months
                      </div>
                    </div>
                  </a>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ExperienceSegment;
