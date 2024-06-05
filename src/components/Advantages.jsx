import icons from "../icons";

const Advantages = () => {
  return (
    <section className="relative flex h-[1300px] w-full flex-col">
      {/* gradient 1 */}
      <img
        src={icons.ellipse1}
        alt=""
        className="absolute top-[150px] right-[200px] z-[1] h-[310px] w-[500px]"
      />
      <img
        src={icons.ellipse2}
        alt=""
        className="absolute top-[250px] right-[200px] z-0 h-[310px] w-[500px]"
      />
      {/*  */}
      {/* gradient 2 */}
      <img
        src={icons.ellipse1}
        alt=""
        className="absolute top-[800px] left-[150px] z-[1] h-[310px] w-[500px] rotate-[40deg]"
      />
      <img
        src={icons.ellipse2}
        alt=""
        className="absolute top-[800px] left-[200px] z-0 h-[310px] w-[500px] rotate-[40deg]"
      />
      {/*  */}
      <div className="flex h-1/2 z-10">
        <div className="ml-[175px] mt-[118px] flex w-1/2 flex-col gap-[32px]">
          <div className="gap-1">
            <h1 className="font-clashDisplayMedium text-[18px] leading-[28px] tracking-[3px] text-[#FF5555]">
              ADVANTAGES
            </h1>
            <p className="w-[470px] font-clashDisplayBold text-[48px] leading-[48px]">
              Why Choose Uifry?
            </p>
          </div>
          <div className="flex flex-col gap-[23px]">
            <div className="flex items-center gap-[15px]">
              <img src={icons.bell} alt="" />
              <h1 className="font-clashDisplaySemiBold text-[28px] leading-[28px]">
                Cleaver Notifications
              </h1>
            </div>
            <p className="w-[535px] font-clashDisplayMedium text-[18px] leading-[28px] opacity-[40%]">
              Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
              Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis
              Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis
              Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget
              Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.
            </p>
          </div>
        </div>
        <div className="ellipse-container relative h-[100%] w-1/2">
          <img
            src={icons.ellipse}
            alt=""
            className="absolute right-[15%] top-[2%]"
          />
          <img
            src={icons.ellipse}
            alt=""
            className="absolute right-[20%] top-[6%]"
          />
          <img
            src={icons.ellipse}
            alt=""
            className="absolute right-[25%] top-[10%]"
          />
          {/* mobile */}
          <img
            src={icons.silverstr}
            alt=""
            className="absolute bottom-[18%] right-[38%] h-[504.32px]"
          />
          <img
            src={icons.mockupstr1}
            alt=""
            className="absolute bottom-[20%] right-[40%] h-[480px]"
          />
        </div>
      </div>
      <div className="flex h-1/2 z-10">
        <div className="ellipse-container relative ml-[10px] mt-[-40px] h-[100%] w-1/2">
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
          {/* mobile */}
          <img
            src={icons.silverstr}
            alt=""
            className="absolute bottom-[14%] right-[23%] h-[504.32px]"
          />
          <img
            src={icons.mockupstr}
            alt=""
            className="absolute bottom-[16%] right-[24.8%] h-[480px]"
          />
          <img src={icons.onhold} alt="" className="absolute bottom-[900px] left-[1020px]" />
        </div>
        <div className="ml-[30px] mt-[118px] flex w-1/2 flex-col gap-[32px]">
          <div className="flex flex-col gap-[23px]">
            <div className="flex items-center gap-[15px]">
              <img src={icons.bell} alt="" />
              <h1 className="font-clashDisplaySemiBold text-[28px] leading-[28px]">
                Fully Customizable
              </h1>
            </div>
            <p className="w-[535px] font-clashDisplayMedium text-[18px] leading-[28px] opacity-[40%]">
              Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
              Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis
              Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis
              Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget
              Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
