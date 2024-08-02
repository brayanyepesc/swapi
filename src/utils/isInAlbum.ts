import { ICharacter, IMovie, IStarship } from "../types/types";
import { useInfoLamina } from "./extractInfoOfLamina";

export const isInAlbum = (lamina: any, album: any) => {
    const { category, name } = useInfoLamina({ lamina });
    if (category === 'films' && 'title' in lamina) {
        const exist = album.peliculas.find((pelicula: IMovie) => pelicula.title === name);
        if (exist) return true;
    } else if (category === 'people' && 'name' in lamina) {
        const exist = album.personajes.find((personaje: ICharacter) => personaje.name === name);
        if (exist) return true;
    } else if (category === 'starships' && 'name' in lamina) {
        const exist = album.naves.find((nave: IStarship) => nave.name === name);
        if (exist) return true;
    } else {
        return false
    }
};