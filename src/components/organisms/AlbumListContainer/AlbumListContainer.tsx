import { LaminasListItem } from "../../molecules";
import { AlbumHeader } from "../AlbumHeader/AlbumHeader";

interface LaminasListContainerProps {
    imgUrl: string;
    sectionTitle: string;
    contentHasItems: boolean;
    content: any[];
}

export const AlbumListContainer = ({ imgUrl, sectionTitle, contentHasItems, content }: LaminasListContainerProps) => {
    return (
        <div>
            <AlbumHeader imgUrl={imgUrl} sectionTitle={sectionTitle} />
            <ul className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    contentHasItems ? content.map((lamina, index) => (
                        <li key={index}>
                            <LaminasListItem lamina={lamina} />
                        </li>
                    )) : <li className="text-center font-bold text-blue-500">No hay {sectionTitle.toLowerCase()} agregados</li>
                }
            </ul>
        </div>
    )
}