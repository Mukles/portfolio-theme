import Image from "next/image";
import SubTitle from "./sub-title";
import TypedAnimation from "./typed-animation";

const Testimonials = () => {
  return (
    <div className="sm:container">
      <div className="flex flex-wrap items-end">
        <div className="lg:grow-0 lg:shrink-0 lg:basis-1/2 lg:max-w-[50%] w-full px-[15px]">
          <Image
            width={569}
            height={814}
            src={"/img/testimonials/testimonial.png"}
            alt="testimonials"
          />
        </div>
        <div className="lg:grow-0 lg:shrink-0 lg:basis-1/2 lg:max-w-[50%] w-full px-[15px]">
          <div className="max-w-[540px] ml-auto pb-8">
            <SubTitle title="Testimonial" className="mb-10" />
            <h1 className="section-title">
              What My Happy <TypedAnimation text="Client" /> Saying Their
              Services.
            </h1>
            <p className="section-desc mt-10">
              Really they guy is amazing , he saved my times and properly have
              completed my requirment with great effort. I appreciate to him for
              web & app design, he is good at fit.
            </p>
            <div>
              <div className="mt-14 flex items-center space-x-6">
                <Image
                  width={70}
                  height={70}
                  src={"/img/testimonials/testi-author.png"}
                  alt="testi-author"
                />

                <div>
                  <h3 className="font-medium text-lg leading-[22px] text-heading">
                    Ryhan
                  </h3>
                  <p className="font-light text-[16px] leading-[32px] text-base">
                    CEO of <span className="text-primary">instragram</span>
                  </p>
                </div>
              </div>

              <ul className="mt-10">
                <li className="inline-block rounded-full relative after:m-0.5 after:block after:left-0 after:top-0 after:w-[10px] cursor-pointer after:h-[10px]  after:rounded-full after:bg-gray-400 border border-transparent mx-1"></li>
                <li className="inline-block rounded-full relative after:m-0.5 after:block after:left-0 after:top-0 after:w-[10px] cursor-pointer after:h-[10px]  after:rounded-full after:bg-primary border border-gray-400 mx-1"></li>
                <li className="inline-block rounded-full relative after:m-0.5 after:block after:left-0 after:top-0 after:w-[10px] cursor-pointer after:h-[10px]  after:rounded-full after:bg-gray-400 border border-transparent mx-1"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
