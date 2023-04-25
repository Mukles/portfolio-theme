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
];

export default navigationData;
