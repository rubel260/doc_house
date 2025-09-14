import axios from "axios";
import {  useNavigate } from 'react-router-dom';
import useAuth from "./useAuth";


const axiousSecure = axios.create({
    baseURL: 'https://doc-house-server-neon.vercel.app'
})
const useAxiousSecure = () => {
    const navigate = useNavigate();
    const {logoutUser} = useAuth();
    axiousSecure.interceptors.request.use(function(config){
        
        const token = localStorage.getItem('access-token');
         console.log('interceptor hit in ' , token);
         config.headers.authorization = `bearer ${token}`
        return config;
    }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  })

  // response
  axiousSecure.interceptors.response.use(function(response){

    return response;
  }, async function(error){


   console.log('intercenpor err' , error.response.status);
   const status = error.response.status;
   if(status === 401 || status === 403 ){
    navigate('/login')
    logoutUser()
   }

    return Promise.reject(error)
  })

    return axiousSecure;
};

export default useAxiousSecure;