import icons from "../icons";

const Hero = () => {
  return (
    <section className="max-container relative flex min-h-screen w-full">
      <div className="flex flex-col">
        <div className="pointer-events-none fixed inset-0 z-10 bg-noise-texture mix-blend-overlay"></div>
        <img
          src={icons.star}
          alt=""
          className="absolute left-[46px] top-[16px] h-[48px] w-[48px] -rotate-45"
        />
        <img
          src={icons.star}
          alt=""
          className="absolute right-[55px] top-[-43px] h-[64px] w-[64px]"
        />
        <div className="relative ml-[175px] mt-[115px] flex h-[292px] w-[618px] flex-col">
          <img
            src={icons.ellipse1}
            alt=""
            className="absolute bottom-[130px] left-[70px] z-[1] h-[310px] w-[500px]"
          />
          <img
            src={icons.ellipse2}
            alt=""
            className="absolute bottom-[60px] left-[50px] z-0 h-[310px] w-[500px]"
          />
          <div className="relative z-10">
            <h1 className="h-auto font-clashDisplayBold text-[64px] leading-[64px]">
              Make The Best <br className="block" />
              Financial Decisions
            </h1>
            <p className="mt-[24px] h-auto font-clashDisplayMedium text-[18px] leading-[28px] opacity-[50%]">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
            <div className="flex items-center">
              <button className="mt-[24px] flex h-[60px] w-[180px] items-center justify-center gap-[8px] rounded-[4px] bg-black font-clashDisplayMedium text-[18px] leading-[28px] text-white">
                Get Started <img src={icons.vector1} alt="arrow" />{" "}
              </button>
              <button className="ml-[40px] mt-[15px] flex h-[29px] gap-[14px]">
                <img
                  src={icons.group}
                  alt="play button"
                  className="h-[29px] w-[29px]"
                />
                <p className="font-clashDisplayMedium text-[18px] leading-[28px]">
                  Watch Video
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src={icons.star}
            alt=""
            className="absolute left-[281px] top-[62px] h-[48px] w-[48px] -rotate-45"
          />
          <h1 className="absolute left-[160px] top-[251px] rotate-[-28deg] font-clashDisplayBold text-[106.38px] leading-[106.4px]">
            A
          </h1>
          <div className="relative">
            <img
              src={icons.rectangle}
              alt=""
              className="absolute z-10 ml-[197.64px] mt-[16.75px]"
            />
            <img
              src={icons.rectangle2}
              alt=""
              className="absolute left-[455px] top-[250px]"
            />
            <img
              src={icons.rectangle1}
              alt=""
              className="absolute left-[435px] top-[28px]"
            />
            <h1 className="absolute left-[460px] top-[170px] -rotate-45 font-clashDisplaySemiBold text-[11.76px] leading-[18.3px]">
              Make The Best Financial Decisions
            </h1>
            <div className="absolute left-[200px] top-[160px] z-[10] flex rotate-[-28deg]">
              <div className="flex h-[37.3px] w-[215.83px] items-center justify-center">
                <img src={icons.group1} alt="" className="rotate-[28deg]" />
                <div className="flex flex-col">
                  <h1 className="font-clashDisplaySemiBold text-[11.76px] leading-[18.3px] text-white">
                    Achievements
                  </h1>
                  <p className="font-clashDisplayMedium text-[11.76px] leading-[18.3px] text-white">
                    best finance app on playstore
                  </p>
                </div>
              </div>
              <img
                src={icons.line}
                alt=""
                className="mx-[20px] rotate-[28deg]"
              />
              <div className="flex h-[37.3px] w-[215.83px] items-center justify-center">
                <img src={icons.group2} alt="" className="rotate-[28deg]" />
                <div className="flex flex-col">
                  <h1 className="font-clashDisplaySemiBold text-[11.76px] leading-[18.3px] text-white">
                    Finance
                  </h1>
                  <p className="font-clashDisplayMedium text-[11.76px] leading-[18.3px] text-white">
                    Most Popular Accounting App
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ellipse-container w-1/2">
        <img
          src={icons.ellipse1}
          alt=""
          className="absolute left-[850px] top-[330px] h-[428px] w-[650px] rotate-[150deg]"
        />
        <img
          src={icons.star}
          alt=""
          className="absolute left-[888px] top-[583px] rotate-[150deg]"
        />
        <div className="relative h-[100%]">
          <img
            src={icons.ellipse}
            alt=""
            className="absolute right-[3%] top-[6%]"
          />
          <img
            src={icons.ellipse}
            alt=""
            className="absolute right-[7%] top-[10%]"
          />
          <img
            src={icons.ellipse}
            alt=""
            className="absolute right-[12%] top-[15%]"
          />
          {/* Mobile images */}
          <img
            src={icons.silver}
            alt=""
            className="absolute bottom-[22%] right-[8%] h-[504.32px]"
          />
          <img
            src={icons.mockup2}
            alt=""
            className="absolute bottom-[23.5%] right-[10.4%] h-[480px]"
          />
          <img
            src={icons.silver}
            alt=""
            className="absolute bottom-[29%] right-[25.5%] h-[504.32px]"
          />
          <img
            src={icons.mockup1}
            alt=""
            className="absolute bottom-[30.5%] right-[27.5%] h-[480px]"
          />
          <img
            src={icons.silver}
            alt=""
            className="absolute bottom-[37%] right-[43%] h-[504.32px]"
          />
          <img
            src={icons.mockup2}
            alt=""
            className="absolute bottom-[38.5%] right-[45%] h-[480px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
