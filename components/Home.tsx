import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

const Home = () => {
  return (
    <div className="container mx-auto max-w-[1130px]">
      <div className="mx-auto absolute top-[35px] left-1/2 w-1/2 translate-x-[-50%] flex justify-between">
        <ul className="flex">
          <li className="pr-10 mr-10 after:[/] ">
            <a href="callto:(+778)675-0765">Call: (+778) 675-0765</a>
          </li>
          <li>
            <a href="mailto:hello_niharika@gmail.com">
              hello_niharika@gmail.com
            </a>
          </li>
        </ul>

        <a className="flex" href="">
          Download CV <ArrowDownTrayIcon className="w-5 h-5 ml-2" />
        </a>
      </div>

      <div className="flex flex-wrap pt-[100px]">
        <div className=" basis-[42%] max-w-[42%]">
          <h3 className="text-3xl font-bold">Introduction</h3>
          <h1 className="text-6xl font-bold leading-[82px] text-[#1d2043]">
            HI, <br /> I&rsquo;m{" "}
            <span className="text-[#df5646]">Niharika</span>
          </h1>
          <h3 className="text-[31px] leading-[37px] text-[#1d2043] my-3">
            User Interface Designer
          </h3>
          <p className="text-lg leading-[32px] text-[#a3a5a7] my-4">
            Hey are looking for designer to build your
            <span className="text-[#1d2043] font-medium">
              Brand and gorw your business ?{" "}
            </span>
            let&rsquo;s shake hands with me.
          </p>

          <a
            href="#about"
            className="text-sm leading-[32px] text-white font-medium py-2 mt-5 rounded-lg text-center bg-[#df5646] inline-block w-[150px]"
          >
            Hire Me
          </a>
        </div>
        <div className="flex-1">
          <img src="./img/about.png" alt="about" />
        </div>
      </div>
    </div>
  );
};

export default Home;
