import { DeleteUser, FetchUser } from "@/app/lib/actionu";
import Image from "next/image";
import Link from "next/link";

const Users = async ({ searchParams }) => {
    const q = searchParams?.q || '';
    const fudata = await FetchUser(q);

    const Map = fudata.map((v, i) => {
        return (
            <tr key={i} className="hover:bg-[#161b2b]">
                <td className="px-4 py-2 border-b border-gray-700 text-sm">
                    <div className="flex items-center">
                        <Image src="/no_image.png" width={40} height={40} alt="Profile" className="w-10 h-10 rounded-full mr-2" />
                        <span className="text-white text-nowrap">{v.username}</span>
                    </div>
                </td>
                <td className="px-4 py-2 border-b border-gray-700 text-sm text-white">{v.email}</td>
                <td className="px-4 py-2 border-b border-gray-700 text-sm text-white">{new Date(v.createdAt).toDateString()}</td>
                <td className="px-4 py-2 border-b border-gray-700 text-sm text-white">{v.role}</td>
                <td className="px-4 py-2 border-b border-gray-700 text-sm">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${v.status === "Active" ? "bg-green-100 text-green-800 px-5" : "bg-red-100 text-red-800 text-nowrap"}`}>
                        {v.status}
                    </span>
                </td>
                <td className="px-4 py-2 text-sm flex space-x-2">
                    <Link href={`/dashboard/users/updateuser/${v.id}`}>
                        <button className="px-3 py-1 text-white bg-green-500 hover:bg-green-700 rounded">
                            Update
                        </button>
                    </Link>
                    <form action={DeleteUser}>
                        <input type="hidden" id="id" name="id" value={v._id} />
                        <button className="px-3 py-1 text-white bg-red-500 hover:bg-red-700 rounded">
                            Delete
                        </button>
                    </form>
                </td>
            </tr>
        );
    });
    return (
        <div className="w-full mx-auto xs:mx-1 px-4 sm:px-6 lg:px-8">
            <div className="bg-[#1f273d] rounded-lg shadow-md my-6 p-4">
                <div className="flex justify-between items-center mb-4">
                    <Link href={'/dashboard/users/adduser'}>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
                            Add User
                        </button>
                    </Link>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-[#1f273d] rounded-lg shadow-lg">
                        <thead className='bg-[#161b2b]'>
                            <tr>
                                <th className="px-4 py-2 border-y border-gray-700 text-left text-sm font-semibold text-white">Name</th>
                                <th className="px-4 py-2 border-y border-gray-700 text-left text-sm font-semibold text-white">Email</th>
                                <th className="px-4 py-2 border-y border-gray-700 text-left text-sm font-semibold text-white">Created At</th>
                                <th className="px-4 py-2 border-y border-gray-700 text-left text-sm font-semibold text-white">Role</th>
                                <th className="px-4 py-2 border-y border-gray-700 text-left text-sm font-semibold text-white">Status</th>
                                <th className="px-4 py-2 border-y border-gray-700 text-left text-sm font-semibold text-white">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Map}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;
