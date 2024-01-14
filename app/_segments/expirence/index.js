import React from "react";
import moment from "moment";

const ExperienceSegment = () => {
  function diff_months(from, to) {
    const numberOfMonths = moment(new Date(to)).diff(new Date(from), 'months', true);
    console.log('--==numberOfMonths ', numberOfMonths);
    return Math.round(numberOfMonths);
  }
  return (
    <>
      <section className="dark:bg-[#fff] dark:text-[#121c24]">
        <div className="m-4 p-4">
          <div className="flex justify-center mt-4 pt-4">
            <h2 className="font-eurostile text-[36px]">
              I have collaborated with some awesome companies:
            </h2>
          </div>
          <div className="flex justify-center items-center flex-wrap">
            {[
              {
                companyName: "daVIZta Inc",
                url: "https://www.integrichain.com/news/integrichain-and-davizta-merge/",
                from: new Date(2013, 5, 1),
                to: new Date(2014, 12, 30),
              },
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
        </div>
      </section>
    </>
  );
};

export default ExperienceSegment;
