import useStore from "../../../store/store";
import PeliculasImage from "../../../assets/images/PopcornImage.webp"
import PersonajesImage from "../../../assets/images/CharactersImage.webp"
import NavesImage from "../../../assets/images/StarshipsImage.webp"

export const AlbumContentItems = () => {
    const { album: { peliculas, personajes, naves } } = useStore();
    const peliculasHasItems = peliculas.length > 0;
    const personajesHasItems = personajes.length > 0;
    const navesHasItems = naves.length > 0;
    return [
        {
            id: 1,
            imgUrl: PeliculasImage,
            sectionTitle: "Películas",
            contentHasItems: peliculasHasItems,
            content: peliculas
        },
        {
            id: 2,
            imgUrl: PersonajesImage,
            sectionTitle: "Personajes",
            contentHasItems: personajesHasItems,
            content: personajes
        },
        {
            id: 3,
            imgUrl: NavesImage,
            sectionTitle: "Naves",
            contentHasItems: navesHasItems,
            content: naves  
        }
    ]
}