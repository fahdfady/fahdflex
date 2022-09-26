import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { updateDoc, doc, onSnapShot, onSnapshot } from 'firebase/firestore';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const SavedShows = () => {
    const [movies, setMovies] = useState([]);
    const { user } = UserAuth();

    let slider = document.getElementById(`slider`)

    const slideLeft = () => {
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setMovies(doc.data()?.savedShows);
        });
    }, [user?.email]);

    const movieRef = doc(db, 'users', `${user?.email}`)
    const deleteShow = async (passedID) => {
        try {
            const result = movies.filter((movie) => movie.id !== passedID)
            await updateDoc(movieRef, {
                savedShows: result
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <h2 className="text-white font-bold md:text-xl p-4">
                My Shows
            </h2>

            <div className="relative flex items-center group">

                <MdChevronLeft
                    onClick={ slideLeft }
                    className="bg-white rounded-full absolute left-0 opacity-70 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={ 40 } />

                <div id={ 'slider' } className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
                    { movies.map((movie) => (
                        <div
                            key={ movie.id }
                            className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'
                        >
                            <img
                                className='w-full h-auto block'
                                src={ `https://image.tmdb.org/t/p/w500/${movie?.img}` }
                                alt={ movie?.title }
                            />
                            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                                    { movie?.title }
                                </p>

                                <p onClick={ () => deleteShow(movie.id) } className='absolute top-4 left-4 text-gray-300'>
                                    <AiOutlineClose />
                                </p>
                            </div>
                        </div>
                    )) }
                </div>

                <MdChevronRight
                    onClick={ slideRight }
                    className="bg-white rounded-full absolute right-0 opacity-70 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={ 40 } />
            </div>
        </>
    )
}

export default SavedShows;