/* eslint-disable @next/next/no-img-element */
import Search from '@/components/SearchComponent';
import PostCard from '@/components/PostCardComponent';
import SideBar from '@/components/SideBarComponent';

export default function Home() {

  return (
    <div className="h-screen w-full flex flex-row bg-black">
      <SideBar />
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
          <h1 className="text-slate-100 font-semibold">Popular accounts suggested for you</h1>
        </div>
      </div>
    </div>
  );
}
