import useStore from "../../../store/store";
import PopcornImage from "../../../assets/images/PopcornImage.webp"
import { AlbumHeader } from "../AlbumHeader/AlbumHeader";
import { LaminasListItem } from "../../molecules";

export const PelículasContainer = () => {
    const { album: { peliculas } } = useStore();
  return (
    <div>
        <AlbumHeader imgUrl={PopcornImage} sectionTitle="Películas"/>
        <ul className="mt-20 grid grid-cols-3 gap-4">
            {
                peliculas.map((pelicula, index) => (
                    <li key={index}>
                        <LaminasListItem lamina={pelicula}/>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}