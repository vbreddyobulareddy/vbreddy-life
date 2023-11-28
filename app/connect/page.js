import LetsConnectComponent from "./components/lets-connect";


export default function Page({ params }) {
  return (
    <section className="bg-[#cdcccc] w-full h-full">
      <div className="flex justify-center w-full h-full p-4">
        <div className="container  w-full pt-4 pb-4">
          <div className="card lg:card-side bg-base-100 border-t-2 shadow-xl">
            <figure>
              <img
                src="/profile/letsConnect.png"
                alt="Hello"
                className="w-full h-full"
              />
            </figure>
            <div className="card-body">
              <div className="h-full flex flex-col items-end justify-center w-full">
                <div className="form-control w-full m-2">
                  <p className="font-patrickhand text-[1rem]">
                    Whether you have an{" "}
                    <span className="font-eurostile text-[1rem]">
                      opportunity
                    </span>
                    , require{" "}
                    <span className="font-eurostile text-[1rem]">
                      mentorship
                    </span>
                    , or just want to{" "}
                    <span className="font-eurostile text-[1rem]">
                      say hello,{" "}
                    </span>
                    I love to invite you.
                  </p>
                  <p className="font-patrickhand text-[1rem]">
                    Please share your details or reach me @
                    <a className="font-eurostile text-[1rem] btn btn-link">
                      vbreddy.obulareddy@gmail.com
                    </a>
                  </p>
                </div>
                <LetsConnectComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
