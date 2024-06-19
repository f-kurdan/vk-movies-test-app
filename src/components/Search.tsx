import { useDebounce } from '@uidotdev/usehooks';
import React, { useState } from 'react'
import UseMovies from '../hooks/UseMovies';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const debouncedQuery = useDebounce(query, 500);

    const { data } = UseMovies(page, debouncedQuery);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPage(1);
        console.log("onCjhange", e?.target?.value);
        setQuery(e.target.value)
    }

    const onClick = (id: number) => {
        setQuery('');
        navigate(`/movie/${id}`);
    }

    return (
        <div className="mb-4 relative">
            <input
                type="text"
                placeholder="Search movies..."
                value={query}
                onChange={onChange}
                className="p-2 border border-gray-400 rounded-2xl"
            />
            {query ? <div className='absolute p-1 flex flex-col w-full bg-white z-10 '>
                {data?.map((movie) => (
                    <div key={movie.id} onClick={() => onClick(movie.id)} className='flex justify-start gap-2 cursor-pointer h-[100px]'>
                        <div className='w-[30%]'>
                            {movie.poster && <img src={movie.poster.url} alt={movie.name} />}
                        </div>
                        <p className=''>
                            {movie.name}
                        </p>
                    </div>
                ))}
            </div> : null}
        </div>
    )
}

export default Search