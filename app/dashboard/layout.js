

import Navbar from "../components/navbar"
import Sidebar from "../components/sidebar"

// const Layout = ({ children }) => {
//     return (
//         <div className="bg-[#111523] w-full min-h-[100vh] flex">
//             <div className="w-[24%] bg-[#1f273d] ">
//                 <Sidebar />
//             </div>
//             <div className="container">
//                 <div className="container">
//                     <Navbar />
//                 </div>
//                 <div className="container">
//                     {children}
//                 </div>
//             </div>
//         </div>
//     )
// }
const Layout = ({ children }) => {
    return (
        <div className="bg-[#111523] w-full min-h-screen flex overflow-hidden">
            <div className="w-1/4 bg-[#1f273d] xs:w-[50px]">
                <Sidebar />
            </div>
            <div className="w-3/4 flex flex-col xs:w-[calc(100%-60px)]">
                <Navbar />
                <div className="flex-1 overflow-auto xs:w-full">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout
