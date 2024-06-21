import React from "react";
import { useNavigate } from "react-router-dom";
import { Text } from "components";

const FrameThreePage = () => {
  const navigate = useNavigate();

  function handleNavigate2() {
    const win = window.open(
      "https://www.instagram.com/agasparrr?igsh=c2Jsb3oxZ3FkN3Bi",
      "_blank"
    );
    win.focus();
  }
  function handleNavigate3() {
    const win = window.open("https://www.facebook.com/DLatayada/", "_blank");
    win.focus();
  }
  function handleNavigate4() {
    const win = window.open("https://www.linkedin.com/in/agaspar11/", "_blank");
    win.focus();
  }
  function handleNavigate5() {
    const win = window.open("https://twitter.com/AgasparL", "_blank");
    win.focus();
  }

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-inter items-center justify-start mx-auto p-[49px] md:px-10 sm:px-5 w-full min-h-screen">
        <div className="flex flex-col items-center justify-start max-w-[1197px] mb-[298px] mx-auto w-full">
          <header className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <div className="flex md:flex-1 flex-col font-inter items-center justify-start mb-1 w-[30%] md:w-full">
              <ul className="flex flex-row sm:hidden items-center justify-between w-full common-row-list">
                <li>
                  <a className="hover:font-medium text-black-900 text-sm uppercase">
                    <Text
                      className="common-pointer"
                      size="txtInterLight20"
                      onClick={() => navigate("/")}
                    >
                      Home
                    </Text>
                  </a>
                </li>
                <li>
                  <a className="hover:font-medium text-black-900 text-sm uppercase">
                    <Text
                      className="common-pointer"
                      size="txtInterLight20"
                      onClick={() => navigate("/frametwo")}
                    >
                      About
                    </Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="hover:font-medium text-black-900 text-sm uppercase"
                  >
                    <Text size="txtInterMedium20">Contact</Text>
                  </a>
                </li>
              </ul>
            </div>
            <Text
              className="md:ml-[0] ml-[472px] text-black-900 text-sm"
              size="txtPoppinsMedium20"
            >
              agasparadrianlatayada@gmail.com
            </Text>
          </header>
          <div className="flex flex-row gap-[67px] items-center justify-center mt-[270px] w-[21%] md:w-full">
            <Text
              className="common-pointer sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
              size="txtInterLight25"
              onClick={handleNavigate4}
            >
              Linkedin
            </Text>
            <Text
              className="common-pointer sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
              size="txtInterLight25"
              onClick={handleNavigate5}
            >
              Twitter
            </Text>
          </div>
          <div className="flex flex-row gap-[41px] items-start justify-center mt-[38px] w-[23%] md:w-full">
            <Text
              className="common-pointer mb-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
              size="txtInterLight25"
              onClick={handleNavigate3}
            >
              Facebook
            </Text>
            <Text
              className="common-pointer mt-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
              size="txtInterLight25"
              onClick={handleNavigate2}
            >
              Instagram
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameThreePage;
