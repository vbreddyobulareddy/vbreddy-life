import React from "react";

const StartupSegment = () => {
  return (
    <>
      <section className="font-eurostile bg-[#cdcccc] mt-[-4rem] md:pb-[4rem]">
        <div className="flex justify-center pt-[4rem]">
          <div className="container">
            <div className="relative flex flex-col items-center justify-center m-4">
              <p className="text-[2rem] font-medium m-4">My...leisure time</p>
              <div className="flex flex-col md:flex-row w-full justify-center">
                <a
                  className="btn btn-primary m-2 text-white"
                  href="https://medium.com/@obulareddyveera"
                  target="_blank"
                >
                  medium/@obulareddyveera
                </a>
                <a
                  className="btn bg-[#BC4A3C] hover:bg-[#ab473a] text-white m-2"
                  href="https://medium.com/@obulareddyveera"
                  target="_blank"
                >
                  web-app -- PropertyBricks
                </a>
              </div>
              <div className="w-1/2 h-2 border-t-2 m-4" />
              <p className="text-[1rem] font-patrickhand m-4 text-center">
                This portal is powered with Next.JS(v14) + React.JS UI and GraphQL restful service of Express.JS, Express-GraphQL libraries.
              </p>
              <div className="flex flex-col md:flex-row w-full justify-center">
                <a
                  className="btn m-2"
                  href="https://github.com/vbreddyobulareddy/vbreddy-cloud-api"
                  target="_blank"
                >
                  Github: Express-GraphQL, repo
                </a>
                <a
                  className="btn m-2"
                  href="https://github.com/vbreddyobulareddy/vbreddy-cloud-api"
                  target="_blank"
                >
                  Github: Next.JS v14, repo
                </a>
              </div>
              <p className="text-[1rem] font-patrickhand m-1 text-center">
                The portal is deployed with <span className="text-[1.5rem]">Google Cloud Run</span> container.
              </p>
              <div className="flex flex-col md:flex-row w-full justify-center">
                <a
                  className="btn btn-success text-white m-2"
                  href="https://cloud-api.vbreddy.life/graphql"
                  target="_blank"
                >
                  cloud-api -- express-graphql
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartupSegment;
