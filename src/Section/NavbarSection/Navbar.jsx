import { Link, NavLink } from 'react-router-dom';
import { IoMenuSharp } from 'react-icons/io5';
import ButtonComponent from '../../SubComponent/button';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import useUsers from '../../Hooks/useUsers';
import useProUser from '../../Hooks/useProUser';

const Navbar = () => {
  const { user, logOut } = useAuth();
  const username = user?.displayName;
  const photoUrl = user?.photoURL;

  const [isNormalUser] = useUsers();
  const [proUser] = useProUser();

  const handleLogout = () => {
    logOut()
      .then((result) => {
        console.log(result);
        Swal.fire({
          icon: 'success',
          text: 'Logout successfully!',
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="navbar bg-colorOne px-8">
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
                {/* Drawer or dashBroad */}
                <NavLink
                  to="/dashBroad"
                  className={({ isActive }) =>
                    isActive
                      ? 'font-poppins text-white font-semibold px-4'
                      : 'font-poppins text-colorFour font-semibold px-4'
                  }
                >
                  DashBroad
                </NavLink>
                <NavLink
                  to="/proUser"
                  className={({ isActive }) =>
                    isActive
                      ? 'font-poppins text-white font-semibold px-4'
                      : 'font-poppins text-colorFour font-semibold px-4'
                  }
                >
                  Become pro user
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
            <h1 className="text-2xl md:text-3xl lg:text-4xl py-4 font-cinzel font-bold text-colorThree uppercase">
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
            {/* Drawer or dashBroad */}
            {isNormalUser || proUser ? (
              ''
            ) : (
              <NavLink
                to="/dashBroad"
                className={({ isActive }) =>
                  isActive
                    ? 'font-poppins text-colorFive font-semibold px-4'
                    : 'font-poppins text-white font-semibold px-4'
                }
              >
                DashBroad
              </NavLink>
            )}
            {isNormalUser && (
              <NavLink
                to="/proUser"
                className={({ isActive }) =>
                  isActive
                    ? 'font-poppins text-colorFive font-semibold px-4'
                    : 'font-poppins text-white font-semibold px-4'
                }
              >
                Become pro user
              </NavLink>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {proUser === true ? (
            <h1 className="bg-colorFour text-colorThree rounded-full p-2 text-[5px]">
              Pro
            </h1>
          ) : (
            ''
          )}
          <div className="flex justify-center items-center gap-4 mx-8">
            <div>
              {username && (
                <p className="font-cinzel text-colorTwo font-bold">
                  {username}
                </p>
              )}
            </div>
            <div>
              {photoUrl && (
                <img
                  width={30}
                  className="rounded-lg border-colorTwo"
                  src={photoUrl}
                />
              )}
            </div>
          </div>
          <div>
            {user ? (
              <button
                onClick={handleLogout}
                className="bg-colorThree px-4 py-2 text-sm md:text-xl lg:text-2xl font-poppins font-semibold tracking-wide rounded-lg border-2 border-colorThree duration-200 hover:bg-transparent hover:text-colorThree"
              >
                Logout
              </button>
            ) : (
              <Link to="/loginPage">
                <ButtonComponent />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
