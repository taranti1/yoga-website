export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Schedule", href: "/schedule" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];
