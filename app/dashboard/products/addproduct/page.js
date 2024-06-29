
import { AddProductf } from "@/app/lib/actionp"

const Addproduct = () => {
    return (
        <div className="py-4 px-4 mt-6 mx-5 bg-[#1f273d] text-white">
            <div><h2 className="text-center text-2xl font-bold  py-4">Add Product</h2></div>
            <form action={AddProductf}>
                <div className="flex justify-center items-center mb-6">
                    <label  className="font-bold w-[92px] mr-5">Title</label>
                    <input type="text" id="title" name="title" required placeholder="Enter Title Of Product" className="w-full px-4 py-2 bg-[#111523]" />
                </div>
                <div className="flex justify-center items-center mb-6">
                    <label  className="font-bold w-[92px] mr-3">Description</label>
                    <textarea required id="description" name="description" placeholder="Enter The Description Of The Product" className="w-full h-[64px] px-4 py-2 bg-[#111523]"></textarea>
                </div>
                <div className="flex justify-center items-center mb-6">
                    <label  required className="  font-bold  w-[92px] mr-5">Price</label><input id="price" name="price" type="number" placeholder="$ 15" className=" w-full px-4 py-2 bg-[#111523]" />
                </div>
                <div className="flex justify-center items-center mb-6">
                    <div className="w-full flex justify-center items-center">
                        <label  required className=" font-bold w-[92px] mr-5" >Stock</label>
                        <input id="stock" name="stock" type="number" placeholder="Ex:- 28" className="w-full px-4 py-2 bg-[#111523]" />
                    </div>
                </div>
                <div className="w-full px-8">
                    <button className="px-4 py-2 w-full font-semibold  bg-green-500 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300">Add Product</button>
                </div>
            </form>
        </div>
    )
}

export default Addproduct