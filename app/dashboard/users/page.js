import { DeleteUser, FetchUser } from "@/app/lib/actionu"
import Image from "next/image";
import Link from "next/link"

const Users = async ({searchParams}) => {
    const q = searchParams?.q || '';
    const fudata = await FetchUser(q)
    const Map = fudata.map((v, i) => {
        return (
            <tr key={i}>
                <td className="px-6 py-4 border-b border-black text-sm">
                    <div className="flex items-center">
                        <Image src="/no_image.png" width={40} height={40} alt="Profile" className="w-10 h-10 rounded-full mr-4" />
                        <span className='text-white'>{v.username}</span>
                    </div>
                </td>
                <td className="px-6 py-4 border-b border-black text-sm text-white">{v.email}</td>
                <td className="px-6 py-4 border-b border-black text-sm text-white">{v.createdAt?.toString().slice(4,16)}</td>
                <td className="px-6 py-4 border-b border-black text-sm text-white">{v.role}</td>
                <td className="px-6 py-4 border-b border-black text-sm">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${ v.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"  }`}>{v.status}</span>
                </td>
                <td className="px-6 py-4 mt-2 text-sm flex">
                    <Link href={`/dashboard/users/updateuser/${v.id}`}><button className="px-3 py-1 text-white bg-green-500 hover:bg-green-700 rounded mr-2">Update</button></Link>
                    <form action={DeleteUser}>
                    <input type="hidden" id="id" name="id" value={v._id} />
                    <button className="px-3 py-1 text-white bg-red-500 hover:bg-red-700 rounded">Delete</button></form>
                </td>
            </tr>
        )
    })
    return (
        <div className="mx-5 mt-[30px] bg-[#1f273d] rounded-lg">
            <div className="flex justify-between items-center mb-4 pl-3 pt-4">
                <Link href={'/dashboard/users/adduser'}><button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">Add User</button></Link>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full rounded-lg shadow-lg">
                    <thead classNameName='bg-[#161b2b]'>
                        <tr>
                            <th className="px-6 py-4 border-y border-gray-200  text-left text-sm leading-4 text-white">Name</th>
                            <th className="px-6 py-4 border-y border-gray-200  text-left text-sm leading-4 text-white">Email</th>
                            <th className="px-6 py-4 border-y border-gray-200  text-left text-sm leading-4 text-white">Created At</th>
                            <th className="px-6 py-4 border-y border-gray-200  text-left text-sm leading-4 text-white">Role</th>
                            <th className="px-6 py-4 border-y border-gray-200  text-left text-sm leading-4 text-white">Status</th>
                            <th className="px-6 py-4 border-y border-gray-200  text-left text-sm leading-4 text-white">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-[#1f273d]">
                        {Map}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users
