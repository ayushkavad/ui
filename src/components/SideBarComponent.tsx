/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { MdOutlineExplore } from 'react-icons/md'
import { BiHomeAlt2 } from 'react-icons/bi'
import { AiOutlineHeart, AiOutlinePlusCircle } from 'react-icons/ai'

function SideBar() {
  return (
    <div
      className="w-1/4 border-r cursor-pointer bg-black"
      style={{ borderRightColor: 'rgb(38,38,38)' }}
    >
      <div className="h-fit">
        <Link href="/profile">
          <div className="flex flex-row justify-start items-center gap-3 p-2 m-4 h-16 rounded-md">
            <div className="w-12 h-12 rounded-full border-2 border-rose-500 flex justify-center items-center">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src="https://images.pexels.com/photos/609549/pexels-photo-609549.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="r"
              />
            </div>
            <p className="text-slate-100 font-semibold">View Profile</p>
          </div>
        </Link>
        <Link href="/">
          <div className="p-2 m-4 rounded-md hover:bg-[#333]">
            <div className="flex justify-start items-center gap-2 text-slate-100 ">
              <BiHomeAlt2 style={{ height: '25px', width: '25px' }} />
              <p className="text-slate-100">Home</p>
            </div>
          </div>
        </Link>
        <div className="p-2 m-4 rounded-md hover:bg-[#333]">
          <div className="flex justify-start items-center gap-2 text-slate-100 ">
            <MdOutlineExplore style={{ height: '25px', width: '25px' }} />
            <p className="text-slate-100">Explore</p>
          </div>
        </div>
        <div className="p-2 m-4 rounded-md hover:bg-[#333]">
          <div className="flex justify-start items-center gap-2 text-slate-100 ">
            <AiOutlineHeart style={{ height: '25px', width: '25px' }} />
            <p className="text-slate-100">Likes</p>
          </div>
        </div>
        <div className="p-2 m-4 rounded-md hover:bg-[#333]">
          <div className="flex justify-start items-center gap-2 text-slate-100 ">
            <AiOutlinePlusCircle style={{ height: '25px', width: '25px' }} />
            <p className="text-slate-100">Creates</p>
          </div>
        </div>
        <div className="p-2 m-4 rounded-2xl bg-blue-400 text-sm text-center ">
          <p className="text-white">Logout</p>
        </div>
      </div>
    </div>
  )
}

export default SideBar
