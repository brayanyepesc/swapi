import create from 'zustand';
import { persist } from 'zustand/middleware';
import { IStore } from '../types/types';

const useStore = create<IStore, [["zustand/persist", IStore]]>(persist(
    (set, get) => ({
        album: {
            peliculas: [],
            personajes: [],
            naves: [],
        },
        counter: 60,
        laminas: {
            peliculas: [],
            personajes: [],
            naves: [],
        },
        intervalId: null,
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
    }),
    {
        name: 'album',
        getStorage: () => localStorage,
    }
));

export default useStore;
