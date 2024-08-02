import useStore from "../../../store/store";
import StarshipsImage from "../../../assets/images/StarshipsImage.webp"
import { AlbumHeader } from "../AlbumHeader/AlbumHeader";
import { LaminasListItem } from "../../molecules";

export const NavesContainer = () => {
    const { album: { naves } } = useStore();
    const hasItems = naves.length > 0;
  return (
    <div>
        <AlbumHeader imgUrl={StarshipsImage} sectionTitle="Naves"/>
        <ul className="mt-20 grid grid-cols-3 gap-4">
            {
                hasItems ? naves.map((nave, index) => (
                    <li key={index}>
                        <LaminasListItem lamina={nave}/>
                    </li>
                )) : <li className="text-center font-bold text-blue-500">No hay naves agregados</li>
            }
        </ul>
    </div>
  )
}