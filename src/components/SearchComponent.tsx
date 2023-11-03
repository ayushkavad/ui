'use client'
import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

interface SearchInterface {
    query: string
}
function Search() {
    const formFields = {
        query: '',
    }
    const [{ query }, setQuery] = useState<SearchInterface>(formFields)

    function handleSearch(e: React.FormEvent) {
        e.preventDefault()
        console.log('Query:', query)
    }
    return (
        <div
            className="p-4 bg-black flex items-center justify-center border-b"
            style={{ borderColor: 'rgb(38,38,38)' }}
        >
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
    )
}

export default Search
