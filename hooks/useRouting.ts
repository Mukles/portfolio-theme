import { useEffect, useState } from "react";

interface Section {
  id: number;
  component: JSX.Element;
  sectionName: string;
}

const useHashRouting = (sections: Section[]): [JSX.Element, () => void] => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);

  useEffect(() => {
    const handleHashChange = () => {
      const sectionName = window.location.hash.replace("#", "");
      const index = sections.findIndex(
        (section) => section.sectionName === sectionName
      );
      if (index >= 0) {
        setCurrentSectionIndex(index);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [sections]);

  const navigateToSection = () => {
    const section = sections[currentSectionIndex];
    window.location.hash = `#${section.sectionName}`;
  };

  return [sections[currentSectionIndex].component, navigateToSection];
};

export default useHashRouting;
