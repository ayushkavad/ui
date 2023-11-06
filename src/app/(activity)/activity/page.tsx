import PostCard from '@/components/PostCardComponent'

export default function Activity() {
  return (
    <div className="h-screen bg-black w-full overflow-y-auto overflow-x-hidden flex flex-col items-center text-white">
      <div className="overflow-y-auto flex-grow bg-black">
        {/* Your tweet feed content goes here */}
        <PostCard media={false} />
        <PostCard media={true} />
      </div>
    </div>
  )
}
