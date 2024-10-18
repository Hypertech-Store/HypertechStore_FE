import { Outlet } from "react-router-dom"
import FooterClient from "../footer-client"
import HeaderClient from "../header-client"

const LayoutClient = () => {
  return (
    <>
        <HeaderClient/>
        <div><Outlet/></div>
        <FooterClient/>
    </>
  )
}

export default LayoutClient