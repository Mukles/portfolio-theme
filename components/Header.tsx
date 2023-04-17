import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import Link from "next/link";
import { MenuToggle } from "./menu-toggle";
import SideBar from "./sidebar";

const overlay = {
  open: {
    background: "rgba(0, 0, 0, 0.65",
  },
  closed: {
    background: "rgb(255, 255, 225, 1",
  },
};

interface Props {
  handleNavigation: (sectionName: string) => void;
}

const Header = ({ handleNavigation }: Props) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <header>
      <div className="fixed top-[35px] left-[50px] z-50">
        <Link href={"/"}>
          <b>It&rsquo;s </b>me
        </Link>
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M326.27 80.14a23.954 23.954 0 0 0-24.03-6.02l-81.312 24.372-10.672-35.908a23.983 23.983 0 0 0-11.968-11.97L140.148 9.14a24 24 0 0 0-34.044 8.484L18.163 215.226c-9.76 16.913-5.628 38.746 10.08 52.482l66.682 53.345 10.666 128.67a24.006 24.006 0 0 0 23.85 20.754c.425 0 .85-.013 1.275-.04l124.804-12.48a23.975 23.975 0 0 0 20.87-24.49L283.3 276.856l53.345-66.682c14.13-17.63 12.864-43.69-3.068-59.78L154.478 84.512l28.214 94.77 51.317 17.105a24.035 24.035 0 0 0 16.238-5.178l81.312-73.18c7.49-6.703 10.754-16.6 8.747-26.305z" />
        </svg>
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
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 w-full h-full z-20"
            >
              <SideBar
                handleNavigation={handleNavigation}
                isOpen={isOpen}
                toggle={() => toggleOpen()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      }
    </header>
  );
};

export default Header;
