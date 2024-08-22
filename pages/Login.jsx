import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { loginAPI } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Components/Header';

function Login() {

    const [userData, setUserData] = useState({
        email:"",password:""
    })

    const navigate = useNavigate();


    const handleLogin = async (e)=>{
        e.preventDefault()

        const { email, password } = userData

        if(!email || !password){
            toast.warning('Please fill the missing fileds');
        }else{
            const result = await loginAPI(userData)
            // console.log(result);
            
            if(result.status===200){
              sessionStorage.setItem("existingUser", JSON.stringify(result.data.others));

               sessionStorage.setItem("token", result.data.token);
               setUserData({
                email:"",password:""
              })
              if(sessionStorage.getItem("token")){
                navigate('/home')
              }
   
               

            }else{
                toast.error('Wrong Password')
                console.log(result);

                
            }
            
        }
    }

  return (
    <>
        <Header/>
    <div className='Login w-100'>
        <div className="row">
           <div className="col-lg-2"></div>
            <div className="col-lg-5 mt-5" style={{marginTop:'30px'}}>
                <h1 className='text'>Sign in to</h1>
                <h3>Lorem Ipsum is Simply</h3>
                 <div className="d-flex">
                 <p>If you don't have an account <br /> You can <span style={{color:'#4d47c3'}}>  <Link to={'/register'} style={{color:'#4d47c3'}}>Register here !</Link> </span></p>
                
                <img src="https://raw.githubusercontent.com/jaslam94/figma-exercises/main/login-1/assets/images/saly-14.png" alt="" style={{width:'240px',marginTop:'-30px'}} />
                 </div>
            </div>

            <div className="col-lg-4 ml-2 d-flex">
                <form action="">
                    <h2>Sign in</h2>
                    <input className='pl-3' type="text" placeholder='Enter Email' style={{marginTop:'50px'}} value={userData.email} onChange={e=>setUserData({...userData,email:e.target.value})} /> 
                    <input className='pl-3' type="password" placeholder='Password' value={userData.password} onChange={e=>setUserData({...userData,password:e.target.value})} /> <label htmlFor=""><i className="fa-solid fa-eye" style={{color:'rgb(91, 91, 173)'}}></i></label>
                    <p className='forgotpass'>Forgot Password ?</p>

                    <button type='submit' onClick={handleLogin}>Login</button>

                    <p className='pcontinuewith'>or continue with</p>

                    <div className='d-flex justify-content-center'>
                    <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShE432V2K8x-pkqSVX_dWQQ0rMTEYlYVYjYg&s" style={{width:'30px'}} alt="" />
                    <img className='ml-3' src="https://i.pinimg.com/736x/1e/c1/1a/1ec11a869384bc5e59625bac39b6a099.jpg" style={{width:'30px'}} alt="" />
                    <img className='ml-3' src="https://w7.pngwing.com/pngs/543/934/png-transparent-google-app-logo-google-logo-g-suite-google-text-logo-circle.png" style={{width:'30px'}} alt="" />
                    </div>
                </form>
            </div>
        </div>
   
    </div>
    <ToastContainer
    position='top-center'
    theme='colored'
    autoClose={2000}/>
    </>
  )
}

export default Login