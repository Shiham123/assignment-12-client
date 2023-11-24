import { NavLink } from 'react-router-dom';
import { FcMenu } from 'react-icons/fc';
import { FaHome, FaList, FaBook, FaUserFriends } from 'react-icons/fa';
import { ImSpoonKnife } from 'react-icons/im';

const AdminPanel = () => {
  return (
    <div className="w-64 min-h-screen bg-colorFive">
      <div className="px-8 my-12">
        <h1 className="font-cinzel font-[900] text-[23px] text-footerBgColorThree">
          BISTRO BOSS
        </h1>
        <h2 className="font-cinzel text-[17px] font-bold text-footerBgColorThree tracking-[7px]">
          Restaurant
        </h2>
      </div>
      <ul className="px-8">
        <li>
          <NavLink
            to="/dashBroad/home"
            className={({ isActive }) =>
              isActive ? 'text-white' : 'text-footerBgColorThree'
            }
          >
            <div className="flex justify-start items-center gap-4 py-4">
              <FaHome size={40} />
              <p className="font-cinzel font-semibold text-[16px] uppercase">
                Admin home
              </p>
            </div>
          </NavLink>
        </li>
        {/* second li */}
        <li>
          <NavLink
            to="/dashBroad/cart"
            className={({ isActive }) =>
              isActive ? 'text-white' : 'text-footerBgColorThree'
            }
          >
            <div className="flex justify-start items-center gap-4 py-4">
              <ImSpoonKnife size={40} />
              <p className="font-cinzel font-semibold text-[16px] uppercase">
                add items
              </p>
            </div>
          </NavLink>
        </li>
        {/* third li */}
        <li>
          <NavLink
            to="/dashBroad/items"
            className={({ isActive }) =>
              isActive ? 'text-white' : 'text-footerBgColorThree'
            }
          >
            <div className="flex justify-start items-center gap-4 py-4">
              <FaList size={40} />
              <p className="font-cinzel font-semibold text-[16px] uppercase">
                manage items
              </p>
            </div>
          </NavLink>
        </li>
        {/* fourth li */}
        <li>
          <NavLink
            to="/dashBroad/booking"
            className={({ isActive }) =>
              isActive ? 'text-white' : 'text-footerBgColorThree'
            }
          >
            <div className="flex justify-start items-center gap-4 py-4">
              <FaBook size={40} />
              <p className="font-cinzel font-semibold text-[16px] uppercase">
                Manage bookings
              </p>
            </div>
          </NavLink>
        </li>
        {/* Fifth li */}
        <li className="pb-12">
          <NavLink
            to="/dashBroad/user"
            className={({ isActive }) =>
              isActive ? 'text-white' : 'text-footerBgColorThree'
            }
          >
            <div className="flex justify-start items-center gap-4 py-4">
              <FaUserFriends size={40} />
              <p className="font-cinzel font-semibold text-[16px] uppercase">
                all users
              </p>
            </div>
          </NavLink>
        </li>
        {/* Sixth li */}

        <li className="border-t-[2px] pt-12 border-footerBgColorThree">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-white' : 'text-footerBgColorThree'
            }
          >
            <div className="flex justify-start items-center gap-4 py-4">
              <FaHome size={40} />
              <p className="font-cinzel font-semibold text-[16px] uppercase">
                Home
              </p>
            </div>
          </NavLink>
        </li>
        {/* menu */}
        <li>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              isActive ? 'text-white' : 'text-footerBgColorThree'
            }
          >
            <div className="flex justify-start items-center gap-4 py-4">
              <FcMenu size={40} />
              <p className="font-cinzel font-semibold text-[16px] uppercase">
                Menu
              </p>
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminPanel;
