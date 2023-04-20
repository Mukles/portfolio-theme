import navigationData from "@/utils/navigationData";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { fadeInUp } from "./Home";

interface Props {
  handleNavigation: (sectionName: string) => void;
  isOpen: boolean;
  toggle: () => void;
}

const variants = {
  open: { x: 0 },
  close: { x: "100%" },
};

const SideBar = ({ isOpen, toggle, handleNavigation }: Props) => {
  const sideBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const element = event.target as HTMLElement;

      if (
        sideBarRef.current &&
        !sideBarRef.current.contains(element) &&
        !element.closest(".close")
      ) {
        toggle();
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [toggle]);

  return (
    <motion.div
      ref={sideBarRef}
      variants={variants}
      animate="open"
      initial="close"
      exit="close"
      transition={{
        duration: 0.35,
        ease: "circOut",
      }}
      className="w-96 bg-white fixed top-0 right-0 h-full z-20 p-[65px] flex flex-col"
    >
      <motion.ul
        variants={fadeInUp}
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.5, delay: 0.3, ease: "circOut" },
        }}
        className="flex space-x-7"
      >
        <li>
          <button className=" uppercase text-sm leading-[32px] font-semibold text-[#212246] hover:text-[#212246]">
            Eng.
          </button>
        </li>
        <li>
          <button className=" uppercase text-sm leading-[32px] font-semibold text-[#a3a4a8] hover:text-[#212246]">
            Fra.
          </button>
        </li>
        <li>
          <button className=" uppercase text-sm leading-[32px] font-semibold text-[#a3a4a8] hover:text-[#212246]">
            Ara.
          </button>
        </li>
      </motion.ul>
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.6, delay: 0.7, ease: "circOut" },
        }}
        className="h-full overflow-y-auto mt-24"
      >
        <ul className="space-y-7">
          {navigationData.map(({ label, id, href }) => (
            <li key={id}>
              <Link
                onClick={() => handleNavigation(href)}
                className="text-[18px] leading-[32px] font-bold text-[#1f2044] bg-[#fcf1e7]"
                href={`#${href}`}
              >
                {label}
              </Link>
            </li>
          ))}
          {navigationData.map(({ label, id, href }) => (
            <li key={id}>
              <Link
                onClick={() => handleNavigation(href)}
                className="text-[18px] leading-[32px] font-bold text-[#1f2044] bg-[#fcf1e7]"
                href={`#${href}`}
              >
                {label}
              </Link>
            </li>
          ))}
          {navigationData.map(({ label, id, href }) => (
            <li key={id}>
              <Link
                onClick={() => handleNavigation(href)}
                className="text-[18px] leading-[32px] font-bold text-[#1f2044] bg-[#fcf1e7]"
                href={`#${href}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default SideBar;
