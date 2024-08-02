import { NavbarLinks } from "./utils"

export const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-white">
                    Turinng
                </a>
                <ul className="flex gap-2">
                    {
                        NavbarLinks.map(({ id, label, href }) => (
                            <li key={id}>
                                <a href={href} className="text-white mx-2 hover:text-blue-500">{label}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}