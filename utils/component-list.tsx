import About from "@/components/About";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Resume from "@/components/resume";
import Services from "@/components/services";
import Skills from "@/components/skills";
import Testimonials from "@/components/testimonials";
import Weapens from "@/components/weapens";

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
    id: 3,
    component: <Skills />,
    sectionName: "skills",
    background: "#fff",
  },
  {
    id: 4,
    component: <Resume />,
    sectionName: "resume",
    background: "#fff",
  },
  {
    id: 5,
    component: <Testimonials />,
    sectionName: "testimonial",
    background: "#fff",
  },
  {
    id: 5,
    component: <Weapens />,
    sectionName: "weapens",
    background: "#fff",
  },
  {
    id: 6,
    component: <Contact />,
    sectionName: "contact",
    background: "#fff",
  },
  {
    id: 8,
    component: <Footer />,
    sectionName: "footer",
    background: "#fff",
  },
];
