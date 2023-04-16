import About from "@/components/About";
import Home from "@/components/Home";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

// Define a Section interface to keep track of each section's id, component, and section name
interface Section {
  id: number;
  component: JSX.Element;
  sectionName: string;
}

// Define a transition object to apply to all motion sections
const transition = {
  duration: 1,
  ease: [0.165, 0.84, 0.44, 1],
};

// Define the sections and their associated components and section names
const sections: Section[] = [
  { id: 1, component: <Home />, sectionName: "home" },
  { id: 2, component: <About />, sectionName: "about" },
];

// Define the Experiment component
const Experiment = (): JSX.Element => {
  // Initialize variables for tracking the current section index, scroll position, and whether or not the user can currently scroll
  const router = useRouter();
  const [path, setPath] = useState(
    typeof window !== "undefined" ? window.location.hash : ""
  );
  const index = sections.findIndex((section) => section.sectionName === path);
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(
    index >= 0 ? index : 0
  );
  const previousScrollPositionRef = useRef<number>(0);
  const [userCanScroll, setUserCanScroll] = useState<boolean>(true);

  useEffect(() => {
    // Check if the URL contains a section ID
    const sectionId = path.replace("#", "");
    const sectionIndex = sections.findIndex(
      (section) => section.sectionName === sectionId
    );

    // If a section ID is found, update the current section index
    if (sectionIndex !== -1) {
      setCurrentSectionIndex(sectionIndex);
    }
  }, [path]);

  useEffect(() => {
    // Listen for changes to the hash value in the URL bar
    const handleHashChange = () => {
      setPath(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    // Remove event listener on unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleNavigation = (sectionName: string) => {
    setPath(`#${sectionName}`);
    window.location.hash = `#${sectionName}`;
  };

  // Define a function to handle mouse wheel events
  const handleOnMouseWheel = (
    event: React.WheelEvent<HTMLDivElement>
  ): void => {
    // Calculate the amount of scroll delta from the mouse wheel event
    const delta = -event.deltaY / 120;

    // Find the current section by its index and get its associated section element
    const currentSection = sections[currentSectionIndex];
    const currentSectionElement = document.getElementById(
      currentSection.sectionName
    ) as HTMLElement;

    // Calculate the current scroll position, total height of the section, and whether or not the user is scrolling up or down
    const currentScrollPosition = currentSectionElement.scrollTop;
    const sectionHeight =
      currentSectionElement.scrollHeight - currentSectionElement.clientHeight;
    const isScrollingUp =
      previousScrollPositionRef.current < currentScrollPosition ? "down" : "up";

    // Update the scroll position for the next event
    previousScrollPositionRef.current = currentSectionElement.scrollTop;

    // Define the triggers for when to move to the next section
    const bottomTrigger =
      isScrollingUp === "down" && sectionHeight === currentScrollPosition;
    const upTrigger = isScrollingUp === "up" && currentScrollPosition === 0;

    // Move to the next section if the user is scrolling down and has reached the bottom of the current section
    if (
      delta < 0 &&
      currentScrollPosition === sectionHeight &&
      userCanScroll &&
      currentSectionIndex < sections.length - 1
    ) {
      setCurrentSectionIndex((currentSectionIndex) => currentSectionIndex + 1);
      router.push(`#${sections[currentSectionIndex + 1].sectionName}`);
    }

    // Move to the previous section if the user is scrolling up and has reached the top of the current section
    if (delta > 0 && upTrigger && userCanScroll && currentSectionIndex > 0) {
      setCurrentSectionIndex((currentSectionIndex) => currentSectionIndex - 1);
      router.push(`#${sections[currentSectionIndex - 1].sectionName}`);
    }
  };

  return (
    <AnimatePresence initial={false}>
      {sections.map((section, i) => (
        <motion.section
          onWheel={handleOnMouseWheel}
          id={`${section.sectionName}`}
          style={{ zIndex: sections.length - i }}
          key={section.id}
          animate={{ y: i < currentSectionIndex ? "-100%" : 0 }}
          transition={transition}
          onAnimationStart={() => setUserCanScroll(false)}
          onAnimationComplete={() => setUserCanScroll(true)}
          className={`fixed top-0 left-0 w-full h-full overflow-y-auto bg-white py-[100px]`}
        >
          {section.component}
        </motion.section>
      ))}
    </AnimatePresence>
  );
};

export default Experiment;
