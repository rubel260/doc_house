import Lottie from 'lottie-react';
import loginLottie from '../../assets/Lottie/login.json'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';

const Login = () => {
  const {loginUser} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  console.log('form login' , location);

  const from = location.state?.form?.pathname || '/';

  const [error , setError] = useState('')

   const {
      register,
      handleSubmit,
     
      
    } = useForm()
    const onSubmit = (data) => {
      toast('Your credentials submitting....')
      console.log('register infp' , data);
       const email = data.email;
       const password = data.password;
       loginUser(email , password)
       .then((result)=>{
        console.log('login success' , result.user);
        toast.success('login successfull.!')
        navigate(from , {replace: true})
       })
       .catch((err)=>{
        console.log(err);
        setError(err.message)
       })
    }

  return (
    <div >
       <Helmet>
                          <title>DocHouse || Login</title>
       </Helmet>
        <Link to={'/'} className="btn btn-ghost text-xl -mb-34 ml-20">DocHouse</Link>
      <div className="hero bg-base-200 min-h-screen">
        
        
        <div className="hero-content flex-col-reverse lg:flex-row">
          <div className="text-center lg:text-left">
           <Lottie animationData={loginLottie}></Lottie>
          </div>
          <div className="card bg-base-100 w-full p-5 max-w-lg shrink-0 shadow-2xl">
            <h1 className='text-4xl font-bold text-center'>Login sections</h1>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* email */}
                <div>
                <label className="label">Email</label>
                <input type="email " {...register("email", { required: true })} className="input w-full" placeholder="Email" />
                </div>

                {/* password */}
                <div>
                <label className="label">Password</label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  className="input w-full"
                  placeholder="Password"
                />
                </div>
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4 w-full">Login</button>
              </form>
              {
                error && <p className='text-red-500 font-bold'>{error}</p>
              }
              <h1>Don't have no accoutn then go <span className='text-red-500 font-bold'><Link to={'/register'}>register</Link></span></h1>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Login;
