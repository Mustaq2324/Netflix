import React, { useEffect, useState } from 'react'
import logo from "../../Images/netflixlogo.png"
import { Link } from 'react-router-dom'
function Navbar() {
  const [show,setShow]=useState(false)
  const tarns = ()=>{
    if(window.scrollY > 100){
      setShow(true)
    }
    else{
      setShow(false)
    }
  }
  useEffect(()=>{
    window.addEventListener("scroll",tarns)
    return ()=>window.removeEventListener("scroll",tarns)
  },[])
  return (
    <div>
      <div className={show?'flex justify-between items-center bg-black p-8 z-[99] fixed top-0 w-[100%] ':'flex transition-all duration-1000 justify-between items-center  p-8 z-[99] fixed top-0 w-[100%] '}>
     <Link to="/">
     <div>
        <img src={logo} className='h-[50px] object-contain fixed top-[9px] left-0 cursor-pointer'/>
      </div>
      </Link>
      <Link to="/profile">
      <div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' className='fixed top-[15px] right-[20px] cursor-pointer h-[40px] object-contain'/>
     </div>
      </Link>
    </div>
    </div>
  )
}

export default Navbar