import React, { useState } from 'react'
import logo from "../../Images/netflixlogo.png"
import Sign from '../Sign/Sign'

function LoginScreen() {
    const [sign,setSign]=useState(false)
  return (
<div>
<div>
        <img src={logo}/>
        <button onClick={()=>setSign(true)}>Sign In</button>
    
    </div>
    <div></div>
    {sign?(<Sign></Sign>):<>
    <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div>
                <form>
                    <input type='email' placeholder='Email Address'></input>
                    <button onClick={()=>setSign(true)}>GET STARTED</button>
                </form>
            </div>
    </>}
</div>

  )
}

export default LoginScreen