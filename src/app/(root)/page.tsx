/* eslint-disable @next/next/no-img-element */
import Search from '@/components/SearchComponent'
import PostCard from '@/components/PostCardComponent'
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
          <PostCard media={false} />
          <PostCard media={true} />
        </div>
      </div>

      {/* Suggestion Section */}
      <div className="w-1/2 bg-black">
        <div className="p-5 m-5">
          <h1 className="text-slate-100 font-semibold">
            Popular accounts suggested for you
          </h1>

          <div className="h-[65vh] overflow-y-scroll scroll-smooth">
            <div className="m-5 flex items-center">
              <div className="w-1/2 flex justify-between items-center">
                <Link href="/profile">
                  <div className="flex justify-center items-center">
                    <div className="rounded-full overflow-hidden mr-4">
                      <img
                        src="https://images.pexels.com/photos/2010877/pexels-photo-2010877.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt="Profile Image"
                        className="w-12 h-12 object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <h2 className="font-semibold text-sm text-white">
                        Sophia Grace
                      </h2>
                      <p className="text-gray-600 text-[12px]">@sophiagrace</p>
                    </div>
                  </div>
                </Link>
              </div>
              <button className="w-20 p-1 text-sm bg-white text-black rounded-full">
                follow
              </button>
            </div>

            <div className="m-5 flex items-center">
              <div className="w-1/2 flex justify-between items-center">
                <Link href="/profile">
                  <div className="flex justify-center items-center">
                    <div className="rounded-full overflow-hidden mr-4">
                      <img
                        src="https://images.pexels.com/photos/9136162/pexels-photo-9136162.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt="Profile Image"
                        className="w-12 h-12 object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <h2 className="font-semibold text-sm text-white">
                        Ava Lily
                      </h2>
                      <p className="text-gray-600 text-[12px]">@avalily</p>
                    </div>
                  </div>
                </Link>
              </div>
              <button className="w-20 p-1 text-sm bg-white text-black rounded-full">
                follow
              </button>
            </div>
            <div className="m-5 flex items-center">
              <div className="w-1/2 flex justify-between items-center">
                <Link href="/profile">
                  <div className="flex justify-center items-center">
                    <div className="rounded-full overflow-hidden mr-4">
                      <img
                        src="https://images.pexels.com/photos/18792119/pexels-photo-18792119/free-photo-of-young-man-in-a-fashionable-outfit-posing-outside.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt="Profile Image"
                        className="w-12 h-12 object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <h2 className="font-semibold text-sm text-white">
                        Liam Henry
                      </h2>
                      <p className="text-gray-600 text-[12px]">@liamhenry</p>
                    </div>
                  </div>
                </Link>
              </div>
              <button className="w-20 p-1 text-sm bg-white text-black rounded-full">
                follow
              </button>
            </div>
            <div className="m-5 flex items-center">
              <div className="w-1/2 flex justify-between items-center">
                <Link href="/profile">
                  <div className="flex justify-center items-center">
                    <div className="rounded-full overflow-hidden mr-4">
                      <img
                        src="https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Profile Image"
                        className="w-12 h-12 object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <h2 className="font-semibold text-sm text-white">
                        Mia Elizabeth
                      </h2>
                      <p className="text-gray-600 text-[12px]">@miaelizabeth</p>
                    </div>
                  </div>
                </Link>
              </div>
              <button className="w-20 p-1 text-sm bg-white text-black rounded-full">
                follow
              </button>
            </div>
            <div className="m-5 flex items-center">
              <div className="w-1/2 flex justify-between items-center">
                <Link href="/profile">
                  <div className="flex justify-center items-center">
                    <div className="rounded-full overflow-hidden mr-4">
                      <img
                        src="https://images.pexels.com/photos/2792631/pexels-photo-2792631.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt="Profile Image"
                        className="w-12 h-12 object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <h2 className="font-semibold text-sm text-white">
                        Amelia Rose
                      </h2>
                      <p className="text-gray-600 text-[12px]">@ameliarose</p>
                    </div>
                  </div>
                </Link>
              </div>
              <button className="w-20 p-1 text-sm bg-white text-black rounded-full">
                follow
              </button>
            </div>
            <div className="m-5 flex items-center">
              <div className="w-1/2 flex justify-between items-center">
                <Link href="/profile">
                  <div className="flex justify-center items-center">
                    <div className="rounded-full overflow-hidden mr-4">
                      <img
                        src="https://images.pexels.com/photos/4727482/pexels-photo-4727482.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt="Profile Image"
                        className="w-12 h-12 object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <h2 className="font-semibold text-sm text-white">
                        William James
                      </h2>
                      <p className="text-gray-600 text-[12px]">@williamjames</p>
                    </div>
                  </div>
                </Link>
              </div>
              <button className="w-20 p-1 text-sm bg-white text-black rounded-full">
                follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
