import Link from "next/link";
import React from "react";

const ProfileNav = () => {
  return (
    <>
      <div className="navbar bg-base-100 dark:bg-[#fff] dark:text-[#121c24]">
        <div className="navbar-center">
          <div className="flex flex-col">
            <div>
              <Link href="/" className="font-patrickhand tracking-wide btn btn-ghost">
                <span>Veera Bhargava Reddy Obulareddy</span>
                <span>{`<VBReddy />`}</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden lg:navbar-end">
          <button className="font-eurostile btn btn-outline btn-wide btn-info btn-md">
            let's connect !
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileNav;
