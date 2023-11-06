/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { AiOutlineHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { BsBookmark } from 'react-icons/bs'
import Link from 'next/link'

interface mediaType {
  media: boolean
}

function PostCard({ media }: mediaType) {
  return (
    <div className="bg-gray-100">
      <div className="bg-black shadow-lg">
        <div className="p-4 border-b" style={{ borderColor: 'rgb(38,38,38' }}>
          <Link href="/profile">
            <div className="flex items-center">
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
                <p className="text-gray-600 text-[10px]">@lucashernandez</p>
              </div>
            </div>
          </Link>
          <p className="mt-2 text-sm text-slate-100">
            Late-night coding sessions: where bugs turn into features, coffee
            becomes a lifeline, and syntax errors test your patience. Embracing
            the challenges, one line of code at a time. 💻✨
          </p>
          <p className="mt-1 text-sm text-slate-600">
            #DevelopersLife #CodingAdventures #StayPersistent
          </p>

          {media ? (
            <video
              controls
              src="https://player.vimeo.com/external/403570399.sd.mp4?s=aa2e5afc0dcbf6d8755173c3ee9437d9e16859a0&profile_id=164&oauth2_token_id=57447761"
              className="mt-5 w-full rounded-xl object-cover"
            ></video>
          ) : (
            <img
              src="https://images.pexels.com/photos/18156123/pexels-photo-18156123/free-photo-of-woman-in-tulle-dress-standing-on-bridge-overlooking-eiffel-tower-in-paris-france.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
              className="mt-5 w-full rounded-xl object-cover"
            />
          )}

          <div className="pl-4 pr-4  m-3 flex justify-between items-center">
            <div className="flex justify-center items-center gap-1">
              <AiOutlineHeart
                className="text-white hover:text-red-500"
                style={{ height: '20px', width: '20px' }}
              />
              <p className="text-white text-sm">0</p>
            </div>
            <div className="flex justify-center items-center gap-1">
              <FaRegComment
                className="text-white hover:text-blue-500"
                style={{ height: '18px', width: '18px' }}
              />
              <p className="text-white text-sm">0</p>
            </div>
            <div className="flex justify-center items-center gap-1">
              <BsBookmark
                className="text-white"
                style={{ height: '17px', width: '17px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
