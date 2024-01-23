import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, List, Text } from "components";

const FrameOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    const win = window.open(
      "https://www.figma.com/file/wcBSrLoyok0cFLnDO94Fed/MedGrocer-New-Design?type=design&node-id=0%3A1&mode=design&t=84u76lN08wVfIlni-1",
      "_blank",
    );
    win.focus();
  }
  function handleNavigate1() {
    const win = window.open(
      "https://www.figma.com/file/uSUuneTGK99XK3swr0FxLE/Meron-Wireframe?type=design&node-id=193%3A3201&mode=design&t=yHcco6c8UZDvUfFp-1",
      "_blank",
    );
    win.focus();
  }

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-inter items-center justify-start mx-auto p-[49px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[103px] items-center justify-start max-w-[1197px] mx-auto w-full">
          <header className="flex flex-row md:gap-10 items-center justify-between sm:text-[0] w-full">
            <ul className="flex flex-row font-inter sm:hidden items-center md:items-start justify-between mb-1 w-[30%] common-row-list">
              <li>
                <a
                  href="javascript:"
                  className="hover:font-medium text-black-900 md:text-lg text-sm uppercase"
                >
                  <Text size="txtInterMedium20">Home</Text>
                </a>
              </li>
              <li>
                <a className="hover:font-medium text-black-900 md:text-lg text-sm uppercase">
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
                <a className="hover:font-medium text-black-900 md:text-lg text-sm uppercase">
                  <Text
                    className="common-pointer"
                    size="txtInterLight20"
                    onClick={() => navigate("/framethree")}
                  >
                    Contact
                  </Text>
                </a>
              </li>
            </ul>
            <Text
              className="ml-[474px] text-black-900 md:text-lg text-sm sm:text-xl"
              size="txtPoppinsMedium20"
            >
              agasparadrianlatayada@gmail.com
            </Text>
          </header>
          <div className="flex flex-col md:gap-10 gap-[108px] items-start justify-start w-full">
            <Text
              className="text-[25px] sm:text-[26px] md:text-[28px] text-black-900 uppercase"
              size="txtInterMedium30"
            >
              my Case studies
            </Text>
            <List
              className="sm:flex-col flex-row md:gap-10 gap-[97px] grid md:grid-cols-1 grid-cols-2 justify-center w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col gap-[27px] items-start justify-start w-full">
                <Img
                  className="common-pointer h-[350px] md:h-[470px] sm:h-auto object-cover w-full"
                  src="images/img_rectangle1.png"
                  alt="rectangleOne"
                  onClick={handleNavigate}
                />
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-black-900 text-xl uppercase"
                    size="txtInterMedium20"
                  >
                    medgrocer
                  </Text>
                  <Text
                    className="mt-0.5 text-black-900 text-sm uppercase"
                    size="txtInterMedium14"
                  >
                    Online pharmacy
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[27px] items-start justify-start w-full">
                <Img
                  className="common-pointer h-[350px] md:h-[470px] sm:h-auto object-cover w-full"
                  src="images/img_rectangle2.png"
                  alt="rectangleTwo"
                  onClick={handleNavigate1}
                />
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-black-900 text-xl uppercase"
                    size="txtInterMedium20"
                  >
                    Meron exchange{" "}
                  </Text>
                  <Text
                    className="mt-0.5 text-black-900 text-sm uppercase"
                    size="txtInterMedium14"
                  >
                    B2b marketplace
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameOnePage;
