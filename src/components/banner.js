import axios from "axios";
import { useEffect, useState } from "react";
import requests from "../request";
import { BsPlay } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const Banner = () => {
    const [movies, setMovies] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
            setMovies(response.data.results)
        })
    }, [])

    console.log(movie);

    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + '...'
        }

        else {
            return str
        }
    };

    return (
        <div className="w-full h-[500px] text-white">
            <div className="w-full h-full">
                <div className="absolute w-full h-[500px] bg-gradient-to-r from-black "></div>
                <img className="w-full h-full object-cover"
                    src={ `https://image.tmdb.org/t/p/original${movie?.backdrop_path}` } alt={ movie?.title } />


                <div className="absolute w-full top-[20%] p-4 md:p-8">

                    <h1 className="movie-title text-3xl md:text-5x font-bold">
                        { movie?.title }
                    </h1>

                    <div className="my-4">
                        <button className="inline-flex justify-center items-center border bg-white text-black border-white py-2 px-5">
                            <BsPlay className="m-2 text-lg" />
                            play
                        </button>
                        <button className="inline-flex justify-center items-center border text-white border-white py-2 px-5 ml-4">
                            <AiOutlineInfoCircle className="m-2 text-lg" />
                            more info
                        </button>

                    </div>

                    <p className="text-gray-400 text-sm">
                        Released :
                        { movie?.release_date }
                    </p>

                    <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
                        { truncateString(movie?.overview, 180) }
                    </p>
                </div>

            </div>
        </div>

    );
}

export default Banner;