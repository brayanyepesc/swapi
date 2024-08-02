import { extensiveTextMock } from "../../../utils/constantes"
import { HeaderProps } from "./types"

export const Header = ({ headerTitle, headerDescription }: HeaderProps) => {
    return (
        <header className="w-full p-5 shadow-lg rounded">
            <h1 className="text-xl text-center font-bold text-gray-500 mb-2">{headerTitle}</h1>
            <p className="text-sm">{headerDescription ? headerDescription : extensiveTextMock}</p>
        </header>
    )
}