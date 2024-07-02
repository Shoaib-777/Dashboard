"use client"
import { FaSearch, FaGlobeAmericas } from 'react-icons/fa';
import { MdOutlineMessage } from 'react-icons/md';
import { IoIosNotifications } from 'react-icons/io';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

const capitalizeFirstLetter = (string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const Navbar = () => {
    const pathname = usePathname();
    const formattedPathname = capitalizeFirstLetter(pathname.split('/').pop());
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname2 = usePathname();

    const handleSearch = (e) => {
        const params = new URLSearchParams(searchParams);
        if (e.target.value) {
            params.set('q', e.target.value);
        } else {
            params.delete('q');
        }
        replace(`${pathname2}?${params}`);
    }

    return (
        <nav className="xs:mx-4  sm:min-w-[380px] sm:max-w-full h-[65px] mt-6  sm:mx-3 md:mx-3 xl:mx-5 bg-[#1f273d] flex flex-row xs:flex-col xs:justify-normal justify-between items-center sm:px-2 md:px-3 xl:px-5 rounded-xl">
            <div>
                <h4 className="text-white font-semibold">{formattedPathname}</h4>
            </div>
            <div className="flex  sm:mr-4 md:mr-6 xl:mr-10 xs:px-1">
                <div className="flex bg-gray-500 justify-center items-center rounded-lg">
                    <div className="xs:pl-1 sm:p-1 md:p-1 xl:p-2">
                        <FaSearch className="text-white" />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Search..."
                            aria-label="Search"
                            onChange={handleSearch}
                            className="xs:w-[140px] sm:w-[150px] md:w-[200px] xl:w-[300px] text-black sm:font-light md:font-medium xl:font-semibold px-1 py-[2px] rounded-r-lg"
                        />
                    </div>
                </div>
                <div className="ml-3 pt-1 xs:ml-2">
                    <ul className="flex justify-center items-center pt-1 gap-2 xs:gap-1">
                        <li><MdOutlineMessage aria-label="Messages" className="text-white w-6 h-5" /></li>
                        <li><IoIosNotifications aria-label="Notifications" className="text-white w-6 h-5" /></li>
                        <li><FaGlobeAmericas aria-label="Global" className="text-white w-6 h-5" /></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;