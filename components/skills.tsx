import Image from "next/image";
import SubTitle from "./sub-title";
import TypedAnimation from "./typed-animation";

const Skills = () => {
  return (
    <div className="sm:container overflow-hidden">
      <div className="flex flex-wrap items-center">
        <div className="lg:grow-0 lg:shrink-0 lg:basis-[42%] lg:max-w-[42%] px-[15px]">
          <SubTitle className={"mb-[45px]"} title="Skills" />
          <div className="max-w-[450px]">
            <h1 className="section-title">
              As A Designer I Am Good At Fit With Few
              <TypedAnimation text="Skills." />
            </h1>
            <p className="section-desc mb-[54px]">
              All desigener have good skills to make sure satisfied their
              clints, As a designer I am also specialised few{" "}
              <b className="text-heading font-medium">skills.</b>
            </p>

            <div className="progress-container max-w-[330px] w-full space-y-5">
              {[...Array(4)].map((item, i) => (
                <div key={i}>
                  <div className="progress-label flex justify-between mb-1">
                    <p className="text-sm leading-[32px] text-heading font-medium">
                      App Design
                    </p>
                    <p className="text-[10px] leading-[32px] text-base font-light">
                      78%
                    </p>
                  </div>
                  <div className="progress-bar overflow-hidden bg-[#e9eeef] h-2 rounded-full relative after:content-[''] after:absolute after:left-0 after:top-0 after:h-full after:w-1/2 after:bg-[#75A9D6]"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:grow-0 lg:shrink-0 lg:basis-[58%] lg:max-w-[58%] px-[15px] w-full">
          <div className="pt-[55px]">
            <Image
              width={600}
              height={550}
              src="/img/skill/skills.png"
              alt="skill"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
