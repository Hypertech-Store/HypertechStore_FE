import { Route, Routes } from "react-router-dom"
import LayoutClient from "./components/layout/client/layout-client"
import Home from "./pages/home"
import Shop from "./pages/shop"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutClient />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="contact" element={<h1>Contact</h1>} />
      </Route>
    </Routes>
  )
}

export default Router