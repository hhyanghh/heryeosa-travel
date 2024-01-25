import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewTravel from "./pages/NewTravel";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import TravelDetail from "./pages/TravelDetail";
import TravelList from "./pages/TravelList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/travels" element={<TravelList />}>
          <Route path=":id" element={<TravelDetail />} />
        </Route>
        <Route path="/addTravel" element={<NewTravel />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
