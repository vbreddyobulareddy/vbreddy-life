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
                Since beginning my journey as a javascript developer over 8
                years ago, I've done remote work for agencies, consulted for
                startups, and collaborated with talented people to create
                digital products for both business and consumer use. I'm quietly
                confident, naturally curious, and perpetually working on
                improving my chops one design problem at a time.
              </h2>
              <Link href="/connect" className="font-eurostile btn btn-wide btn-primary btn-md m-4 text-white text-lg">
                let's connect !
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
