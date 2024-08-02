import { api } from "./api";

export const fetchData = async () => {
    try {

        const [personajesResponse, peliculasResponse, navesResponse] = await Promise.all([
            api.get('people/'),
            api.get('films/'),
            api.get('starships/')
        ]);

        const peliculas = peliculasResponse.data.results;
        const personajes = personajesResponse.data.results;
        const naves = navesResponse.data.results;

        return { peliculas, personajes, naves };

    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};
