import Lottie from 'lottie-react';
import registerLottie from '../../assets/Lottie/register.json'
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth'
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useAxiousPublic from '../../Hooks/useAxiousPublic'

const Register = () => {
  const axiousPublic = useAxiousPublic()
  const navigate = useNavigate();
  const {registerUsesr , updateUser} = useAuth();
    const {
    register,
    handleSubmit,
   
    
  } = useForm()
    const onSubmit = (data) => {
      toast('your valid info submitting....!')
      console.log('register infp' , data);
       const email = data.email;
    const password = data.password;
    registerUsesr(email , password)
    .then((result)=>{
      // console.log('register suucess' , result.user);
      // toast.success('registation successful ')
      updateUser(data.name ,data.photo )
      .then(res=>{
       // console.log('user update' , res);
       
        
        const userInfo = {
          name: data.name,
          email: data.email
        }
        axiousPublic.post('/users' , userInfo)
        .then(res=>{
          console.log('db user' , res.data);
           if(res.data.insertedId){
            toast.success('registation and update user successful ');

           navigate('/')
           }
        })


      })
      // .catch(err=>{
      //   console.log(err);
      // })
      
    })
    .catch(err=>{
      console.log('errorr' , err);
    })

    }

    return (
    <div>
       
      <div className="hero bg-base-200 min-h-screen">
        
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Lottie animationData={registerLottie}></Lottie>
             {/* <Lottie animationData={register}></Lottie> */}
          </div>
          <div className="card bg-base-100 w-full p-5 max-w-lg shrink-0 shadow-2xl">
            <h1 className='text-4xl text-green-500 font-bold text-center'>Register</h1>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)} >
                  {/* name */}
                <div>
                <label className="label">name*</label>
                <input type="name" {...register("name", { required: true })} className="input w-full" placeholder="enter name" />
                </div>
                    {/* image */}
                <div>
                <label className="label">photo</label>
                <input type="url" {...register("photo", { required: true })} className="input w-full" placeholder="enter name" />
                </div>
                {/* email */}
                <div>
                <label className="label">Email</label>
                <input type="email" {...register("email", { required: true })} className="input w-full" placeholder="Email" />
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
                <button className="btn btn-neutral mt-4 w-full">Register</button>
              </form>
                <h1>Do you have an account then go <span className='text-red-500 font-bold'><Link to={'/Login'}>Login</Link></span></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;