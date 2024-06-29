import { FetchUserId, Updateuserf } from "@/app/lib/actionu";

const Updateuser = async({params}) => {
    const {id} = params;
    const Suser = await FetchUserId(id)
  return (
    <div className="mt-10 mx-5 px-4 pb-6 pt-8 bg-[#1f273d] text-white">
    {/* <h2 className="font-semibold text text-white text-center mb-2">Update User</h2> */}
    <form action={Updateuserf}>
        <input type="hidden" name="id" value={Suser.id} />
        <div className="flex justify-center items-center mb-6">
            <label htmlFor="" className="w-[117px] mr-5  font-bold">Name</label><input type="text" placeholder={Suser.username} name="username" id="username" className=" w-full px-4 py-2 bg-[#111523]" />
        </div>
        <div className="flex justify-center items-center mb-6">
            <label htmlFor="" className="w-[117px] mr-2  font-bold text-nowrap ">Phone Number</label><input type="tel" name="phone" id="phone" placeholder={Suser.phone} className=" w-full px-4 py-2 bg-[#111523]" />
        </div>
        <div className="flex justify-center items-center mb-6">
            <label htmlFor="" className="w-[117px] mr-5  font-bold text-nowrap ">Email id</label><input type="email" name="email" id="email" placeholder={Suser.email} className=" w-full px-4 py-2 bg-[#111523]" />
        </div>
        <div className="flex justify-center items-center mb-6">
            <label htmlFor="" className="w-[117px] mr-5  font-bold text-nowrap ">Password</label><input name="password" id="password" type="passowrd" placeholder="" className=" w-full px-4 py-2 bg-[#111523]" />
        </div>
        <div className="flex justify-center items-center mb-6">
            <div className="w-full flex justify-center items-center">
                <label htmlFor="" className="w-[117px] mr-5 font-bold" >Role</label>
                <select name="role" id="role" className="bg-[#111523] px-4 py-2 w-full">
                    <option value="client" selected >Client</option>
                    <option value="admin">Admin</option>
                </select>
            </div>
        </div>
        <div className="w-full flex items-center mb-4">
            <div className="flex justify-center items-center">
                <label htmlFor="" className="w-[117px] mr-1 font-bold">Status</label>
                <select name="status" id="status" className="bg-[#111523] px-4 py-2 w-[355px] text-center">
                    <option value="Active" selected >Active</option>
                    <option value="Not Active">Not Active</option>
                </select>
            </div>
        </div>
        <div className="w-full px-8">
            <button className="px-4 py-2 w-full font-semibold  bg-green-500 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300">Update User</button>
        </div>
    </form>
</div>
  )
}

export default Updateuser