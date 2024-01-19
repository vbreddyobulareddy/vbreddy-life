import Link from "next/link";

export default function HeroSegment(props) {
  return (
    <>
      <section className="dark:bg-[#fff] dark:text-[#121c24]">
        <div className="container mx-auto">
          <div className="pt-4 flex flex-col items-center justify-center m-4">
            <h1 className="home-title text-[3rem] md:text-[4rem]">
              Javascript Fullstack Developer & Mentor
            </h1>
            <h2 className="font-eurostile font-thin leading-6 text-[20px] text-center mt-2 tracking-wide">
              I'm a passionate and results-driven full-stack developer with a
              love for building innovative and efficient web applications.
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="/profile/workSpaceWhite.png" />
          <div className="bg-[#cdcccc] dark:bg-[#cdcccc] font-eurostile pt-[2rem] text-center w-full h-fit mb-10 pb-24">
            <div className="container mx-auto text-center m-6 p-2">
              <h1 className="text-[24px] font-extrabold">
                Hi, I'm VBReddy. Nice to meet you.
              </h1>
              <h2 className="tracking-wide leading-6 text-[20px] text-center mt-2">
                Since beginning my journey as a javascript developer over 10
                years ago, I've done remote work for agencies, consulted for
                startups, and collaborated with talented people to create
                digital products for both business and consumer use. I'm quietly
                confident, naturally curious, and perpetually working on
                improving my chops one design problem at a time.
              </h2>
              <div className="flex justify-center">
                {/* <Link
                  href="/connect"
                  className="font-eurostile btn btn-wide bg-[#0077b5] btn-md m-4 text-lg text-white border-[#0077b5] hover:bg-[#0077b5] hover:border-[#0077b5]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-7 w-7"
                    fill="currentColor"
                    style={{ color: "#fff" }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                  <div class="outline-none mr-1 mb-1 px-3 py-1 bg-transprent text-xs font-bold text-white uppercase focus:outline-none">
                    Linked In
                  </div>
                </Link> */}
                <Link
                  href="/connect"
                  className="font-eurostile btn btn-wide btn-primary btn-md m-4 text-white text-lg"
                >
                  let's connect !
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
