import { sections } from "@/utils/component-list";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

// Define a transition object to apply to all motion sections
const transition = {
  duration: 1,
  ease: [0.165, 0.84, 0.44, 1],
};

interface Props {
  path: string;
  handleNavigation: (sectionName: string) => void;
}

// Define the Experiment component
const Experiment = ({ path, handleNavigation }: Props): JSX.Element => {
  // Initialize variables for tracking the current section index, scroll position, and whether or not the user can currently scroll
  const router = useRouter();
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
      handleNavigation(sections[currentSectionIndex + 1].sectionName);
    }

    // Move to the previous section if the user is scrolling up and has reached the top of the current section
    if (delta > 0 && upTrigger && userCanScroll && currentSectionIndex > 0) {
      setCurrentSectionIndex((currentSectionIndex) => currentSectionIndex - 1);
      handleNavigation(sections[currentSectionIndex - 1].sectionName);
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
