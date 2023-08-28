import { FaGithub, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {
  Nav,
  NavItems,
  NavLogo,
  NavLinkItems,
  NavGithub,
  NavHam,
  NavHamContainer
} from "./NavbarElements";

function Navbar({props, toggle}) {

  return (
    <header>
      <Nav>
        <NavItems>

          <NavLogo>
            <NavLink to='/' end className={({ isActive }) => isActive ? 'active' : ''}>
              WATCHLIST
            </NavLink>
          </NavLogo>

          <NavLinkItems>
            <NavLink to='/' end className={({ isActive }) => isActive ? 'active' : ''}>
              Home
            </NavLink>
          </NavLinkItems>

          <NavLinkItems>
            <NavLink to='/watchlist' className={({ isActive }) => isActive ? 'active' : ''}>
              Watchlist
            </NavLink>
          </NavLinkItems>

          <NavLinkItems>
            <NavLink to='/about' className={({ isActive }) => isActive ? 'active' : ''}>
              About
            </NavLink>
          </NavLinkItems>

          <NavGithub href="https://github.com/evinbg/Watchlist" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </NavGithub>

          <NavHamContainer>
            <NavHam onClick={toggle}>
              <FaBars />
            </NavHam>
          </NavHamContainer>

        </NavItems>
      </Nav>
    </header>
  );
}

// function NavbarItem(props) {

//   return (
//     <NavLink end to={props.to} className={({ isActive }) => isActive ? 'active' : ''}>
//       {props.text}
//     </NavLink>
//   );
// }

export default Navbar;