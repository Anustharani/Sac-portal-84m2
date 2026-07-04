import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-2xl font-bold text-cyan-400">
          GCS Council
        </h1>

        <ul className="hidden md:flex gap-8 font-medium">
          <li className="hover:text-cyan-400 cursor-pointer">Home</li>
          <li className="hover:text-cyan-400 cursor-pointer">Certifications</li>
          <li className="hover:text-cyan-400 cursor-pointer">Training</li>
          <li className="hover:text-cyan-400 cursor-pointer">About</li>
          <li className="hover:text-cyan-400 cursor-pointer">Contact</li>
        </ul>

        <Link
          to="/login"
          className="bg-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-600"
        >
          Login
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;