import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
    const { user, logOut } = UserAuth();
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await logOut()
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <header className="page-header">
            <nav className="w-full flex items-center justify-between p-4 z-[100] absolute">
                <Link to="/" >
                    <h1 className="text-red-500 text-4xl font-bold cursor-pointer">NETFLIX</h1>
                </Link>

                { user?.email ? (
                    <div>
                        <Link to='/account'>
                            <button className="text-white pr-4">Account</button>
                        </Link>

                        <button onClick={ handleLogout } className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">Logout</button>
                    </div>
                ) : (
                    <div>
                        <Link to='/login'>
                            <button className="text-white pr-4">sign in</button>
                        </Link>

                        <Link to='/signup'>
                            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">sign up</button>
                        </Link>
                    </div>
                ) }
            </nav>
        </header >
    );
}

export default Navbar;