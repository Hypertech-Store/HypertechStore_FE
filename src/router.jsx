import { Route, Routes } from "react-router-dom";
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
import ResetPassword from "./pages/client/resetPassword";
import Account from "./pages/client/account";
import Wishlist from "./pages/client/wishlist";
import Cart from "./pages/client/cart";
import Checkout from "./pages/client/checkout";

// Admin pages
import AdminLogin from "./pages/admin/login";
import Dashboard from "./pages/admin/dashboard";
import StaffList from "./pages/admin/staff/staff-list";
import StaffAdd from "./pages/admin/staff/staff-add";
import StaffEdit from "./pages/admin/staff/staff-edit";
// import ListProduct from "./pages/admin/product/listProduct";

// PrivateRoute Component
// import PrivateRoute from "../src/components/layout/PrivateRoute.jsx"; // Import the PrivateRoute component

const Router = () => {
  return (
    <Routes>

      {/* Admin Routes */}
      <Route path="/login" element={<AdminLogin />} />
      {/* Wrap /admin routes with PrivateRoute */}
      {/* <Route element={<PrivateRoute />}> */}
      <Route path="/admin" element={<LayoutAdmin />}>
        <Route index element={<Dashboard />} />
        <Route path="danh-sach-nhan-vien" element={<StaffList />} />
        <Route path="them-nhan-vien" element={<StaffAdd />} />
        <Route path="sua-nhan-vien/:id" element={<StaffEdit />} />
        {/* Add more protected routes under /admin as needed */}
      </Route>
      {/* </Route> */}

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
        <Route path="cap-nhat-mat-khau" element={<ResetPassword />} />
        <Route path="tai-khoan" element={<Account />} />
        <Route path="san-pham-yeu-thich" element={<Wishlist />} />
        <Route path="gio-hang" element={<Cart />} />
        <Route path="thanh-toan" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default Router;
