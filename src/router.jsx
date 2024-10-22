import { Route, Routes } from "react-router-dom"
import LayoutClient from "./components/layout/client/layout-client"
// import Home from "./pages/home"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutClient />}>
        {/* <Route index element={<Home />} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="contact" element={<h1>Contact</h1>} /> */}
      </Route>
    </Routes>
  )
}

export default Router