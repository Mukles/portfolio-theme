import About from "@/components/About";
import Services from "@/components/services";
import Skills from "@/components/skills";

// Define a Section interface to keep track of each section's id, component, and section name
interface Section {
  id: number;
  component: JSX.Element;
  sectionName: string;
  background: string;
}

// Define the sections and their associated components and section names
export const sections: Section[] = [
  { id: 1, component: <About />, sectionName: "about", background: "#fff" },
  {
    id: 2,
    component: <Services />,
    sectionName: "services",
    background: "#fff",
  },
  {
    id: 2,
    component: <Skills />,
    sectionName: "skills",
    background: "#fff",
  },
];
