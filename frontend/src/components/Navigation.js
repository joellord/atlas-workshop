import { SideNav, SideNavItem } from '@leafygreen-ui/side-nav';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Navigation ({ className }) {
  const location = useLocation();

  return (
    <SideNav aria-label="Navigation Bar" className={className}>
      <SideNavItem aria-label="Home" as={Link} active={location.pathname === "/"} to="/">Home</SideNavItem>
      <SideNavItem aria-label="Recipes" as={Link} active={location.pathname === "/recipes"} to="/recipes">Recipes</SideNavItem>
      <SideNavItem aria-label="Chefs" as={Link} active={location.pathname === "/chefs"} to="/chefs">Chefs</SideNavItem>
      <SideNavItem aria-label="Stats" as={Link} active={location.pathname === "/stats"} to="/stats">Stats</SideNavItem>
    </SideNav>
  );
}