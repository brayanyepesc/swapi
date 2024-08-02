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
    }),
    {
        name: 'album',
        getStorage: () => localStorage,
    }
));

export default useStore;
