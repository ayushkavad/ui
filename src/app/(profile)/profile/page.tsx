/* eslint-disable @next/next/no-img-element */
'use client'

export default function Profile() {
  return (
    <div className="h-screen bg-black w-full overflow-y-auto overflow-x-hidden flex flex-col items-center text-white">
      <div className="w-full flex justify-center gap-24 p-5 m-10">
        <div className="w-44 h-44 rounded-full border-2 border-rose-500 flex justify-center items-center">
          <img
            className="w-40 h-40 rounded-full object-cover"
            src="https://images.pexels.com/photos/609549/pexels-photo-609549.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="r"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <p className="text-xl">helloworld</p>
            <button className="text-sm text-white p-2 font-semibold rounded-md bg-[#111] hover:bg-[#222] focus:outline-none focus:ring focus:border-blue-300">
              Edit profile
            </button>
          </div>
          <div className="flex gap-5">
            <p>
              <b>6</b> posts
            </p>
            <p>
              <b>160</b> followers
            </p>
            <p>
              <b>180</b> following
            </p>
          </div>
        </div>
      </div>
      <hr className="w-4/5 border-[rgb(38,38,38)] my-6" />
      <div className="grid grid-cols-3 gap-4 p-5">
        <div className="w-64 h-64 bg-[#0a0a0a] rounded-md"></div>
        <div className="w-64 h-64 bg-[#0a0a0a] rounded-md"></div>
      </div>
    </div>
  )
}
