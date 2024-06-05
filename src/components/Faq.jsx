import icons from "../icons";

const Faq = () => {
  return (
    <section className="relative mt-[68px] flex h-[700px] w-full flex-col z-10">
      <div className="mb-[40px] ml-[175px] gap-1">
        <h1 className="font-clashDisplayMedium text-[18px] leading-[28px] tracking-[3px] text-[#FF5555]">
          FAQ
        </h1>
        <p className="w-[497px] font-clashDisplayBold text-[48px] leading-[48px]">
          Frequently Asked Questions
        </p>
      </div>
      <div className="">
        <div className="mx-auto grid w-[1090px] grid-cols-1 gap-[20px] sm:grid-cols-2">
          <div className="grid-item rounded-lg bg-[#FF5555] p-[30px]">
            <h1 className="font-clashDisplaySemiBold text-[28px] leading-[28px]">
              The Best Financial Accounting App Ever!
            </h1>
            <p className="font-clashDisplayMedium text-[18px] leading-[28px]">
              “Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
              Ultricies. In Ultrices Malesuada Elit Mauris.
            </p>
          </div>
          <div className="grid-item rounded-lg p-[30px]">
            <h1 className="font-clashDisplaySemiBold text-[28px] leading-[28px]">
              The Best Financial Accounting App Ever!
            </h1>
            <p className="font-clashDisplayMedium text-[18px] leading-[28px]">
              “Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
              Ultricies. In Ultrices Malesuada Elit Mauris.
            </p>
          </div>
          <div className="grid-item rounded-lg p-[30px]">
            <h1 className="font-clashDisplaySemiBold text-[28px] leading-[28px]">
              The Best Financial Accounting App Ever!
            </h1>
            <p className="font-clashDisplayMedium text-[18px] leading-[28px]">
              “Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
              Ultricies. In Ultrices Malesuada Elit Mauris.
            </p>
          </div>
          <div className="grid-item rounded-lg bg-[#FF5555] p-[30px]">
            <h1 className="font-clashDisplaySemiBold text-[28px] leading-[28px]">
              The Best Financial Accounting App Ever!
            </h1>
            <p className="font-clashDisplayMedium text-[18px] leading-[28px]">
              “Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
              Ultricies. In Ultrices Malesuada Elit Mauris.
            </p>
          </div>
          <div className="grid-item rounded-lg bg-[#FF5555] p-[30px]">
            <h1 className="font-clashDisplaySemiBold text-[28px] leading-[28px]">
              The Best Financial Accounting App Ever!
            </h1>
            <p className="font-clashDisplayMedium text-[18px] leading-[28px]">
              “Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
              Ultricies. In Ultrices Malesuada Elit Mauris.
            </p>
          </div>
          <div className="grid-item rounded-lg p-[30px]">
            <h1 className="font-clashDisplaySemiBold text-[28px] leading-[28px]">
              The Best Financial Accounting App Ever!
            </h1>
            <p className="font-clashDisplayMedium text-[18px] leading-[28px]">
              “Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
              Ultricies. In Ultrices Malesuada Elit Mauris.
            </p>
          </div>
        </div>
      </div>
      <div className="relative mx-auto mt-[155px] flex h-[508px] w-[1090px] bg-black rounded-lg">
        <div className="my-[156px] ml-[77px] flex flex-col gap-[16px]">
          <h1 className="font-clashDisplayBold text-[48px] leading-[48px] text-white">
            Ready To Get Started?
          </h1>
          <p className="w-[536px] font-clashDisplayRegular text-[18px] leading-[28px] text-white">
            Risus Habitant Leo Egestas Mauris Diam Eget Morbi Tempus Vulputate.
          </p>
          <button className="flex h-[60px] w-[208px] items-center justify-center gap-[12px] rounded-[4px] bg-white font-clashDisplayMedium text-[18px] leading-[28px] text-black">
            Download App <img src={icons.apple} alt="apple" />{" "}
          </button>
        </div>
        <img src={icons.phone} alt="" className="absolute right-[-0.2px] z-10 top-[25px]" />
      </div>
    </section>
  );
};

export default Faq;
