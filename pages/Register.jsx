import React, { useEffect, useState } from 'react'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerAPI } from '../services/allAPI';
import Header from '../Components/Header';


function Register() {

    const [userData, setUserData] = useState({
        email: "", username: "", password: "", confirmPassword: ""
    })

    const navigate = useNavigate();

    useEffect(() => {
        console.log(userData);

    })

    //register
    const handleRegister = async (e) => {
        e.preventDefault()

        const { email, username, password, confirmPassword } = userData

        if (!email || !username || !password || !confirmPassword) {
            toast.warning("Please fill the missing fileds");

        } else if (password !== confirmPassword) {
            toast.warning("Password doesn't match")
        } else {
            const result = await registerAPI(userData);
            console.log(result)
            if(result.status===200){
                toast.success("User Registered Successfully");
                navigate('/login')
            }else{
                toast.warning(result.response.data)
            }
        }
    }

    return (
        <>
            <Header />
            <div className='Login w-100'>
                <div className="row">
                    <div className="col-lg-7 ml-2 d-flex justify-content-center">
                        <form action="">
                            <h2>Signup</h2>
                            <input className='pl-3 register-input' type="text" placeholder='Enter Email' value={userData.email} onChange={e => setUserData({ ...userData, email: e.target.value })} />
                            <input className='pl-3 register-input' type="text" placeholder='Create User name' value={userData.username} onChange={e => setUserData({ ...userData, username: e.target.value })} />
                            <input className='pl-3 register-input' type="password" placeholder='Password' value={userData.password} onChange={e => setUserData({ ...userData, password: e.target.value })} />
                            <input className='pl-3 register-input' type="password" placeholder='Confirm Password' value={userData.confirmPassword} onChange={e => setUserData({ ...userData, confirmPassword: e.target.value })} />
                            <button type='submit' onClick={handleRegister}>Register</button>
                            <p className='pcontinuewith'>or continue with</p>

                            <div className='d-flex justify-content-center'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShE432V2K8x-pkqSVX_dWQQ0rMTEYlYVYjYg&s" style={{ width: '30px' }} alt="" />
                                <img className='ml-3' src="https://i.pinimg.com/736x/1e/c1/1a/1ec11a869384bc5e59625bac39b6a099.jpg" style={{ width: '30px' }} alt="" />
                                <img className='ml-3' src="https://w7.pngwing.com/pngs/543/934/png-transparent-google-app-logo-google-logo-g-suite-google-text-logo-circle.png" style={{ width: '30px' }} alt="" />
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4">
                        <h1 className='text'>Sign UP to</h1>
                        <h3>Lorem Ipsum is Simply</h3>
                        <div className="d-flex">
                            <p>If you already have an account <br /> You can <span> <Link to={'/login'} style={{ color: '#4d47c3' }}>Login here !</Link></span></p>

                            <img src="https://raw.githubusercontent.com/jaslam94/figma-exercises/main/login-1/assets/images/saly-14.png" alt="" style={{ width: '240px', marginTop: '-30px' }} />
                        </div>
                    </div>
                </div>

            </div>
            <ToastContainer
                position='top-center'
                theme='colored'
                autoClose={2000} />
        </>
    )
}

export default Register