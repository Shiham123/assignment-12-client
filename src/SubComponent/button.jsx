import PropTypes from 'prop-types';

const ButtonComponent = (props) => {
  const { heroBtn, loginBtn, registerBtn } = props;
  return (
    <>
      {heroBtn ? (
        <button className="bg-colorFour px-12 py-4 text-sm md:text-xl lg:text-2xl font-cinzel font-bold tracking-wide rounded-lg border-2 border-colorThree duration-200 hover:bg-colorOne hover:bg-opacity-70 hover:scale-105 hover:text-colorThree">
          Explore Surveys
        </button>
      ) : loginBtn ? (
        <button className="bg-colorFive px-4 py-2 text-sm md:text-xl lg:text-2xl font-poppins font-semibold tracking-wide rounded-lg border-2 border-colorFive duration-200 hover:bg-transparent hover:text-colorFour">
          Login
        </button>
      ) : registerBtn ? (
        <button className="bg-colorFive px-4 py-2 text-sm md:text-xl lg:text-2xl font-poppins font-semibold tracking-wide rounded-lg border-2 border-colorFive duration-200 hover:bg-transparent hover:text-colorFour">
          Register
        </button>
      ) : (
        <button className="bg-colorThree px-4 py-2 text-sm md:text-xl lg:text-2xl font-poppins font-semibold tracking-wide rounded-lg border-2 border-colorThree duration-200 hover:bg-transparent hover:text-colorThree">
          Login/Register
        </button>
      )}
    </>
  );
};

ButtonComponent.propTypes = {
  heroBtn: PropTypes.bool.isRequired,
  loginBtn: PropTypes.bool.isRequired,
  registerBtn: PropTypes.bool.isRequired,
};

export default ButtonComponent;
