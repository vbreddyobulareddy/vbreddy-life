import React from "react";

const BackendSkills = () => {
  return (
    <>
      <div className="flex flex-col p-4 w-full dark:bg-[#fff] dark:text-[#121c24]">
        <div className="flex flex-col items-center justify-center">
          <div>
            <img src="/profile/backend_api.png" className="w-28 h-28" />
          </div>
          <div className="flex justify-center">
            <p className="text-gray-800 sm:text-xl dark:text-white font-eurostile">
              I'am a highly skilled{" "}
              <span className="text-[#121c24]">
                Javascript backend developer
              </span>{" "}
              with 8 years of experience in designing and implementing
              server-side logic, databases, and APIs. I have hands on
              experience with GraphQL restful service development.
            </p>
          </div>
        </div>
        <div className="mt-2 md:border-t-2 p-2">
          {[
            {
              group: {
                title: "Javascript",
                className: "font-eurostile text-[20px] text-[#000]",
              },
              items: [
                {
                  title: "Node.JS",
                  className: "badge bg-[#121c24] text-white",
                  rating: 3,
                },
                {
                  title: "Express.JS",
                  className: "badge bg-[#121c24] text-white",
                  rating: 3,
                },
                {
                  title: "Next.JS",
                  className: "badge bg-[#121c24] text-white",
                  rating: 3,
                },
              ],
            },
            {
              group: {
                title: "GraphQL",
                className: "font-eurostile text-[20px] text-[#000]",
              },
              items: [
                {
                  title: "express-graphql",
                  className: "badge bg-[#121c24] text-white",
                  rating: 3,
                },
                {
                  title: "graphql-yoga",
                  className: "badge bg-[#121c24] text-white",
                  rating: 3,
                },
              ],
            },
            {
              group: {
                title: "ORM Libraries",
                className: "font-eurostile text-[20px] text-[#000]",
              },
              items: [
                {
                  title: "Sequelize.JS",
                  className: "badge bg-[#121c24] text-white",
                  rating: 3,
                },
                {
                  title: "Prisma",
                  className: "badge bg-[#121c24] text-white",
                  rating: 3,
                },
              ],
            },
            {
              group: {
                title: "Database",
                className: "font-eurostile text-[20px] text-[#000]",
              },
              items: [
                {
                  title: "MySQL",
                  className: "badge bg-[#121c24] text-white",
                  rating: 3,
                },
              ],
            },
            {
              group: {
                title: "Infrastructure: Cloud",
                className: "font-eurostile text-[20px] text-[#000]",
              },
              items: [
                {
                  title: "GCR - Google Cloud Run",
                  className: "badge bg-[#161748] text-white",
                  rating: 3,
                },
              ],
            },
          ].map((rec, index) => {
            return (
              <div
                className="flex flex-wrap justify-start"
                key={`backend_skills_${index}`}
              >
                <h3 className={rec.group.className}>{rec.group.title}</h3>
                <div className="flex flex-wrap justify-center">
                  {rec.items.map((entity, idx) => {
                    return (
                      <>
                        <div
                          className={`m-1 ${entity.className}`}
                          key={`backend_skills_${index}_${idx}`}
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

export default BackendSkills;
