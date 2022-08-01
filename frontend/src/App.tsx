import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import { Home, Admin, Login, Register, Artikel } from "./Pages";
import { myContext } from "./Pages/Context/Context";

const App: React.FC = () => {
  const ctx = useContext(myContext);
  return (
    <Router>
      <NavBar />
        <Routes>
          {
            ctx ? (
              <>
              {<Route path="/admin" element={<Admin />}></Route>}
              <Route path="/artikel" element={< Artikel/>} />
              </>
            ) : (
                <>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                </>
            )
          }
        <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  );
};
export default App;