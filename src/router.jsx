import { Route, Routes } from "react-router-dom"
import LayoutClient from "./components/layout/client/layout-client"
import Home from "./pages/home"
import Shop from "./pages/shop"
import ShopDetails from "./pages/product"
import Blog from "./pages/blog"
import About from "./pages/about"
import Contact from "./pages/contact"


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutClient />}>
        <Route path="/" element={<Home />} />
        <Route path="/cua-hang" element={<Shop />} />
        <Route path="/chi-tiet-san-pham" element={<ShopDetails />} />
        <Route path="/bai-viet" element={<Blog />} />
        <Route path="/ve-chung-toi" element={<About />} />
        <Route path="/lien-he" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default Router