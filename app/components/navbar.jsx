"use client"
import { MdOutlineMessage } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { FaGlobeAmericas, FaSearch } from "react-icons/fa";
import { usePathname,useSearchParams,useRouter } from "next/navigation";



const capitalizeFirstLetter = (string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const Navbar = () => {
    const pathname = usePathname();
    const formattedPathname = capitalizeFirstLetter(pathname.split('/').pop());
    const searchParams = useSearchParams();
    const {replace} = useRouter();
    const pathname2 = usePathname();
   
    const handleSerach = (e) =>{
      const Params = new URLSearchParams(searchParams)
      if(e.target.value){
        Params.set('q',e.target.value)
      } else{
        Params.delete('q')
      }
      replace(`${pathname2}?${Params}`)
    }

    return (
        <div className="w-[1000px] h-[65px] mt-6 mx-5 bg-[#1f273d] flex justify-between items-center px-5 rounded-xl ">
            <div>
                <h4 className="text-white font-semibold">{formattedPathname}</h4>
            </div>
            <div className="flex mr-10">
                <div className="flex bg-[gray] justify-center items-center rounded-lg ">
                    <div className="p-2">
                        <FaSearch className="text-white" />
                    </div>
                    <div>
                        <input type="text" placeholder="Search..." onChange={handleSerach} className=" w-[300px] text-black font-semibold  px-1 py-[2px] rounded-r-lg" />
                    </div>
                </div>
                <div className="ml-3 pt-1">
                    <ul className="flex justify-center items-center pt-1 gap-2">
                        <li><MdOutlineMessage className="text-white w-6 h-5 " /></li>
                        <li><IoIosNotifications className="text-white w-6 h-5 " /></li>
                        <li><FaGlobeAmericas className="text-white w-6 h-5 " /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar