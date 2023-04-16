import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import Link from "next/link";
import { MenuToggle } from "./menu-toggle";
import SideBar from "./sidebar";

const overlay = {
  open: {
    background: "rgba(0, 0, 0, 0.75",
  },
  closed: {
    background: "rgb(255, 255, 225, 1",
  },

  transition: { duration: 0.3 },
};

const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <header>
      <div className="fixed top-[35px] left-[50px] z-50">
        <Link href={"/"}>
          <b>It&rsquo;s </b>me
        </Link>
      </div>

      <div className="fixed top-[35px] right-[130px] flex items-center z-20">
        <span>Let&rsquo;s Talk</span>
        <button className="w-[34px] h-[34px] rounded-[3px] shadow-lg ml-5 bg-white flex items-center justify-center">
          <ChatBubbleLeftEllipsisIcon className="w-5 h-5" />
        </button>
      </div>

      <div className="fixed top-[35px] right-[50px] z-50">
        <MenuToggle isOpen={isOpen} toggle={() => toggleOpen()} />
      </div>

      {
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={false}
              variants={overlay}
              animate={isOpen ? "open" : "closed"}
              className="fixed top-0 left-0 w-full h-full z-20"
            >
              <SideBar isOpen={isOpen} toggle={() => toggleOpen()} />
            </motion.div>
          )}
        </AnimatePresence>
      }
    </header>
  );
};

export default Header;
