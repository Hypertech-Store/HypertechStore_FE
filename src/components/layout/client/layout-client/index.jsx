import { Outlet } from "react-router-dom"
import HeaderClient from "../header-client"

import FooterClient from "../footer-client"


const LayoutClient = () => {
  return (
    <>
      <HeaderClient />
      <div><Outlet /></div>
      <FooterClient />
    </>
  )
}

export default LayoutClient