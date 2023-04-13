import {
  Bars3Icon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import SideBar from "./sidebar";

const Header = () => {
  return (
    <header>
      <div className="fixed top-[35px] left-[50px] z-50">
        <Link href={"/"}>
          <b>It&rsquo;s </b>me
        </Link>
      </div>

      <div className="fixed top-[35px] right-[130px] flex items-center z-50">
        <span>Let&rsquo;s Talk</span>
        <button className="w-[34px] h-[34px] rounded-[3px] shadow-lg ml-5 bg-white flex items-center justify-center">
          <ChatBubbleLeftEllipsisIcon className="w-5 h-5" />
        </button>
      </div>

      <div className="fixed top-[35px] right-[50px] z-50">
        <button className="w-[34px] h-[34px] flex items-center justify-center">
          <Bars3Icon className="w-[25px] h-[25px]" />
        </button>
      </div>

      <SideBar />
    </header>
  );
};

export default Header;
