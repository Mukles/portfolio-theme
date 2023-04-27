import Image from "next/image";
import SubTitle from "./sub-title";

const Contact = () => {
  return (
    <div className="sm:container">
      <div className="rounded-[25px] shadow-[0_25px_18px_rgba(183,189,212,0.16)]">
        <div className="flex flex-wrap">
          <div className="lg:grow-0 lg:shrink-0 lg:basis-[58%] lg:max-w-[58%] px-[15px] w-full">
            <div className="px-[60px] pb-[80px]">
              <SubTitle title="Contact Me" className="mb-14" />
              <h1 className="section-title">
                Estimate Your Project? <br /> Let Me Know Here.
              </h1>

              <form className="w-full">
                <div className="mt-11">
                  <input
                    className="border-b w-full font-light leading-[27px] text-lg focus:border-primary text-[#495057] border-gray-200 focus:outline-none pb-[15px]"
                    type="text"
                    name=""
                    value=""
                    placeholder="What's your name?"
                  />
                </div>
                <div className="mt-11">
                  <input
                    className="border-b w-full font-light leading-[27px] text-lg focus:border-primary text-[#495057] border-gray-200 focus:outline-none pb-[15px]"
                    type="email"
                    name=""
                    value=""
                    placeholder="Your email?"
                  />
                </div>
                <div className="mt-11">
                  <input
                    className="border-b w-full font-light leading-[27px] text-lg focus:border-primary text-[#495057] border-gray-200 focus:outline-none pb-[15px]"
                    type="text"
                    name=""
                    value=""
                    placeholder="Tell me about your project?"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="lg:grow-0 lg:shrink-0 lg:basis-[42%] lg:max-w-[42%] px-[15px] w-full">
            <Image
              layout="responsive"
              width={500}
              height={500}
              src={"/img/contact/contact.png"}
              alt="contact"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
