// MovieFilter.tsx
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MovieFilter: React.FC = () => {
    const [genre, setGenre] = useState<string[]>([]);
    const [minRating, setMinRating] = useState<number>(0);
    const [maxRating, setMaxRating] = useState<number>(10);
    const [minYear, setMinYear] = useState<number>(1990);
    const [maxYear, setMaxYear] = useState<number>(new Date().getFullYear());

    const [_, setSearchParams] = useSearchParams();

    const handleGenreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setGenre(prev => prev.includes(value) ? prev.filter(g => g !== value) : [...prev, value]);
    };

    const handleMaxRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        setMaxRating(value);
    };

    const handleMinRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        setMinRating(value);
    };

    const handleMinYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        setMinYear(value);
    };

    const handleMaxYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        setMaxYear(value);
    };

    const handleButtonClick = () => {
        setSearchParams({ genre: genre.join(','), minRating: minRating.toString(), maxRating: maxRating.toString(), minYear: minYear.toString(), maxYear: maxYear.toString() });
    }

    return (
        <div className="p-4 flex flex-col gap-2">
            <div className='flex gap-2 '>
                <label>Genre:</label>
                <input type="checkbox" defaultChecked value="фэнтзи" onChange={handleGenreChange} /> Fantasy
                <input type="checkbox" defaultChecked value="комедия" onChange={handleGenreChange} /> Comedy
                <input type="checkbox" defaultChecked value="приключения" onChange={handleGenreChange} /> Adventure
                <input type="checkbox" defaultChecked value="драма" onChange={handleGenreChange} /> Drama
                <input type="checkbox" defaultChecked value="криминал" onChange={handleGenreChange} /> Crime
            </div>
            <div className='flex gap-2 ' >
                <label>Rating:</label>
                <input className='p-1 border-1 rounded-md border-black bg-slate-100' type="number" min="0" max="10" step="0.1" value={minRating.toString()} onChange={handleMinRatingChange} />
                <span>-</span>
                <input className='p-1 border-1 rounded-md border-black bg-slate-100' type="number" min="0" max="10" step="0.1" value={maxRating.toString()} onChange={handleMaxRatingChange} />
                <>{minRating} - {maxRating}</>
            </div>
            <div className='flex gap-2 '>
                <label>Year:</label>
                <input className='p-1 border-1 rounded-md border-black bg-slate-100' type="number" min="1990" max={new Date().getFullYear()} value={minYear} onChange={handleMinYearChange} />
                <span>-</span>
                <input className='p-1 border-1 rounded-md border-black bg-slate-100' type="number" min="1990" max={new Date().getFullYear()} value={maxYear} onChange={handleMaxYearChange} />
                <>{minYear} - {maxYear}</>
            </div>
            <button onClick={handleButtonClick} className='p-2 bg-cyan-200 rounded-md cursor-pointer hover:bg-cyan-300 w-fit'>Filter</button>
        </div>
    );
};

export default MovieFilter;
