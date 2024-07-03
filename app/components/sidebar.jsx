import { MdDashboard } from "react-icons/md";
import { FaUsers, FaSignOutAlt } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import Link from "next/link";
import { auth, signOut } from "../auth";
import Image from "next/image";

const Sidebar = async () => {
  const { user } = await auth();
  return (
    <div className=" xs:w-[50px] sm:p-3 md:p-5 xl:p-6" >
      {/* Mobile */}
      <div className="hidden xs:block mt-2 ml-1 ">
          <Image src="/no_image.png" alt="no image found" width={40} height={40} className="w-10 h-10 object-cover rounded-[55%] " />
      </div>
      <div className="hidden xs:block  w-full h-[22rem] mt-[6rem]">
        <ul className="px-1">
          <Link href={'/dashboard'}><li><MdDashboard className="w-10 h-10 text-white font-bold mb-[3rem] hover:bg-[#1E5162] px-1 cursor-pointer"/></li></Link>
          <Link href={'/dashboard/users'}><li><FaUsers className="w-10 h-10 text-white font-bold mb-[3rem] hover:bg-[#1E5162] px-1 cursor-pointer"/></li></Link>
          <Link href={'/dashboard/products'}><li><GiShoppingBag className="w-10 h-10 text-white font-bold mb-[3rem] hover:bg-[#1E5162] px-1 cursor-pointer"/></li></Link>
          <form action={async () => {
          "use server"
          await signOut()
        }}><li><FaSignOutAlt type="submit" className="w-10 h-10 pl-1 text-white font-bold mb-[3rem] cursor-pointer"/></li></form>
        </ul>
      </div>
      {/* Other Devices */}
      <div className="xs:hidden flex">
        <div className="">
          <Image src="/no_image.png" alt="no image found" width={40} height={40} className="w-10 h-10 object-cover rounded-[55%] " />
        </div>
        <div className="text-white sm:ml-2 md:ml-3 xl:ml-4 h-10">
          <h3 className="text-xs font-bold">Hello User !</h3>
          <h5 className="font-semibold">{user.username}</h5>
        </div>
      </div>
      <div className="xs:hidden text-white mt-[30%] sm:text-base md:text-lg xl:text-2xl font-semibold">
        <ul className="sm:ml-0 md:ml-2 xl:ml-10">
          <Link href={'/dashboard'}><li className="mt-6 flex items-center hover:bg-[#1E5162] py-1 px-2 rounded-lg"><MdDashboard className="text-white  inline w-[28px] h-[28px]  sm:mr-1 md:mr-1 xl:mr-2" />Dashboard</li></Link>
          <Link href={'/dashboard/users'}><li className="mt-6 flex items-center hover:bg-[#1E5162] py-1 px-2 rounded-lg"><FaUsers className="text-white  inline w-[28px] h-[28px] sm:mr-1 md:mr-1 xl:mr-2" />Users</li></Link>
          <Link href={'/dashboard/products'}><li className="mt-6 flex items-center hover:bg-[#1E5162] py-1 px-2 rounded-lg"><GiShoppingBag className="text-white  inline w-[26px] h-[26px] sm:mr-1 md:mr-1 xl:mr-2" />Products</li></Link>
        </ul>
      </div>
      <div className="xs:hidden text-white sm:text-base md:text-lg xl:text-2xl font-semibold flex items-center sm:py-0 md:py-0 xl:py-6 ">
        <form action={async () => {
          "use server"
          await signOut()
        }}>
          <button className="cursor-pointer flex items-center sm:mt-4 md:mt-6 xl:mt-0"><FaSignOutAlt className="sm:ml-3 md:ml-4 xl:ml-[50px] sm:w-5 sm:h-7 md:w-6 md:h-7 xl:w-6 xl:h-6" /><span className="sm:ml-1 md:ml-2 xl:ml-3">Sign Out</span></button>
        </form>
      </div>
    </div>
  )
}

export default Sidebar
