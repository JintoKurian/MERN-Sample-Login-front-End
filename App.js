import { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { Route, Routes } from 'react-router-dom';
// import FacebookSignIn from './Components/FacebookSignIn';


function App() {
  const [isAuthorized, setIsAuthorized] =useState(false)
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setIsAuthorized(true)
    }
    
  },[isAuthorized])
  
  return (
    <div className="App">
      <header className="App-header">

        <Routes>
        <Route path='/' element={isAuthorized? <Home/> : <Login/>}/>
          <Route path='/login' element={isAuthorized? <Home/> : <Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/home' element={isAuthorized? <Home/> : <Login/> } />
          {/* <Route path='/face' element={<FacebookSignIn/>} /> */}
          {/* <Route path='/home' element={<Home/>} /> */}
        </Routes>
      </header>
    </div>
  );
}

export default App;
