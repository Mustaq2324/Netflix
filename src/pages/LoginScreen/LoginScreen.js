import React, { useState } from 'react'
import logo from "../../Images/netflixlogo.png"
import Sign from '../Sign/Sign'

function LoginScreen() {
    const [sign,setSign]=useState(false)
  return (
<div className='relative h-[100vh] login' >
<div>
        <img className='fixed left-0 top-2 w-[150px] object-contain pl-[20px]' src={logo}/>
        <button className='fixed right-[20px] top-2 rounded py-[7px] px-[20px] text-lg text-white bg-[#e50914] cursor-pointer font-semibold border-none' onClick={()=>setSign(true)}>Sign In</button>
    
    </div>
    <div className='w-full h-full z-10 bg-gradient-to-t from-black to-transparent '></div> 
    {sign?(<Sign/>):
    
    <div className='z-10  left-0 right-0 text-white p-[20px] absolute top-[30%] ml-auto mr-auto text-center'>
      
    <h1 className='text-[2rem] md:text-[3rem] lg:text-[3.125rem] mb-[10px]'>Unlimited films, TV programmes and more.</h1>
            <h2 className='text-[1rem] md:text-[2.5rem] font-semibold mb-[20px]'>Watch anywhere. Cancel at any time.</h2>
            <h3 className='text-[0.675rem] md:text-[1.5rem] font-semibold'>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className='mt-[20px]'>
                <form>
                    <input className='py-[11px] px-[10px] outline-none  h-[40px] w-[50%] md:w-[40%] lg:w-[30%] border-none max-w-[600px]' type='email' placeholder='Email Address'></input>
                    <button className='py-[8.4px]  px-[15px] text-[1rem] text-white bg-[#e50914] border-none font-semibold cursor-pointer' onClick={()=>setSign(true)}>GET STARTED</button>
                </form>
            </div>
           
    </div>}
</div>

  )
}

export default LoginScreen