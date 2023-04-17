import About from "@/components/About";
import Home from "@/components/Home";

// Define a Section interface to keep track of each section's id, component, and section name
interface Section {
  id: number;
  component: JSX.Element;
  sectionName: string;
}

// Define the sections and their associated components and section names
export const sections: Section[] = [
  { id: 1, component: <Home />, sectionName: "home" },
  { id: 2, component: <About />, sectionName: "about" },
];
