import React from "react";

const FrontendSkills = () => {
  return (
    <>
      <div className="flex flex-col p-4 w-full">
        <div className="flex flex-col items-center justify-center">
          <div>
            <img src="/profile/frontend_ui.png" className="w-28 h-28" />
          </div>
          <div className="flex justify-center">
            <p className="text-gray-800 sm:text-xl dark:text-white font-eurostile">
              I'am a creative and detail-oriented{" "}
              <span className="text-[#121c24]">Frontend Developer</span> with 8
              years of experience in designing and implementing responsive and
              intuitive user interfaces.
            </p>
          </div>
        </div>
        <div className="mt-2 md:border-t-2 p-2">
          {[
            {
              group: {
                title: "UI Library",
                className: "font-eurostile text-[20px] text-[#000]",
              },
              items: [
                {
                  title: "vue3",
                  className: "badge bg-[#121c24] text-white",
                  rating: 3,
                },
                {
                  title: "Pinia",
                  className: "badge bg-[#121c24] text-white",
                  rating: 3,
                },
              ],
            },
            {
              group: {
                title: "UI Library",
                className: "font-eurostile text-[20px] text-[#000]",
              },
              items: [
                {
                  title: "React.JS",
                  className: "badge bg-[#121c24] text-white",
                  rating: 3,
                },
                {
                  title: "Redux",
                  className: "badge bg-[#121c24] text-white",
                  rating: 3,
                },
                {
                  title: "Redux-Toolkit",
                  className: "badge bg-[#121c24] text-white",
                  rating: 3,
                },
                {
                  title: "Mobx",
                  className: "badge bg-[#121c24] text-white",
                  rating: 3,
                },
                {
                  title: "Formik",
                  className: "badge bg-[#121c24] text-white",
                  rating: 3,
                },
              ],
            },
            {
              group: {
                title: "GraphQL-Client",
                className: "font-eurostile text-[20px] text-[#000]",
              },
              items: [
                {
                  title: "Apollo-Client",
                  className: "badge bg-[#121c24] text-white",
                  rating: 3,
                },
              ],
            },
            {
              group: {
                title: "Visualization",
                className: "font-eurostile text-[20px] text-[#000]",
              },
              items: [
                {
                  title: "Highcharts",
                  className: "badge bg-[#121c24] text-white",
                  rating: 3,
                },
                {
                  title: "D3.js",
                  className: "badge bg-[#121c24] text-white",
                  rating: 3,
                },
              ],
            },
            {
              group: {
                title: "CSS",
                className: "font-eurostile text-[20px] text-[#000]",
              },
              items: [
                {
                  title: "Styled-Components",
                  className: "badge bg-[#121c24] text-white",
                  rating: 3,
                },
                {
                  title: "SASS",
                  className: "badge bg-[#121c24] text-white",
                  rating: 3,
                },
                {
                  title: "TailwindCSS",
                  className: "badge bg-[#121c24] text-white",
                  rating: 3,
                },
                {
                  title: "Material-UI",
                  className: "badge bg-[#121c24] text-white",
                  rating: 3,
                },
                {
                  title: "Bootstrap4",
                  className: "badge bg-[#121c24] text-white",
                  rating: 3,
                },
              ],
            },
          ].map((rec) => {
            return (
              <div
                className="flex flex-wrap justify-start"
                key={rec.group.title}
              >
                <h3 className={rec.group.className}>{rec.group.title}</h3>
                <div className="flex flex-wrap justify-center">
                  {rec.items.map((entity) => {
                    return (
                      <>
                        <div
                          className={`m-1 ${entity.className}`}
                          key={entity.title}
                        >
                          {entity.title}
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FrontendSkills;
