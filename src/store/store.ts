import create from 'zustand';
import { persist } from 'zustand/middleware';
import { ICharacter, IMovie, IStarship, IStore } from '../types/types';
import { useInfoLamina } from '../utils/extractInfoOfLamina';

const useStore = create<IStore, [["zustand/persist", IStore]]>(persist(
    (set, get) => ({
        album: {
            peliculas: [] as IMovie[],
            personajes: [] as ICharacter[],
            naves: [] as IStarship[],
        },
        counter: 60,
        laminas: {
            peliculas: [] as IMovie[],
            personajes: [] as ICharacter[],
            naves: [] as IStarship[],
        },
        intervalId: null as number | null,
        startCounter: () => {
            const { intervalId } = get();
            if (intervalId) return;
            const newIntervalId = window.setInterval(() => {
                set(state => {
                    const newCounter = state.counter - 1;
                    if (newCounter <= 0) {
                        clearInterval(newIntervalId);
                        return { counter: 60, intervalId: null };
                    }
                    return { counter: newCounter };
                });
            }, 1000);
            set({ intervalId: newIntervalId });
        },
        aggLaminas: (newLaminas) => {
            set({ laminas: newLaminas });
        },
        resetLaminas: () => {
            set({ laminas: { peliculas: [], personajes: [], naves: [] } });
        },
        aggLaminaAlAlbum: (lamina: IMovie | ICharacter | IStarship) => {
            const { category } = useInfoLamina({ lamina });
            const { album } = get();

            if (category === 'films' && 'title' in lamina) {
                const exist = album.peliculas.find(pelicula => pelicula.title === lamina.title);
                if (exist) return;
                set({
                    album: {
                        ...album,
                        peliculas: [...album.peliculas, lamina as IMovie],
                    },
                });
            } else if (category === 'people' && 'name' in lamina) {
                const exist = album.personajes.find(personaje => personaje.name === lamina.name);
                if (exist) return;
                set({
                    album: {
                        ...album,
                        personajes: [...album.personajes, lamina as ICharacter],
                    },
                });
            } else if (category === 'starships' && 'name' in lamina) {
                const exist = album.naves.find(nave => nave.name === lamina.name);
                if (exist) return;
                set({
                    album: {
                        ...album,
                        naves: [...album.naves, lamina as IStarship],
                    },
                });
            }
        }
    }),
    {
        name: 'album',
        getStorage: () => localStorage,
    }
));

export default useStore;
