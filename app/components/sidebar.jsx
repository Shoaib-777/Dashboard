import { MdDashboard } from "react-icons/md";
import { FaUsers, FaSignOutAlt } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import Link from "next/link";
import { auth, signOut } from "../auth";
import Image from "next/image";

const Sidebar = async () => {
  const { user } = await auth();
  return (
    <div className="p-6" >
      <div className="flex">
        <div className="">
          <Image src="/no_image.png" alt="no image found" width={40} height={40} className="w-10 h-10 object-cover rounded-[55%] " />
        </div>
        <div className="text-white ml-4 h-10">
          <h3 className="text-xs font-semibold">Hello User !</h3>
          <h5 className="font-bold">{user.username}</h5>
        </div>
      </div>
      <div className="text-white mt-[30%] text-2xl font-semibold">
        <ul className="ml-10">
          <Link href={'/dashboard'}><li className="mt-6 flex items-center hover:bg-[#1E5162] py-1 px-2 rounded-lg"><MdDashboard className="text-white  inline w-[28px] h-[28px] mr-2" />Dashboard</li></Link>
          <Link href={'/dashboard/users'}><li className="mt-6 flex items-center hover:bg-[#1E5162] py-1 px-2 rounded-lg"><FaUsers className="text-white  inline w-[28px] h-[28px] mr-2" />Users</li></Link>
          <Link href={'/dashboard/products'}><li className="mt-6 flex items-center hover:bg-[#1E5162] py-1 px-2 rounded-lg"><GiShoppingBag className="text-white  inline w-[26px] h-[26px] mr-2" />Products</li></Link>
        </ul>
      </div>
      <div className="text-white text-2xl font-semibold flex items-center py-6 ">
        <form action={async () => {
          "use server"
          await signOut()
        }}>
          <button className="cursor-pointer flex items-center"><FaSignOutAlt className="ml-12" /><span className="ml-3">Sign Out</span></button>
        </form>
      </div>
    </div>
  )
}

export default Sidebar