import { Navigate, Route, Routes } from "react-router-dom";
import LayoutClient from "./components/layout/client/layout-client";
import LayoutAdmin from "./components/layout/admin/layout-admin";

// Client pages
import HomeClient from "./pages/client/home";
import Shop from "./pages/client/shop";
import ShopDetails from "./pages/client/product";
import Blog from "./pages/client/blog";
import BlogDetails from "./pages/client/blog-details";
import About from "./pages/client/about";
import Contact from "./pages/client/contact";
import Login from "./pages/client/login";
import Register from "./pages/client/register";
import ForPassword from "./pages/client/for-password";
import Account from "./pages/client/account";
import Wishlist from "./pages/client/wishlist";
import Cart from "./pages/client/cart";
import Checkout from "./pages/client/checkout";
// Admin pages
import Dashboard from "./pages/admin/dashboard";
import UserList from "./pages/admin/user/user-list";

const Router = () => {
  return (
    <Routes>
      {/* Client Routes */}
      <Route path="/" element={<LayoutClient />}>
        <Route index element={<HomeClient />} />
        <Route path="cua-hang" element={<Shop />} />
        <Route path="/chi-tiet-san-pham/:productId" element={<ShopDetails />} />
        <Route path="bai-viet" element={<Blog />} />
        <Route path="chi-tiet-bai-viet" element={<BlogDetails />} />
        <Route path="gioi-thieu" element={<About />} />
        <Route path="lien-he" element={<Contact />} />
        <Route path="dang-nhap" element={<Login />} />
        <Route path="dang-ky" element={<Register />} />
        <Route path="quen-mat-khau" element={<ForPassword />} />
        <Route path="tai-khoan" element={<Account />} />
        <Route path="san-pham-yeu-thich" element={<Wishlist />} />
        <Route path="gio-hang" element={<Cart />} />
        <Route path="thanh-toan" element={<Checkout />} />
      </Route>

      <Route path="/admin" element={<LayoutAdmin />}>
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="user-list" element={<UserList />} />
      </Route>
    </Routes>
  );
};

export default Router;
