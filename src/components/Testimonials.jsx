import icons from "../icons";

const Testimonials = () => {
  return (
    <section className="relative mx-auto my-auto flex h-[821px] w-[1185px] flex-col">
      <div className="mx-auto flex h-[128px] w-[455px] flex-col items-center gap-1">
        <h1 className="font-clashDisplayMedium text-[18px] leading-[28px] tracking-[3px]">
          TESTIMONIAL
        </h1>
        <p className="text-center font-clashDisplayBold text-[48px] leading-[48px]">
          What Our Users Say About Us?
        </p>
      </div>
      <div className="flex w-full">
        <div className="relative ml-[10px] mt-[50px] h-[100%] w-1/2">
          <img
            src={icons.ellipse}
            alt=""
            className="absolute right-[3%] top-[6%]"
          />
          <img
            src={icons.ellipse}
            alt=""
            className="absolute right-[8%] top-[11%]"
          />
          <img
            src={icons.ellipse}
            alt=""
            className="absolute right-[13%] top-[16%]"
          />
          {/* profile pics */}
          <img
            src={icons.profile1}
            alt=""
            className="absolute right-[3%] top-[25%] z-10"
          />
          <img
            src={icons.profile2}
            alt=""
            className="absolute left-[60%] top-[5%] z-10"
          />
          <img
            src={icons.quotes}
            alt=""
            className="absolute right-[25%] top-[50%] z-10"
          />
          <img
            src={icons.profile3}
            alt=""
            className="absolute left-[61.5%] top-[70%] z-10"
          />
          <img
            src={icons.profile4}
            alt=""
            className="absolute left-[5%] top-[1%] z-10"
          />
          <img
            src={icons.profile5}
            alt=""
            className="absolute left-[4%] top-[68%] z-10"
          />
        </div>
        <div className="mx-auto mt-[125px] flex flex-col gap-[24px]">
          <h1 className="w-[442px] font-clashDisplaySemiBold text-[28px] leading-[28px]">
            The Best Financial Accounting App Ever!
          </h1>
          <p className="w-[442px] font-clashDisplayMedium text-[18px] leading-[28px] opacity-[40%]">
            “Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
            Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis
            Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus,
            Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor
            Neque Lorem Sapien, Suspendisse Aliquam.”
          </p>
          <div className="flex items-center gap-[5px]">
            <img src={icons.subprofile1} alt="" className="h-[40px] w-[40px]" />
            <div className="flex items-center gap-2">
              <img
                src={icons.subprofile2}
                alt=""
                className="h-[30px] w-[30px] opacity-[40%]"
              />
              <img
                src={icons.subprofile3}
                alt=""
                className="h-[30px] w-[30px] opacity-[40%]"
              />
              <img
                src={icons.subprofile4}
                alt=""
                className="h-[30px] w-[30px] opacity-[40%]"
              />
              <img
                src={icons.subprofile5}
                alt=""
                className="h-[30px] w-[30px] opacity-[40%]"
              />
            </div>
          </div>
          <h1 className="font-clashDisplaySemiBold text-[18px] leading-[28px]">
            Nick Jonas
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
