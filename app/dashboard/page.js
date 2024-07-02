import Image from 'next/image'; // Assuming you are using Next.js

const Dashboardpage = () => {
    return (
        <div className="p-4 overflow-auto">
            <div className="bg-[#1f273d] p-6 rounded-lg">
                <h2 className="text-white font-semibold mb-4">Latest Transactions</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-[#1f273d] shadow-md rounded-lg">
                        <thead>
                            <tr className="bg-[#161b2b] text-white border-y border-white">
                                <th className="py-3 px-6 text-left">Name</th>
                                <th className="py-3 px-6 text-left">Status</th>
                                <th className="py-3 px-6 text-left">Date</th>
                                <th className="py-3 px-6 text-left">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="text-white">
                            <tr className="border-b border-black hover:bg-[#1c2134]">
                                <td className="py-3 px-6 flex items-center">
                                    <Image
                                        width={40}
                                        height={40}
                                        className="w-10 h-10 rounded-full mr-3"
                                        src="/no_image.png"
                                        alt="Profile"
                                    />
                                    <span>John Doe</span>
                                </td>
                                <td className="py-3 px-6">Active</td>
                                <td className="py-3 px-6">2024-06-22</td>
                                <td className="py-3 px-6">$250.00</td>
                            </tr>
                            <tr className="border-b border-black hover:bg-[#161b2b]">
                                <td className="py-3 px-6 flex items-center">
                                    <Image
                                        width={40}
                                        height={40}
                                        className="w-10 h-10 rounded-full mr-3"
                                        src="/no_image.png"
                                        alt="Profile"
                                    />
                                    <span>Jane Smith</span>
                                </td>
                                <td className="py-3 px-6">Inactive</td>
                                <td className="py-3 px-6">2024-06-21</td>
                                <td className="py-3 px-6">$300.00</td>
                            </tr>
                            <tr className="border-b border-black hover:bg-[#161b2b]">
                                <td className="py-3 px-6 flex items-center">
                                    <Image
                                        width={40}
                                        height={40}
                                        className="w-10 h-10 rounded-full mr-3"
                                        src="/no_image.png"
                                        alt="Profile"
                                    />
                                    <span>Robert Johnson</span>
                                </td>
                                <td className="py-3 px-6">Pending</td>
                                <td className="py-3 px-6">2024-06-20</td>
                                <td className="py-3 px-6">$150.00</td>
                            </tr>
                            <tr className="hover:bg-[#161b2b]">
                                <td className="py-3 px-6 flex items-center">
                                    <Image
                                        width={40}
                                        height={40}
                                        className="w-10 h-10 rounded-full mr-3"
                                        src="/no_image.png"
                                        alt="Profile"
                                    />
                                    <span>Emily Davis</span>
                                </td>
                                <td className="py-3 px-6">Active</td>
                                <td className="py-3 px-6">2024-06-19</td>
                                <td className="py-3 px-6">$400.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Dashboardpage;


// const Dashboardpage = () => {
//   return (
//     <div className="container pr-[35px] overflow-hidden">
//     <div className="container mx-5  mt-8 pt-4 rounded-lg bg-[#1f273d]">
//   <h2 className="font-semibold text-white pb-2 ml-3">Latest Transactions</h2>
//   <div className="container overflow-x-scroll max-w-full mr-4 md:overflow-hidden xl:overflow-hidden"> {/* Apply max-w-full to keep the container's width fixed */}
//     <table className="min-w-full bg-[#1f273d] shadow-md rounded-lg "> {/* min-w-full to ensure table can overflow */}
//       <thead>
//         <tr className="bg-[#161b2b] text-white border-y border-white">
//           <th className="py-3 px-6 text-left">Name</th>
//           <th className="py-3 px-6 text-left">Status</th>
//           <th className="py-3 px-6 text-left">Date</th>
//           <th className="py-3 px-6 text-left">Amount</th>
//         </tr>
//       </thead>
//       <tbody className="text-white">
//         <tr className="border-b border-black hover:bg-[#1c2134]">
//           <td className="py-3 px-6 flex items-center">
//             <Image width={40} height={40} className="w-10 h-10 rounded-full mr-3" src="/no_image.png" alt="Profile" />
//             <span>John Doe</span>
//           </td>
//           <td className="py-3 px-6">Active</td>
//           <td className="py-3 px-6">2024-06-22</td>
//           <td className="py-3 px-6">$250.00</td>
//         </tr>
//         <tr className="border-b border-black hover:bg-[#161b2b]">
//           <td className="py-3 px-6 flex items-center">
//             <Image width={40} height={40} className="w-10 h-10 rounded-full mr-3" src="/no_image.png" alt="Profile" />
//             <span>Jane Smith</span>
//           </td>
//           <td className="py-3 px-6">Inactive</td>
//           <td className="py-3 px-6">2024-06-21</td>
//           <td className="py-3 px-6">$300.00</td>
//         </tr>
//         <tr className="border-b border-black hover:bg-[#161b2b]">
//           <td className="py-3 px-6 flex items-center">
//             <Image width={40} height={40} className="w-10 h-10 rounded-full mr-3" src="/no_image.png" alt="Profile" />
//             <span>Robert Johnson</span>
//           </td>
//           <td className="py-3 px-6">Pending</td>
//           <td className="py-3 px-6">2024-06-20</td>
//           <td className="py-3 px-6">$150.00</td>
//         </tr>
//         <tr className="hover:bg-[#161b2b]">
//           <td className="py-3 px-6 flex items-center">
//             <Image width={40} height={40} className="w-10 h-10 rounded-full mr-3" src="/no_image.png" alt="Profile" />
//             <span>Emily Davis</span>
//           </td>
//           <td className="py-3 px-6">Active</td>
//           <td className="py-3 px-6">2024-06-19</td>
//           <td className="py-3 px-6">$400.00</td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
// </div>
// </div>




//   )
// }

// export default Dashboardpage


// <div className="overflow-x-auto container mx-5 mt-8 pt-4 rounded-lg bg-[#1f273d]">
//   <h2 className="font-semibold text-white pb-2 ml-3">Latest Transactions</h2>
//   <table className="min-w-full bg-[#1f273d] shadow-md rounded-lg">
//     <thead>
//       <tr className=" bg-[#161b2b] text-white border-y border-white">
//         <th className="py-3 px-6 text-left">Name</th>
//         <th className="py-3 px-6 text-left">Status</th>
//         <th className="py-3 px-6 text-left">Date</th>
//         <th className="py-3 px-6 text-left">Amount</th>
//       </tr>
//     </thead>
//     <tbody className="text-white">
//       <tr className="border-b border-black hover:bg-[#1c2134]">
//         <td className="py-3 px-6 flex items-center">
//           <Image width={40} height={40} className="w-10 h-10 rounded-full mr-3" src="/no_image.png" alt="Profile" />
//           <span>John Doe</span>
//         </td>
//         <td className="py-3 px-6">Active</td>
//         <td className="py-3 px-6">2024-06-22</td>
//         <td className="py-3 px-6">$250.00</td>
//       </tr>
//       <tr className="border-b border-black hover:bg-[#161b2b]">
//         <td className="py-3 px-6 flex items-center">
//           <Image width={40} height={40} className="w-10 h-10 rounded-full mr-3" src="/no_image.png" alt="Profile" />
//           <span>Jane Smith</span>
//         </td>
//         <td className="py-3 px-6">Inactive</td>
//         <td className="py-3 px-6">2024-06-21</td>
//         <td className="py-3 px-6">$300.00</td>
//       </tr>
//       <tr className="border-b border-black hover:bg-[#161b2b]">
//         <td className="py-3 px-6 flex items-center">
//           <Image width={40} height={40} className="w-10 h-10 rounded-full mr-3" src="/no_image.png" alt="Profile" />
//           <span>Robert Johnson</span>
//         </td>
//         <td className="py-3 px-6">Pending</td>
//         <td className="py-3 px-6">2024-06-20</td>
//         <td className="py-3 px-6">$150.00</td>
//       </tr>
//       <tr className="hover:bg-[#161b2b]">
//         <td className="py-3 px-6 flex items-center">
//           <Image width={40} height={40} className="w-10 h-10 rounded-full mr-3" src="/no_image.png" alt="Profile" />
//           <span>Emily Davis</span>
//         </td>
//         <td className="py-3 px-6">Active</td>
//         <td className="py-3 px-6">2024-06-19</td>
//         <td className="py-3 px-6">$400.00</td>
//       </tr>
//     </tbody>
//   </table>
// </div>