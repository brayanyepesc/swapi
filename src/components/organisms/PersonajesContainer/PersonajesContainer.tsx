import useStore from "../../../store/store";
import CharactersImage from "../../../assets/images/CharactersImage.webp"
import { AlbumHeader } from "../AlbumHeader/AlbumHeader";
import { LaminasListItem } from "../../molecules";

export const PersonajesContainer = () => {
    const { album: { personajes } } = useStore();
  return (
    <div>
        <AlbumHeader imgUrl={CharactersImage} sectionTitle="Personajes"/>
        <ul className="mt-20 grid grid-cols-3 gap-4">
            {
                personajes.map((personaje, index) => (
                    <li key={index}>
                        <LaminasListItem lamina={personaje}/>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}