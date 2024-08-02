export const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-white">
                    Turinng
                </a>
                <div>
                    <a href="/cards" className="text-white mx-2 hover:text-blue-500">Get cards</a>
                    <a href="/album" className="text-white mx-2 hover:text-blue-500">My album</a>
                </div>
            </div>
        </nav>
    )
}