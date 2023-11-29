// LoginPage.js
import { useRef, useState } from 'react';
import ButtonComponent from '../../SubComponent/button';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SectionTitle from '../../SubSection/SectionTitle';
import useAuth from '../../Hooks/useAuth';
import swal from 'sweetalert';
import { AiOutlineGoogle } from 'react-icons/ai';
import usePublicApi from '../../Hooks/usePublicApi';

const LoginPage = () => {
  const [loginBtn] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { loginUser, socialLogin } = useAuth();
  const formRef = useRef(null);
  const navigate = useNavigate();
  const publicApi = usePublicApi();
  const location = useLocation();
  const from = location.state?.from?.pathname;

  const onSubmit = (data) => {
    const { email, password } = data;
    loginUser(email, password)
      .then((result) => {
        console.log(result);
        formRef.current.reset();
        swal('login successfully', 'you logged in successfully', 'success');
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  const googleLogin = () => {
    socialLogin()
      .then((result) => {
        console.log(result);
        navigate('/');

        const userInfo = {
          email: result.user?.email,
          username: result.user?.displayName,
          url: result.user?.photoURL,
          role: 'user',
        };

        publicApi.post('/users', userInfo).then((response) => {
          console.log(response);
          navigate('/');
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <section className="p-4">
      <SectionTitle
        heading="Login page"
        subHeading="Please login with your account"
      />
      <div className="flex justify-center items-center my-20">
        <div className="bg-colorTwo rounded-lg">
          <form
            className="m-[5rem]"
            onSubmit={handleSubmit(onSubmit)}
            ref={formRef}
          >
            <div className="form-control my-8">
              <label className="label">
                <span className="font-cinzel text-2xl uppercase font-semibold tracking-widest">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="outline-none border-[2px] border-colorFour p-4 rounded-lg font-poppins text-2xl"
                {...register('email', { required: true })}
              />
              {errors.email && (
                <span className="font-poppins p-2 text-sm text-red-600 font-light">
                  Email Field is required
                </span>
              )}
            </div>
            <div className="form-control my-8">
              <label className="label">
                <span className="font-cinzel text-2xl uppercase font-semibold tracking-widest">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="outline-none border-[2px] border-colorFour p-4 rounded-lg font-poppins text-2xl"
                {...register('password', { required: true })}
              />
              {errors.password && (
                <span className="font-poppins p-2 text-sm text-red-600 font-light">
                  Password Field is required
                </span>
              )}
            </div>
            <div className="form-control mt-6">
              <ButtonComponent loginBtn={loginBtn} />
            </div>
          </form>

          {/* Register route */}
          <div className="text-center text-2xl pt-4 pb-12">
            <p className="font-cinzel text-colorOne capitalize">
              Don&apos; have a account{' '}
              <Link to="/registerPage">
                <span className="font-semibold uppercase">Register</span>
              </Link>
            </p>
            <div
              onClick={googleLogin}
              className="w-full bg-colorFive flex justify-center items-center p-4 rounded-lg cursor-pointer hover:bg-transparent  border-2 border-colorFive duration-300 gap-4"
            >
              <AiOutlineGoogle size={30} /> <span>Login with google</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
