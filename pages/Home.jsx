import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Home.css'
function Home() {

    useEffect(()=>{
        toast.success('Welcome User')
    },[])

    const handleLogout = ()=>{
        if(sessionStorage.getItem("existingUser")){
            sessionStorage.clear();
        }
    }

  return (
    <div className='main'>
       <div className="row" >
        <div className="col-lg-6 md-3 sm-2">
            <h1 style={{fontFamily:'serif'}}>D'Watch</h1>
        </div>
        <div className="col-lg-6 header-right md-4 sm-3">
            <h5>Products</h5>
            <h5>About</h5>
            <h5>Contact</h5>
            <h5 onClick={handleLogout}><i class="fa-solid fa-cart-shopping" style={{color:'#05f009'}}></i></h5>
        </div>
       </div>

       <div className="row">
        <div className="col-lg-7">
            <p className='secondHeading'>This is the time to <br /> turn yourslef into a <br /> real man</p>
        </div>
        <div className="col-lg-4">
            <div className="box">
                <div className="col">
                <h2>Bremont Star</h2>
                <p>$ 1.7</p>
                </div>
                <div class="vl"></div>
                <div className="col">
                 <button className='byenowbutton'>Bye Now</button>

                </div>
            </div>
        </div>
       </div>

       <div className="row">
        <div className="col-lg-7">
            <p className='thirdHeading'>Handpicked collection of <span style={{color:'#83fe00'}}>premium</span> time keepers <br /> for all purposes and ages.</p>
            <div className="col d-flex">
                <p className="forthHeading">Featured Collectibles</p>
                <div className="arrow">
                <i class="fa-solid fa-arrow-left fa-xl" style={{color:'white'}}></i>
                <i class="fa-solid fa-arrow-right fa-xl" style={{color:'white'}}></i>
                </div>
            </div>

            <div className="col d-flex">
                <div className="card">
                    <img src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw43e42f2b/images/Helios/Catalog/PLPEWJF2227001_1.jpg?sw=600&sh=600" style={{width:'170px',height:'150px'}} alt="watch1img" />
                    <h6>Zoro Mindsweep G</h6>
                    <p>$169</p>
                    <button className='byenowbuttonCard'>Bye Now</button>
                </div>

                <div className="card">
                    <img src="https://images-na.ssl-images-amazon.com/images/I/41YUmyh2dKL.jpg" style={{width:'170px',height:'150px'}} alt="watch2img" />
                    <h6>Romeleu Authentic</h6>
                    <p>$167</p>
                    <button className='byenowbuttonCard'>Bye Now</button>
                </div>

                <div className="card">
                    <img src="https://rukminim2.flixcart.com/image/832/832/krz97rk0/watch/p/g/o/ex297-casio-original-imag5n4ng3zz8cnk.jpeg?q=70&crop=false" style={{width:'110px',marginLeft:'30px',height:'150px'}} alt="watch3img" />
                    <h6>Sierra Large Dial</h6>
                    <p>$166</p>
                    <button className='byenowbuttonCard'>Bye Now</button>
                </div>

            </div>
        </div>

        <div className="col-4">
         <img className='greenWatchImage' src="https://www.bremont.com/cdn/shop/products/Bremont-EType-Jaguar-Green-Motorsport-Watch.png?v=1634516218" alt="greenwatchimg"  />

        </div>
       </div>

        <ToastContainer
    position='top-center'
    theme='colored'
    autoClose={2000}/>
    </div>
  )
}

export default Home