import { useEffect, useState } from "react";
import axios from 'axios'
import Movie from "./movie";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Row = ({ title, fetchURL, rowID }) => {

    const [movies, setMovies] = useState([])


    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    }, [fetchURL])


    let slider = document.getElementById(`slider${rowID}`)

    const slideLeft = () => {
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    return (
        <>
            <h2 className="text-white font-bold md:text-xl p-4">
                { title }
            </h2>

            <div className="relative flex items-center group">

                <MdChevronLeft
                    onClick={ slideLeft }
                    className="bg-white rounded-full absolute left-0 opacity-70 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={ 40 } />

                <div id={ `slider${rowID}` } className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
                    { movies.map((movie, id) => (

                        <Movie key={ id } movie={ movie } />
                    )) }
                </div>

                <MdChevronRight
                    onClick={ slideRight }
                    className="bg-white rounded-full absolute right-0 opacity-70 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={ 40 } />
            </div>
        </>
    )
}

export default Row;