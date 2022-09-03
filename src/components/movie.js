import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useState } from "react";
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const Movie = ({ movie }) => {
    const [like, setLike] = useState(false)

    return (
        <div className="w-[160px] sm:w-[200px] md:2-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
            <img className="w-full h-auto block" src={ `https://image.tmdb.org/t/p/w500${movie?.backdrop_path}` } alt={ movie?.title } loading="lazy" />

            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 transition-all text-white">
                <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center  transition-all">
                    { movie?.title }
                </p>
                <p className="">
                    { like ? <FaHeart className="absolute top-4 left-4 text-gray-300" /> : <FaRegHeart className="absolute top-4 left-4 text-gray-300" /> }
                </p>
            </div>
        </div>
    );
}

export default Movie;