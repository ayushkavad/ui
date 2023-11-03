'use client';
import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { BsBookmark } from 'react-icons/bs'

interface SearchInterface {
  query: string;
}

export default function Home() {
  const formFields = {
    query: '',
  };
  const [{ query }, setQuery] = useState<SearchInterface>(formFields);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    console.log('Query:', query);
  }

  return (
    <div className="h-screen w-full flex flex-row bg-black">
      {/* Feed Section */}
      <div
        className="w-1/2 flex flex-col border-r"
        style={{ borderRightColor: 'rgb(38,38,38)' }}
      >
        {/* Search Bar */}
        <div className="p-4 bg-black flex items-center justify-center border-b" style={{ borderColor: 'rgb(38,38,38)' }}>
          <div className="relative w-full max-w-md">
            <form onSubmit={handleSearch}>
              <input
                className="w-full h-10 px-4 rounded-full text-sm text-slate-100 bg-[#0a0a0a] focus:outline-none focus:ring focus:ring-rose-500"
                autoComplete="off"
                type="text"
                name="search"
                placeholder="Search"
                value={query}
                onChange={(e) => setQuery({ query: e.target.value })}
              />
              <button
                type="submit"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-100 hover:text-rose-500 focus:outline-none"
              >
                <BsSearch />
              </button>
            </form>
          </div>
        </div>

        {/* Feed Content */}
        <div className="overflow-y-auto flex-grow bg-black">
          {/* Your tweet feed content goes here */}

          <div className="bg-gray-100">
            <div className="bg-black shadow-lg">
              <div className="p-4 border-b" style={{ borderColor: 'rgb(38,38,38' }}>
                <div className="flex items-center">
                  <div className="rounded-full overflow-hidden mr-4">
                    <img
                      src="https://images.pexels.com/photos/18866330/pexels-photo-18866330/free-photo-of-casual-style-model-in-cropped-top-and-denim-jacket.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Profile Image"
                      className="w-12 h-12 object-cover"
                    />
                  </div>
                  <div className='flex flex-col items-start'>
                    <h2 className="font-semibold text-sm text-white">Ava Thompson</h2>
                    <p className="text-gray-600 text-[10px]">@avathompson</p>
                  </div>
                </div>
                <p className="mt-2 text-sm text-slate-100">
                  Embracing challenges and turning them into opportunities.
                </p>
                <p className='mt-1 text-sm text-slate-600'>#Resilience</p>
                <img
                  src="https://images.pexels.com/photos/18866334/pexels-photo-18866334/free-photo-of-model-posing-in-jeans.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Additional Image"
                  className="mt-2 w-full rounded-xl object-cover"
                />

                <div className='pl-4 pr-4  m-3 flex justify-between items-center'>
                  <div className='flex justify-center items-center gap-1'>
                    <AiOutlineHeart className='text-white hover:text-red-500' style={{ height: '20px', width: '20px' }} />
                    <p className='text-white text-sm'>0</p>
                  </div>
                  <div className='flex justify-center items-center gap-1'>
                    <FaRegComment className='text-white hover:text-blue-500' style={{ height: '18px', width: '18px' }} />
                    <p className='text-white text-sm'>0</p>
                  </div>
                  <div className='flex justify-center items-center gap-1'>
                    <BsBookmark className='text-white' style={{ height: '17px', width: '17px' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100">
            <div className="bg-black shadow-lg">
              <div className="p-4 border-b" style={{ borderColor: 'rgb(38,38,38' }}>
                <div className="flex items-center">
                  <div className="rounded-full overflow-hidden mr-4">
                    <img
                      src="https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Profile Image"
                      className="w-12 h-12 object-cover"
                    />
                  </div>
                  <div className='flex flex-col items-start'>
                    <h2 className="font-semibold text-sm text-white">Lucas Hernandez</h2>
                    <p className="text-gray-600 text-[10px]">@lucashernandez</p>
                  </div>
                </div>
                <p className="mt-2 text-sm text-slate-100">
                  Late-night coding sessions: where bugs turn into features, coffee becomes a lifeline, and syntax errors test your patience. Embracing the challenges, one line of code at a time. 💻✨
                </p>
                <p className='mt-1 text-sm text-slate-600'>#DevelopersLife #CodingAdventures #StayPersistent</p>

                <div className='pl-4 pr-4  m-3 flex justify-between items-center'>
                  <div className='flex justify-center items-center gap-1'>
                    <AiOutlineHeart className='text-white hover:text-red-500' style={{ height: '20px', width: '20px' }} />
                    <p className='text-white text-sm'>0</p>
                  </div>
                  <div className='flex justify-center items-center gap-1'>
                    <FaRegComment className='text-white hover:text-blue-500' style={{ height: '18px', width: '18px' }} />
                    <p className='text-white text-sm'>0</p>
                  </div>
                  <div className='flex justify-center items-center gap-1'>
                    <BsBookmark className='text-white' style={{ height: '17px', width: '17px' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100">
            <div className="bg-black shadow-lg">
              <div className="p-4 border-b" style={{ borderColor: 'rgb(38,38,38' }}>
                <div className="flex items-center">
                  <div className="rounded-full overflow-hidden mr-4">
                    <img
                      src="https://images.pexels.com/photos/18172588/pexels-photo-18172588/free-photo-of-beautiful-young-women-with-red-hair-on-the-white-background-portrait.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                      alt="Profile Image"
                      className="w-12 h-12 object-cover"
                    />
                  </div>
                  <div className='flex flex-col items-start'>
                    <h2 className="font-semibold text-sm text-white">Emma Davis</h2>
                    <p className="text-gray-600 text-[10px]">@emmadavis</p>
                  </div>
                </div>
                <p className="mt-2 text-sm text-slate-100">
                  Admiring the enigmatic smile of Mona Lisa. 🎨 Did you know that this masterpiece was created by Leonardo da Vinci in the 16th century?
                </p>
                <p className='mt-1 text-sm text-slate-600'>#ArtHistory #MonaLisaMystery</p>
                <img
                  src="https://i.seadn.io/s/raw/files/bc8c9b7cb75e38d7de3afdf675bbe06d.png?auto=format&dpr=1&w=384"
                  className="mt-2 w-full rounded-xl object-cover"
                />

                <div className='pl-4 pr-4  m-3 flex justify-between items-center'>
                  <div className='flex justify-center items-center gap-1'>
                    <AiOutlineHeart className='text-white hover:text-red-500' style={{ height: '20px', width: '20px' }} />
                    <p className='text-white text-sm'>0</p>
                  </div>
                  <div className='flex justify-center items-center gap-1'>
                    <FaRegComment className='text-white hover:text-blue-500' style={{ height: '18px', width: '18px' }} />
                    <p className='text-white text-sm'>0</p>
                  </div>
                  <div className='flex justify-center items-center gap-1'>
                    <BsBookmark className='text-white' style={{ height: '17px', width: '17px' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="bg-gray-100">
            <div className="bg-black shadow-lg">
              <div className="p-4 border-b" style={{ borderColor: 'rgb(38,38,38' }}>
                <div className="flex items-center">
                  <div className="rounded-full overflow-hidden mr-4">
                    <img
                      src="https://images.pexels.com/photos/18866330/pexels-photo-18866330/free-photo-of-casual-style-model-in-cropped-top-and-denim-jacket.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Profile Image"
                      className="w-12 h-12 object-cover"
                    />
                  </div>
                  <div className='flex flex-col items-start'>
                    <h2 className="font-semibold text-sm text-white">Ava Thompson</h2>
                    <p className="text-gray-600 text-[10px]">@avathompson</p>
                  </div>
                </div>
                <p className="mt-2 text-sm text-slate-100">
                  Embracing challenges and turning them into opportunities.
                </p>
                <p className='mt-1 text-sm text-slate-600'>#Resilience</p>

                <video className='mt-5 rounded-xl' controls src="https://player.vimeo.com/external/384761655.sd.mp4?s=383ab4dbc773cd0d5ece3af208d8f963368f67e4&profile_id=164&oauth2_token_id=57447761"></video>


                <div className='pl-4 pr-4  m-3 flex justify-between items-center'>
                  <div className='flex justify-center items-center gap-1'>
                    <AiOutlineHeart className='text-white hover:text-red-500' style={{ height: '20px', width: '20px' }} />
                    <p className='text-white text-sm'>0</p>
                  </div>
                  <div className='flex justify-center items-center gap-1'>
                    <FaRegComment className='text-white hover:text-blue-500' style={{ height: '18px', width: '18px' }} />
                    <p className='text-white text-sm'>0</p>
                  </div>
                  <div className='flex justify-center items-center gap-1'>
                    <BsBookmark className='text-white' style={{ height: '17px', width: '17px' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

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
