import { ILaminasMock } from "../types/types";
import { fetchData } from "./fetchData";
import { generateConfiguration } from "./generateConfiguration";

export const generarLaminas = async() => {
    const { films, characters, starships } = await fetchData();
    const configuration = generateConfiguration();
    const laminasMock: ILaminasMock = {
        peliculas: [],
        personajes: [],
        naves: []
    }
    if (configuration) {
        laminasMock.peliculas = [peliculas[Math.floor(Math.random() * peliculas.length)]];
        laminasMock.personajes = Array(3).fill(null).map(() => personajes[Math.floor(Math.random() * personajes.length)]);
        laminasMock.naves = [naves[Math.floor(Math.random() * naves.length)]];
    } else {
        laminasMock.personajes = Array(3).fill(null).map(() => personajes[Math.floor(Math.random() * personajes.length)]);
        laminasMock.naves = Array(2).fill(null).map(() => naves[Math.floor(Math.random() * naves.length)]);
    }
}