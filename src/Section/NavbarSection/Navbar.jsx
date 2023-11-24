import { Link, NavLink } from 'react-router-dom';
import { IoMenuSharp } from 'react-icons/io5';

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-colorOne">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <IoMenuSharp size={40} color="white" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-colorFive rounded-lg p-4 mt-3 z-[1] w-52"
            >
              <div className="flex flex-col gap-4">
                <NavLink
                  to={'/'}
                  className={({ isActive }) =>
                    isActive
                      ? 'font-poppins text-white font-semibold px-4'
                      : 'font-poppins text-colorFour font-semibold px-4'
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? 'font-poppins text-white font-semibold px-4'
                      : 'font-poppins text-colorFour font-semibold px-4'
                  }
                >
                  Contact page
                </NavLink>
                <NavLink
                  to="/surveyPage"
                  className={({ isActive }) =>
                    isActive
                      ? 'font-poppins text-white font-semibold px-4'
                      : 'font-poppins text-colorFour font-semibold px-4'
                  }
                >
                  Survey Page
                </NavLink>
              </div>
            </ul>
          </div>
          <div className="flex justify-center items-center gap-4">
            <img
              width={50}
              className="rounded-full"
              src="/src/assets/logo.png"
              alt=""
            />
            <h1 className="text-4xl py-4 font-poppins font-bold text-colorThree uppercase">
              Survey Website
            </h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLink
              to={'/'}
              className={({ isActive }) =>
                isActive
                  ? 'font-poppins text-colorFive font-semibold px-4'
                  : 'font-poppins text-white font-semibold px-4'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'font-poppins text-colorFive font-semibold px-4'
                  : 'font-poppins text-white font-semibold px-4'
              }
            >
              Contact page
            </NavLink>
            <NavLink
              to="/surveyPage"
              className={({ isActive }) =>
                isActive
                  ? 'font-poppins text-colorFive font-semibold px-4'
                  : 'font-poppins text-white font-semibold px-4'
              }
            >
              Survey Page
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/loginPage">
            <button className="bg-colorThree px-4 py-2 text-2xl font-poppins font-semibold tracking-wide rounded-lg border-2 border-colorThree duration-200 hover:bg-transparent hover:text-colorThree">
              Login/Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
