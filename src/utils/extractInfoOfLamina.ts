import { ICharacter, IMovie, IStarship } from "../types/types";

interface UseInfoLaminaProps {
    lamina: IMovie | ICharacter | IStarship;
}

export const useInfoLamina = ({ lamina }: UseInfoLaminaProps) => {
    const { created, url } = lamina;
    const partsUrl = url.split('/');
    const category = partsUrl[partsUrl.length - 3];
    const id = partsUrl[partsUrl.length - 2];
    const displayName = 'title' in lamina ? lamina.title : lamina.name;
    return {
        id,
        category,
        name: displayName,
        created,
    }
}