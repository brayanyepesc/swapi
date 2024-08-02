import { api } from "./api";

export const fetchData = async () => {
    try {

        const [peopleResponse, filmsResponse, starshipsResponse] = await Promise.all([
            api.get('people/'),
            api.get('films/'),
            api.get('starships/')
        ]);

        const films = filmsResponse.data.results;
        const characters = peopleResponse.data.results;
        const starships = starshipsResponse.data.results;

        return { films, characters, starships };

    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};
