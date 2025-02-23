import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import PostItemForm from "./pages/products/Form";
import { OrdersPage } from "./pages/orders/Orders";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<PostItemForm />} />
        <Route path="/orders" element={<OrdersPage />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
