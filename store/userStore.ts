import { create } from 'zustand'

type User = {
  id: string 
  email: string
  full_name: string
  avatar_url?: string
}

type Store = {
  user: User | null
  setUser: (user: User) => void
  clearUser: () => void
}

export const useUserStore = create<Store>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}))
