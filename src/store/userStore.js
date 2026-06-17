import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      jwt: null,
      hydrated: false,

      setAuth: (user, jwt) => set({ user, jwt }),

      logout: () => {
        set({ user: null, jwt: null });
      },

      setHydrated: () => set({ hydrated: true }),
    }),
    {
      name: "aedifico-auth",

      onRehydrateStorage: () => (state) => {
        state?.setHydrated?.();
      },
    },
  ),
);
