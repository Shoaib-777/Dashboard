
import { DeleteProduct, FetchProduct } from "@/app/lib/actionp"
import Image from "next/image";
import Link from "next/link"

const Products = async({searchParams}) => {
  const q = searchParams?.q || '';
  const fpdata = await FetchProduct(q)
  const Map = fpdata.map((v,i)=>{
    return(
      <tr key={i} className="border-b border-black hover:bg-[#161b2b]">
              <td className="py-3 px-6 text-left flex items-center">
                <Image width={40} height={40} className="w-10 h-10 rounded-full mr-3" src="/no_image.png" alt="Product" />
                <span>{v.title}</span>
              </td>
              <td className="py-3 px-6 text-left">{v.description}</td>
              <td className="py-3 px-6 text-center">${v.price}</td>
              <td className="py-3 px-6 text-center">{v.createdAt?.toString().slice(4,16)}</td>
              <td className={`py-3 px-6 text-center ${v.stock > 20 ? " text-white" : " text-red-500"} `}>{v.stock} Left</td>
              <td className="py-3 px-6 text-center flex">
                <Link href={`/dashboard/products/updateproduct/${v._id}`}><button className="bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded-lg mr-2">
                  Update
                </button></Link>
                <form action={DeleteProduct}>
                  <input type="hidden" id="id" name="id" value={v.id} />
                <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-lg">
                  Delete
                </button></form>
              </td>
            </tr>
    )
  })
  return (
  <div className="mx-4 mt-[30px] rounded-lg ">  
    <div className="w-full bg-[#1f273d] rounded-xl   ">
      <div className="mb-4 ml-4 pt-3">
        <Link href={'/dashboard/products/addproduct'}><button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow">
          Add Product
        </button></Link>
      </div>

      <div className="overflow-x-auto shadow-md">
        <table className="min-w-full bg-[#1f273d]">
          <thead classNameName="bg-[#161b2b]">
            <tr className=" text-white border-y border-white text-sm leading-normal">
              <th className="py-3 px-6 text-left">Title</th>
              <th className="py-3 px-6 text-left">Description</th>
              <th className="py-3 px-6 text-center">Price</th>
              <th className="py-3 px-6 text-center">Created At</th>
              <th className="py-3 px-6 text-center">Stock</th>
              <th className="py-3 px-6 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-white text-sm font-light">
            {Map}
          </tbody>
        </table>
      </div>
    </div>
  </div>

  )
}

export default Products