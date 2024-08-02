import useStore from "../../../store/store";
import StarshipsImage from "../../../assets/images/StarshipsImage.webp"
import { AlbumHeader } from "../AlbumHeader/AlbumHeader";
import { LaminasListItem } from "../../molecules";

export const NavesContainer = () => {
    const { album: { naves } } = useStore();
  return (
    <div>
        <AlbumHeader imgUrl={StarshipsImage} sectionTitle="Naves"/>
        <ul className="mt-20 grid grid-cols-3 gap-4">
            {
                naves.map((nave, index) => (
                    <li key={index}>
                        <LaminasListItem lamina={nave}/>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}