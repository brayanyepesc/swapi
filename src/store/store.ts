import create from 'zustand';
import { persist } from 'zustand/middleware';
import { IStore } from '../types/types';

const useStore = create<IStore, [["zustand/persist", IStore]]>(persist(
    (set) => ({
        album: {
            peliculas: [],
            personajes: [],
            naves: [],
        },
        counter: 0,
        laminas: {
            peliculas: [],
            personajes: [],
            naves: [],
        }
    }),
    {
        name: 'album',
        getStorage: () => localStorage,
    }
));

export default useStore;
