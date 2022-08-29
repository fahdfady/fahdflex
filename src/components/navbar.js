const Navbar = () => {
    return (
        <header className="page-header">
            <nav className="w-full flex items-center justify-between p-4 z-[100] absolute">
                <h1 className="text-red-500 text-4xl font-bold cursor-pointer">NETFLIX</h1>

                <div>
                    <button className="text-white pr-4">sign in</button>
                    <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">sign up</button>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;