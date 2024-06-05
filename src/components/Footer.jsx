import icons from "../icons";

const Footer = () => {
  return (
    <section className="relative z-10 mx-auto mt-[818px] w-[1091px]">
      <div className="flex gap-[65px]">
        <div className="flex flex-col gap-[16px]">
          <div className="flex items-center gap-[2px]">
            <img src={icons.frame} alt="" />
            <img src={icons.vector} alt="" />
          </div>
          <div className="flex items-center gap-2">
            <img src={icons.mail} alt="" />
            <p className="font-clashDisplayMedium text-[16px] leading-[26px]">
              Help@Frybix.com
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img src={icons.call} alt="" />
            <p className="font-clashDisplayMedium text-[16px] leading-[26px]">
              +1234 456 678 89
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[16px]">
          <h1 className="font-clashDisplayMedium text-[32px] leading-[42px]">
            Links
          </h1>
          <p className="font-clashDisplayMedium text-[16px] leading-[26px]">
            Home
          </p>
          <p className="font-clashDisplayMedium text-[16px] leading-[26px]">
            About Us
          </p>
          <p className="font-clashDisplayMedium text-[16px] leading-[26px]">
            Bookings
          </p>
          <p className="font-clashDisplayMedium text-[16px] leading-[26px]">
            Blog
          </p>
        </div>
        <div className="flex flex-col gap-[16px]">
          <h1 className="font-clashDisplayMedium text-[32px] leading-[42px]">
            Legals
          </h1>
          <p className="font-clashDisplayMedium text-[16px] leading-[26px]">
            Terms Of Use
          </p>
          <p className="font-clashDisplayMedium text-[16px] leading-[26px]">
            Privacy Policy
          </p>
          <p className="font-clashDisplayMedium text-[16px] leading-[26px]">
            Cookie policy
          </p>
        </div>
        <div className="flex flex-col gap-[16px]">
          <h1 className="font-clashDisplayMedium text-[32px] leading-[42px]">
            Product
          </h1>
          <p className="font-clashDisplayMedium text-[16px] leading-[26px]">
            Take Tour
          </p>
          <p className="font-clashDisplayMedium text-[16px] leading-[26px]">
            Live Chat
          </p>
          <p className="font-clashDisplayMedium text-[16px] leading-[26px]">
            Reviews
          </p>
        </div>
        <div className="flex flex-col gap-[26px]">
          <div className="flex flex-col gap-[16px]">
            <h1 className="font-clashDisplayMedium text-[32px] leading-[42px]">
              Newsletter
            </h1>
            <p className="font-clashDisplayMedium text-[16px] leading-[26px]">
              Stay Up To Date
            </p>
          </div>

          <div className="flex">
            <div className="ml-[10px] mt-[10px] flex h-[61px] w-[160px] items-center justify-center bg-white text-[#81848A]">
              <p className="font-clashDisplayMedium text-[16px] leading-[26px]">
                Your Email
              </p>
            </div>
            <div className="mr-[10px] mt-[10px] flex h-[61px] w-[160px] items-center justify-center bg-black text-white">
              <p className="font-clashDisplayMedium text-[16px] leading-[26px]">
                Subscribe
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1090px] h-[104px] flex justify-center items-center mt-[92px] mb-[41px]">
        <h1 className="font-clashDisplayMedium text-[16px] leading-[26px]">
          Copyright 2022 Uifry.Com All Rights Reserved
        </h1>
      </div>
    </section>
  );
};

export default Footer;
