import { Route, Routes } from "react-router-dom"
import LayoutClient from "./components/layout/client/layout-client"
import Home from "./pages/home"
import Shop from "./pages/shop"
import ShopDetails from "./pages/product"
import Blog from "./pages/blog"
import BlogDetails from "./pages/blog-details"
import About from "./pages/about"
import Contact from "./pages/contact"
import Login from "./pages/login"
import Register from "./pages/register"
import ForPassword from "./pages/for-password"
import Account from "./pages/account"
import Wishlist from "./pages/wishlist"
import Cart from "./pages/cart"
import Checkout from "./pages/checkout"


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutClient />}>
        <Route path="/" element={<Home />} />
        <Route path="/cua-hang" element={<Shop />} />
        <Route path="/chi-tiet-san-pham" element={<ShopDetails />} />
        <Route path="/bai-viet" element={<Blog />} />
        <Route path="/chi-tiet-bai-viet" element={<BlogDetails />} />
        <Route path="/ve-chung-toi" element={<About />} />
        <Route path="/lien-he" element={<Contact />} />
        <Route path="/dang-nhap" element={<Login />} />
        <Route path="/dang-ky" element={<Register />} />
        <Route path="/quen-mat-khau" element={<ForPassword />} />
        <Route path="/tai-khoan" element={<Account />} />
        <Route path="/san-pham-yeu-thich" element={<Wishlist />} />
        <Route path="/gio-hang" element={<Cart />} />
        <Route path="/thanh-toan" element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default Router