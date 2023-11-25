import { NavLink } from 'react-router-dom';

const AdminPanel = () => {
  return (
    <div className="w-64 min-h-screen bg-colorTwo">
      <div className="px-8 my-12">
        <h1 className="font-cinzel font-[900] text-[23px] text-footerBgColorThree">
          Admin
        </h1>
        <h2 className="font-cinzel text-[17px] font-bold text-footerBgColorThree tracking-[7px]">
          DashBroad
        </h2>
      </div>
      <ul className="px-8">
        <div className="flex flex-col gap-8">
          <li>
            <NavLink
              to="/dashBroad/charts"
              className={({ isActive }) =>
                isActive
                  ? 'text-colorTwo bg-colorOne px-4 py-2 rounded-lg text-3xl font-semibold font-cinzel'
                  : 'text-3xl text-colorFour font-semibold font-cinzel'
              }
            >
              OverView
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashBroad/manageUser"
              className={({ isActive }) =>
                isActive
                  ? 'text-colorTwo bg-colorOne px-4 py-2 rounded-lg text-3xl font-semibold font-cinzel'
                  : 'text-3xl text-colorFour font-semibold font-cinzel'
              }
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashBroad/surveyStatus"
              className={({ isActive }) =>
                isActive
                  ? 'text-colorTwo bg-colorOne px-4 py-2 rounded-lg text-3xl font-semibold font-cinzel'
                  : 'text-3xl text-colorFour font-semibold font-cinzel'
              }
            >
              Status
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashBroad/surveyResponse"
              className={({ isActive }) =>
                isActive
                  ? 'text-colorTwo bg-colorOne px-4 py-2 rounded-lg text-3xl font-semibold font-cinzel'
                  : 'text-3xl text-colorFour font-semibold font-cinzel'
              }
            >
              Response
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashBroad/paymentUser"
              className={({ isActive }) =>
                isActive
                  ? 'text-colorTwo bg-colorOne px-4 py-2 rounded-lg text-3xl font-semibold font-cinzel'
                  : 'text-3xl text-colorFour font-semibold font-cinzel'
              }
            >
              Payment
            </NavLink>
          </li>

          {/*  */}
          <li className="border-t-2 border-colorFour pt-8">
            <NavLink
              to="/"
              className={'text-3xl text-colorFour font-semibold font-cinzel'}
            >
              Home
            </NavLink>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default AdminPanel;
