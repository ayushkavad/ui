/* eslint-disable @next/next/no-img-element */
import Search from '@/components/SearchComponent'
import PostCard from '@/components/PostCardComponent'
import SideBar from '@/components/SideBarComponent'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-row bg-black">
      {/* Feed Section */}
      <div
        className="w-1/2 flex flex-col border-r"
        style={{ borderRightColor: 'rgb(38,38,38)' }}
      >
        {/* Search Bar */}
        <Search />

        {/* Feed Content */}
        <div className="overflow-y-auto flex-grow bg-black">
          {/* Your tweet feed content goes here */}
          <PostCard />
        </div>
      </div>

      {/* Suggestion Section */}
      <div className="w-1/2 bg-black">
        <div className="p-4 m-4">
          <h1 className="text-slate-100 font-semibold">
            Popular accounts suggested for you
          </h1>

          <div className="h-[55vh] overflow-y-scroll scroll-smooth">
            <div className="m-5 flex items-center">
              <div className="w-1/2 flex justify-between items-center">
                <Link href="/profile">
                  <div className="flex justify-center items-center">
                    <div className="rounded-full overflow-hidden mr-4">
                      <img
                        src="https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Profile Image"
                        className="w-12 h-12 object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <h2 className="font-semibold text-sm text-white">
                        Lucas Hernandez
                      </h2>
                      <p className="text-gray-600 text-[10px]">
                        @lucashernandez
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <button className="w-20 p-1 bg-white text-black rounded-full">
                follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
