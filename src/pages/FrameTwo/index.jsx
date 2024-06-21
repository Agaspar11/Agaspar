import React from "react";
import { useNavigate } from "react-router-dom";
import { Text } from "components";

const FrameTwoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins items-center justify-start mx-auto p-[49px] md:px-10 sm:px-5 w-full min-h-screen">
        <div className="flex flex-col md:gap-10 gap-[84px] items-center justify-start max-w-[1197px] mb-[19px] mx-auto w-full">
          <header className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <div className="flex md:flex-1 flex-col font-inter items-center justify-start mb-1 w-[30%] md:w-full">
              <ul className="flex flex-row sm:hidden items-center justify-between w-full common-row-list">
                <li>
                  <a className="hover:font-medium text-black-900 md:text-lg text-sm uppercase">
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
                  <a
                    href="javascript:"
                    className="hover:font-medium text-black-900 md:text-lg text-sm uppercase"
                  >
                    <Text size="txtInterMedium20">About</Text>
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
            </div>
            <Text
              className="sm:ml-[0] ml-[474px] text-black-900 md:text-lg text-sm"
              size="txtPoppinsMedium20"
            >
              agasparadrianlatayada@gmail.com
            </Text>
          </header>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[68px] md:items-center items-start sm:justify-center justify-start w-full">
            <div className="flex flex-col md:items-center items-start md:justify-end justify-start md:mt-0 mt-[116px]">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-justify"
                size="txtPoppinsMedium30"
              >
                Hi I’m
              </Text>
              <Text
                className="md:block md:flex-row md:items-center md:justify-center sm:text-5xl text-6xl md:text-[50px] text-black-900 text-justify"
                size="txtPoppinsSemiBold60"
              >
                <>
                  Agaspar
                  <br />
                  Latayada
                </>
              </Text>
            </div>
            <Text
              className="text-black-900 text-justify text-lg"
              size="txtPoppinsLight18"
            >
              <>
                My journey into the realm of UX design commenced in 2023 during
                my studies in computer science, where I discovered a profound
                fascination for the human-centric aspects of technology rather
                than the purely technical facets.
                <br />
                <br />
                What captivates me most about my profession is the capacity to
                unravel intricate problems and craft products that enhance
                people&#39;s daily lives. The thrill lies in the challenge of
                tailoring designs for diverse user demographics, ensuring that
                interfaces are not only functional but also visually appealing.
                Witnessing individuals engage with and derive pleasure from the
                products I&#39;ve contributed to designing is incredibly
                rewarding.
                <br />
                <br />I garnered practical experience as an apprentice for three
                months, serving as a UX & UI designer for two companies. This
                apprenticeship not only honed my technical skills but also
                provided a valuable opportunity to apply my knowledge in a
                real-world setting, seamlessly blending work and study in this
                dynamic field.
                <br />
                <br />
                As a dedicated UX designer, my primary objective is to fashion
                products that seamlessly blend utility, usability, and enjoyment
                for users. I am relentless in my pursuit of refining my skills
                and staying abreast of the latest design trends and
                technologies. I firmly believe in the transformative power of
                excellent design to positively impact people&#39;s lives. It is
                with gratitude that I embrace the constant evolution of this
                exhilarating field, cherishing my role in contributing to its
                ongoing innovation.
              </>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameTwoPage;
