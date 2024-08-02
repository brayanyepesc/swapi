import { extensiveTextMock } from "../../../utils/constantes"
import { AlbumHeaderProps } from "./types"

export const AlbumHeader = ({ imgUrl, sectionTitle, description, btnTitle }: AlbumHeaderProps) => {
    const defaultBtnTitle = "Obtener más láminas"
    return (
        <section className="w-full h-96 p-4 bg-gray-200 place-content-center shadow-xl">
            <div className="grid grid-cols-2 gap-8">
                <div className="w-full h-[420px]">
                    <img src={imgUrl} alt="" className="w-full h-full rounded shadow-xl" />
                </div>
                <div className="flex flex-col justify-center space-y-8 p-4">
                    <h1 className="text-4xl font-bold text-blue-500">{sectionTitle}</h1>
                    <p className="text-gray-500">{description ? description : extensiveTextMock}</p>
                    <div className="w-full">
                        <button className="p-2 rounded bg-blue-500 text-white hover:bg-blue-700 transition-all">{btnTitle ? btnTitle : defaultBtnTitle}</button>
                    </div>
                </div>
            </div>
        </section>
    )
}