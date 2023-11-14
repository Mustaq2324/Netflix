import {BrowserRouter,Routes,Route} from "react-router-dom"
import Homescreen from "./pages/homescreen/Homescreen";
import PorfileSreen from "./pages/homescreen/ProfileScreen/PorfileSreen";
import LoginScreen from "./pages/LoginScreen/LoginScreen";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";

function App() {
  const user=useSelector(selectUser)
  const dispatch=useDispatch()
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(userAuth)=>{
      if(userAuth){
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email
        }))
      }
      else{
        dispatch(logout())
      }
    })
    return unsubscribe
  },[])
  return (
    <div className="bg-black ">
    <BrowserRouter>
    {
      !user ? <LoginScreen/>:
      <Routes>
        <Route path="/profile" element={<PorfileSreen/>}/>
        <Route path="/" element={<Homescreen/>}/>
      </Routes>
    }
    </BrowserRouter>
    </div>
  );
}

export default App;
