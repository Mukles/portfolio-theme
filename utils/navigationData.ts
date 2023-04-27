interface NavigationItem {
  id: number;
  label: string;
  href: string;
}

const navigationData: NavigationItem[] = [
  { id: 1, label: "About", href: "about" },
  { id: 2, label: "Services", href: "services" },
  { id: 3, label: "Skills", href: "skills" },
  { id: 4, label: "Resume", href: "resume" },
  { id: 4, label: "Weapens", href: "weapens" },
  { id: 5, label: "Testimonial", href: "testimonial" },
  { id: 6, label: "Contact", href: "contact" },
  { id: 6, label: "Footer", href: "footer" },
];

export default navigationData;
