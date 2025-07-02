import { Link, NavLink } from 'react-router-dom';
// import Logo from '../assets/WhatsApp Image 2025-05-15 at 02.55.46_e2d38c84.jpg';
import Logo from '../assets/logo.jpg';

function Header() {
  return (
    <header className="@container flex items-center justify-between px-5 pt-5">
      <div className="flex w-[20%] items-center gap-x-3 font-bold">
        <img src={Logo} className="w-[80px] rounded-full object-cover" />
        <h1>SMART FARM</h1>
      </div>

      <nav className="flex w-[50%] justify-evenly">
        <NavLink to="/home" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/pricing" className="nav-link">
          Pricing
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          Contact Us
        </NavLink>
      </nav>
      <div className="flex w-[20%] items-center justify-evenly">
        <Link to="/login" className="nav-link">
          Login
        </Link>
        <Link
          to="/signUp"
          className="rounded-md border-1 border-amber-100 px-5 py-3 hover:bg-[#474055]"
        >
          Sign up
        </Link>
      </div>
    </header>
  );
}
export default Header;
