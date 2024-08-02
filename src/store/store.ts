import create from 'zustand';
import { persist } from 'zustand/middleware';
import { IStore } from '../types/types';

const useStore = create<IStore, [["zustand/persist", IStore]]>(persist(
    (set) => ({
        album: {
            movies: [],
            characters: [],
            starships: [],
        },
        counter: 0,
    }),
    {
        name: 'album',
        getStorage: () => localStorage,
    }
));

export default useStore;
