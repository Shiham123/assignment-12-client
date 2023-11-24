// LoginPage.js
import { useState } from 'react';
import ButtonComponent from '../../SubComponent/button';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import SectionTitle from '../../SubSection/SectionTitle';

const LoginPage = () => {
  const [loginBtn] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <section className="p-4">
      <SectionTitle
        heading="Login page"
        subHeading="Please login with your account"
      />
      <div className="flex justify-center items-center my-20">
        <div className="bg-colorTwo rounded-lg">
          <form className="m-[5rem]" onSubmit={handleSubmit(onSubmit)}>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
