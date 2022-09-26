import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { BiErrorAlt } from "react-icons/bi";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const { user, logIn } = UserAuth();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            await logIn(email, password)
            navigate('/')
        } catch (error) {
            console.log(error)
            setError(error.message)
        }

    }


    return (
        <>
            <div className="w-full h-screen">
                <img className="hidden sm:block absolute w-full h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/ac824598-245b-4828-b14f-5cff9074f4d0/2f9c6357-d498-4426-9be7-8fa23922d82b/EG-en-20220822-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="background" />

                <div className="bg-black/60 fixed top-0 lef-0 w-full h-screen"></div>

                <div className="fixed w-full px-4 py-24 z-50">
                    <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
                        <div className="max-w-[320px] mx-auto py-16">
                            <h1 className="text-3xl font-bold">sign in</h1>

                            { error ? <p className="flex justify-center items-center gap-[4px] p-2 my-3 bg-gray-200 text-red-700 font-bold text-sm "><BiErrorAlt />{ error }</p> : null }

                            <form onSubmit={ handleSubmit } className="w-full flex flex-col py-4">
                                <input onChange={ (e) => setEmail(e.target.value) } className="p-3 my-2 bg-gray-700 rounded" type="email" placeholder="email" />
                                <input onChange={ (e) => setPassword(e.target.value) } className="p-3 my-2 bg-gray-700 rounded" type="password" placeholder="Password" />

                                <button className="bg-red-600 py-3 my-6 rounded font-bold">sign in</button>

                                <div className="flex justify-between items-center text-sm text-gray-600">
                                    <p><input className="mr-2" type="checkbox" /> Remember me</p>

                                    <p>Need Help?</p>
                                </div>

                                <p className="py-8"><span className="text-gray-600">new to netflix?</span>
                                    <Link to="/signup"> sign up </Link>
                                </p>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login;