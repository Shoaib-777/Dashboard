
import { FetchProductId, UpdateProductf } from "@/app/lib/actionp"

const Updateproduct = async({params}) => {
    const {id} = params;
    const Spro = await FetchProductId(id)
  return (
    <div className="py-4 px-4 mt-6 mx-5 bg-[#1f273d] text-white">
            <div><h2 className="text-center text-2xl font-bold  py-4">Update Product</h2></div>
            <form action={UpdateProductf}>
                <input type="hidden" name="id" id="id" value={Spro.id} />
                <div className="flex justify-center items-center mb-6">
                    <label  className="font-bold w-[92px] mr-5">Title</label>
                    <input type="text" name="title" id="title" placeholder={Spro.title} className="w-full px-4 py-2 bg-[#111523]" />
                </div>
                <div className="flex justify-center items-center mb-6">
                    <label  className="font-bold w-[92px] mr-3">Description</label>
                    <textarea name="description" id="description" placeholder={Spro.description} className="w-full h-[64px] px-4 py-2 bg-[#111523]"></textarea>
                </div>
                <div className="flex justify-center items-center mb-6">
                    <label   className="  font-bold  w-[92px] mr-5">Price</label><input name="price" id="price" type="number" placeholder={Spro.price} className=" w-full px-4 py-2 bg-[#111523]" />
                </div>
                <div className="flex justify-center items-center mb-6">
                    <div className="w-full flex justify-center items-center">
                        <label  className=" font-bold w-[92px] mr-5" >Stock</label>
                        <input min={1} type="number" name="stock" id="stock" placeholder={Spro.stock} className="w-full px-4 py-2 bg-[#111523]" />
                    </div>
                </div>
                <div className="w-full px-8">
                    <button className="px-4 py-2 w-full font-semibold  bg-green-500 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300">Update Product</button>
                </div>
            </form>
        </div>
  )
}

export default Updateproduct