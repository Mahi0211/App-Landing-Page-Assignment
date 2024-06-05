import icons from "../icons";

const Features = () => {
  return (
    <section className="relative flex h-[700px] w-full">
      <div className="ellipse-container w-1/2">
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
          {/* mobile */}
          <img
            src={icons.silverstr}
            alt=""
            className="absolute bottom-[20%] right-[23%] h-[504.32px]"
          />
          <img
            src={icons.mockupstr}
            alt=""
            className="absolute bottom-[22%] right-[24.8%] h-[480px]"
          />
        </div>
      </div>
      <div className="ml-[30px] mt-[100px] flex w-1/2 flex-col gap-[32px]">
        <div className="gap-1">
          <h1 className="font-clashDisplayMedium text-[18px] leading-[28px] tracking-[3px] text-[#FF5555]">
            FEATURES
          </h1>
          <p className="font-clashDisplayBold text-[48px] leading-[48px]">
            Uifry Premium
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col gap-3">
            <div className="flex gap-[8px]">
              <img src={icons.star1} alt="" className="h-[24px] w-[24px]" />
              <h1 className="font-clashDisplaySemiBold text-[18px]">
                Budgeting Intervals
              </h1>
            </div>
            <p className="w-[638px] font-clashDisplayMedium text-[18px] leading-[28px] opacity-[40%]">
              Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
              Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col gap-3">
            <div className="flex gap-[8px]">
              <img src={icons.cube1} alt="" className="h-[24px] w-[24px]" />
              <h1 className="font-clashDisplaySemiBold text-[18px]">
                Budgeting Intervals
              </h1>
            </div>
            <p className="w-[638px] font-clashDisplayMedium text-[18px] leading-[28px] opacity-[40%]">
              Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
              Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col gap-3">
            <div className="flex gap-[8px]">
              <img src={icons.cube2} alt="" className="h-[24px] w-[24px]" />
              <h1 className="font-clashDisplaySemiBold text-[18px]">
                Budgeting Intervals
              </h1>
            </div>
            <p className="w-[638px] font-clashDisplayMedium text-[18px] leading-[28px] opacity-[40%]">
              Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
              Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
