

import Navbar from "../components/navbar"
import Sidebar from "../components/sidebar"

const Layout = ({ children }) => {
    return (
        <div className="bg-[#111523] w-full min-h-[100vh] flex">
            <div className="w-[24%] bg-[#1f273d] ">
                <Sidebar />
            </div>
            <div>
                <div className="">
                    <Navbar />
                </div>
                <div className="">
                    {children}
                </div>
            </div>
        </div>
    )
}
export default Layout
