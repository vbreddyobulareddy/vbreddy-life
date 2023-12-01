import LetsConnectComponent from "./components/lets-connect";

export default function Page({ params }) {
  return (
    <section className="bg-[#cdcccc] w-full h-full">
      <div className="flex justify-center w-full h-full p-4">
        <div className="container  w-full pt-4 pb-4">
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src="/profile/letsConnect.png"
                alt="Hello"
                className="w-full h-full"
              />
            </figure>
            <div className="card-body">
              <div className="flex flex-col justify-center items-center w-full">
                <div className="font-eurostile text-lg">Let's Connect</div>
                <div className="flex justify-center h-2 w-1/2 border-t-2"></div>
              </div>

              <div className="flex flex-col items-end justify-center w-full">
                <div className="form-control w-full">
                  <p className="font-patrickhand text-xl m-4">
                    Whether you have an job opportunity for me, require
                    mentorship or just want to say hello, I love to invite you.
                    Please share your details or reach me @
                    vbreddy.obulareddy@gmail.com
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
