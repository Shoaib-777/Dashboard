import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="text-center bg-black text-white text-3xl m-auto">Home</div>
    <div className="mx-auto flex justify-center items-center mt-[7rem]">
      <Link href={'/login'}><button className="text-3xl text-bold text-blue-700 underline decoration-red-600">Click here to login or View Dashboard</button></Link>
    </div>
    </>
  );
}
