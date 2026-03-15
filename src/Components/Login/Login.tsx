/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthContext';


interface LoginFormInputs{
  username:string;
  password:string;
}

interface  AuthContextType{
  saveUserData: ()=> void;
}

export default function Login() {

  const {saveUserData} = useContext(AuthContext) as AuthContextType
  //1-
  const {register , handleSubmit , formState: {errors}} = useForm<LoginFormInputs>();
  const navigate = useNavigate();

  //2-
  const onSubmit = async (data:LoginFormInputs)=>{
    //api call
    try {
      const response = await axios.post('https://dummyjson.com/auth/login',data)
      localStorage.setItem('userToken',response?.data?.accessToken)
      saveUserData()
      toast.success("Logged In!!");
      navigate('/dashboard')

    } catch (error) {
      toast.error("Wrong Credentilas!!")
    }
  }
  return (
    <div className='login-container'>
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-11 col-sm-8 col-md-4 bg-white p-5 rounded-3">
            <div className="title text-center">
              <h3>User Management System</h3>
              <h4>SIGN IN</h4>
              <small className='text-muted'>Enter your Credentials</small>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className='mt-3'>Username</label>
              <input className="form-control"  type="text" placeholder='enter username'
                {...register('username',{required:'username is required!!!'})}
              />

              {errors.username && <span className='text-danger d-block'>{errors.username.message}</span>}

              <label className='mt-3'>Password</label>
              <input className="form-control"  type="password" placeholder='enter password' 
                {...register('password',{required:'password is required!!!'})}
              />

              {errors.password && <span className='text-danger d-block'>{errors.password.message}</span>}

              <button className='btn btn-warning w-100 text-white my-3'>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
