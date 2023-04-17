interface NavigationItem {
  id: number;
  label: string;
  href: string;
}

const navigationData: NavigationItem[] = [
  { id: 1, label: "Home", href: "home" },
  { id: 2, label: "About", href: "about" },
];

export default navigationData;
