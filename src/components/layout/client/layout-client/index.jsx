import { Outlet } from "react-router-dom"
import FooterClient from "../footer-client"
import HeaderClient from "../header-client"
import SliderClient from "../slider-client"

const LayoutClient = () => {
  return (
    <>
      <HeaderClient />
      <SliderClient />
      <div><Outlet /></div>
      <FooterClient />
    </>
  )
}

export default LayoutClient