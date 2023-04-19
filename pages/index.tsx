import { sections } from "@/utils/component-list";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Define a transition object to apply to all motion sections
const transition = {
  duration: 1.3,
  ease: [0.55, 0.085, 0, 0.99],
};

interface Props {
  path: string;
  handleNavigation: (sectionName: string) => void;
}

// Define the Experiment component
const Experiment = ({ path, handleNavigation }: Props): JSX.Element => {
  // Initialize variables for tracking the current section index, scroll position, and whether or not the user can currently scroll
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
    const deltaY = -event.deltaY / 120;
    hanldeScroll(deltaY);
  };

  const hanldeScroll = (deltaY: number) => {
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
      deltaY < 0 &&
      currentScrollPosition === sectionHeight &&
      userCanScroll &&
      currentSectionIndex < sections.length - 1
    ) {
      setCurrentSectionIndex(currentSectionIndex + 1);
      handleNavigation(sections[currentSectionIndex + 1].sectionName);
    }

    // Move to the previous section if the user is scrolling up and has reached the top of the current section
    if (deltaY > 0 && upTrigger && userCanScroll && currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
      handleNavigation(sections[currentSectionIndex - 1].sectionName);
    }
  };

  const handleOnTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    // Store the initial touch position
    const startY = event.touches[0].clientY;
    // console.log({ startY });

    const handleOnTouchMove = (moveEvent: TouchEvent) => {
      // Calculate the change in touch position
      const deltaY = moveEvent.touches[0].clientY - startY;
      // console.log({ deltaY });

      // Handle the scroll based on the change in touch position
      hanldeScroll(deltaY);
    };

    // Add the touch move event listener
    document.addEventListener("touchmove", handleOnTouchMove, {
      passive: false,
    });
  };

  return (
    <AnimatePresence>
      {sections.map((section, i) => (
        <motion.section
          onTouchStart={handleOnTouchStart}
          onWheel={handleOnMouseWheel}
          id={`${section.sectionName}`}
          style={{ zIndex: sections.length - i }}
          key={section.id}
          animate={{ y: i < currentSectionIndex ? "-100%" : 0 }}
          transition={transition}
          onAnimationStart={() => setUserCanScroll(false)}
          onAnimationComplete={() => setUserCanScroll(true)}
          className={`fixed top-0 left-0 w-full h-full overflow-y-auto bg-white py-[185px] lg:py-[100px]`}
        >
          {section.component}
        </motion.section>
      ))}
    </AnimatePresence>
  );
};

export default Experiment;
