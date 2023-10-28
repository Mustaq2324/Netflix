import {BrowserRouter,Routes,Route} from "react-router-dom"
import Homescreen from "./pages/homescreen/Homescreen";
import PorfileSreen from "./pages/homescreen/ProfileScreen/PorfileSreen";
import LoginScreen from "./pages/LoginScreen/LoginScreen";

function App() {
  const user=true
  return (
    <div className="bg-black">
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
