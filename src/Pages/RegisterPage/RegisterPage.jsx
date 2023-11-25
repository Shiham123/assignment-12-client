import { useForm } from 'react-hook-form';
import ButtonComponent from '../../SubComponent/button';
import { Link, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import SectionTitle from '../../SubSection/SectionTitle';
import useAuth from '../../Hooks/useAuth';
import usePublicApi from '../../Hooks/usePublicApi';
import swal from 'sweetalert';

const RegisterPage = () => {
  const [registerBtn] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formRef = useRef(null);
  const publicApi = usePublicApi();

  const { createUser, profileUpdate, logOut } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { username, url, password, email } = data;
    createUser(email, password)
      .then((result) => {
        console.log(result);

        profileUpdate(username, url)
          .then((result) => {
            console.log(result);
            formRef.current.reset();

            const userInfo = { username, url, email, role: 'user' };
            publicApi
              .post('/users', userInfo)
              .then((response) => console.log(response))
              .catch((error) => console.log(error));

            logOut()
              .then((result) => {
                console.log(result);
                swal(
                  'Create user successfully',
                  'user Created Successfully',
                  'success'
                );
                navigate('/loginPage');
              })
              .catch((error) => console.log(error));
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="p-4">
      <SectionTitle
        heading="Register page"
        subHeading="Please create your account"
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
                  Name
                </span>
              </label>
              <input
                type="text"
                placeholder="User name"
                className="outline-none border-[2px] border-colorFour p-4 rounded-lg font-poppins text-2xl"
                {...register('username', { required: true })}
              />
              {errors.username && (
                <span className="font-poppins p-2 text-sm text-red-600 font-light">
                  Display name Field is required
                </span>
              )}
            </div>
            {/* PhotoUrl */}
            <div className="form-control my-8">
              <label className="label">
                <span className="font-cinzel text-2xl uppercase font-semibold tracking-widest">
                  Photo Url
                </span>
              </label>
              <input
                type="url"
                placeholder="Photo URL"
                className="outline-none border-[2px] border-colorFour p-4 rounded-lg font-poppins text-2xl"
                {...register('url', { required: true })}
              />
              {errors.url && (
                <span className="font-poppins p-2 text-sm text-red-600 font-light">
                  Photo Url Field is required
                </span>
              )}
            </div>
            {/* Email */}
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
            {/* Password */}
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
              <ButtonComponent registerBtn={registerBtn} />
            </div>
          </form>

          {/* Login route */}
          <div className="text-center text-2xl pt-4 pb-12">
            <p className="font-cinzel text-colorOne capitalize">
              Already have a account
              <Link to="/loginPage">
                <span className="font-semibold uppercase">Login</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
