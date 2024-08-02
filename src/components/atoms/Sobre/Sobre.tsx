import { SobreProps } from "./types"

export const Sobre = ({ id, name }: SobreProps) => {
    return (
        <li key={id} className="w-full h-full p-4 text-center hover:bg-gray-900 transition-all cursor-pointer bg-gray-800 text-white rounded">
            { name }
        </li>
    )
}