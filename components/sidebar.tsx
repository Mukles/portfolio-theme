import navigationData from "@/utils/navigationData";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface Props {
  handleNavigation: (sectionName: string) => void;
  isOpen: boolean;
  toggle: () => void;
}

const SideBar = ({ isOpen, toggle, handleNavigation }: Props) => {
  const sideBarRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <motion.div
      ref={sideBarRef}
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.2 }}
      className="w-96 bg-white fixed top-0 right-0 h-full z-20 p-[65px] flex flex-col"
    >
      <ul className="flex space-x-7">
        <li>
          <button className=" uppercase text-sm leading-[32px] font-semibold text-[#212246]">
            Eng.
          </button>
        </li>
        <li>
          <button className=" uppercase text-sm leading-[32px] font-semibold text-[#212246]">
            Fra.
          </button>
        </li>
        <li>
          <button className=" uppercase text-sm leading-[32px] font-semibold text-[#212246]">
            Ara.
          </button>
        </li>
      </ul>
      <div className="h-full overflow-y-auto mt-24">
        <ul className="space-y-7">
          {navigationData.map(({ label, id, href }) => (
            <li key={id}>
              <Link
                onClick={() => handleNavigation(href)}
                className="text-[18px] leading-[32px] font-bold text-[#1f2044]"
                href={`#${href}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default SideBar;
