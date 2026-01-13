import React from "react";
import { Link } from "react-router-dom";
import crtdLogo from "../../assets/crtd.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4">
      {/* Logo */}
      <div>
        <img src={crtdLogo} alt="CRTD Logo" className="h-10" />
      </div>

      {/* Menu */}
      <ul className="flex gap-6">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/fresher-jobs">Fresher Jobs</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
      </ul>

      {/* Buttons */}
      <div className="flex gap-4">
        <Link to="/login">
          <button className="px-4 py-2 border rounded">Login</button>
        </Link>
        <Link to="/signup">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
