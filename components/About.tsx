const About = () => {
  return (
    <div className="container mx-auto max-w-[1164px]">
      <div className="flex flex-wrap flex-row-reverse pt-[100px]">
        <div className=" basis-[42%] max-w-[42%] justify-center flex flex-col">
          <h1 className="text-3xl font-bold leading-[45px] text-[#1d2043]">
            What Services I Provde To <br />
            <span className="text-[#df5646]">My Clients In Here.</span>
          </h1>
          <h3 className="text-[31px] leading-[37px] text-[#1d2043] my-3">
            User Interface Designer
          </h3>
          <p className="text-lg leading-[32px] text-[#a3a5a7] my-4">
            I always want to be able to meet the goals of my clients, I value my
            services as a designer through my work. You may like my .
            <span className="text-[#1d2043] font-medium">services.</span>
          </p>

          <a
            href=""
            className="text-sm leading-[32px] text-white font-medium py-2 mt-5 rounded-lg text-center bg-[#df5646] inline-block w-[150px]"
          >
            Hire Me
          </a>
        </div>
        <div className="flex-1">
          <img src="./img/services.png" alt="about" />
        </div>
      </div>
    </div>
  );
};

export default About;
