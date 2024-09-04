import { create } from "zustand";

export const useStoreTheme = create((set) => ({
    theme: "dark",
    changeTheme: () => {
        set((state) => ({
            theme: state.theme === 'light' ? 'dark' : 'light',
        }));
    },
}));

export const useStoreLenguaje = create((set) => ({
    currentLenguaje: "es",
    changeCurrentLenguaje: () => {
        set((state) => ({
            currentLenguaje: state.currentLenguaje === 'en' ? 'es' : 'en',
        }));
    },
}));

