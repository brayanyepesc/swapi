import { SobreProps } from "./types"

export const Sobre = ({ name }: SobreProps) => {
    return (
        <div className="w-full h-full p-4 text-center hover:bg-gray-900 transition-all cursor-pointer bg-gray-800 text-white rounded">
            { name }
        </div>
    )
}