import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
function Layout({cartCount}){
    return(
        <>
     
      <Header cartCount={cartCount} />
        <Outlet/>
        <Footer/>
        </>
    )
}
export default Layout;