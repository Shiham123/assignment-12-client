import { NavLink } from 'react-router-dom';

const SurveyorPanel = () => {
  return (
    <div className="w-64 min-h-screen bg-colorTwo">
      <div className="px-8 my-12">
        <h1 className="font-cinzel font-[900] text-[23px] text-footerBgColorThree">
          Surveyor
        </h1>
        <h2 className="font-cinzel text-[17px] font-bold text-footerBgColorThree tracking-[7px]">
          DashBroad
        </h2>
      </div>
      <ul className="px-8">
        <div className="flex flex-col gap-8">
          <li>
            <NavLink
              to="/dashBroad/createSurvey"
              className={({ isActive }) =>
                isActive
                  ? 'text-colorTwo bg-colorOne px-4 py-2 rounded-lg text-xl font-semibold font-cinzel'
                  : 'text-xl text-colorFour font-semibold font-cinzel'
              }
            >
              Create survey
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashBroad/UserFeedback"
              className={({ isActive }) =>
                isActive
                  ? 'text-colorTwo bg-colorOne px-4 py-2 rounded-lg text-xl font-semibold font-cinzel'
                  : 'text-xl text-colorFour font-semibold font-cinzel'
              }
            >
              User Feedback
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashBroad/adminFeedback"
              className={({ isActive }) =>
                isActive
                  ? 'text-colorTwo bg-colorOne px-4 py-2 rounded-lg text-xl font-semibold font-cinzel'
                  : 'text-xl text-colorFour font-semibold font-cinzel'
              }
            >
              Admin Feedback
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashBroad/responseSurvey"
              className={({ isActive }) =>
                isActive
                  ? 'text-colorTwo bg-colorOne px-4 py-2 rounded-lg text-xl font-semibold font-cinzel'
                  : 'text-xl text-colorFour font-semibold font-cinzel'
              }
            >
              Response
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

export default SurveyorPanel;
