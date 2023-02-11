import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/Login";

function RouterController() {

  const user = "gustavo";

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home user={user}/>}></Route>
      </Routes>
    </Router>
  );
}

export default RouterController;
