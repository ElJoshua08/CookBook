import { FaHeart, FaHome } from 'react-icons/fa'
import { create } from 'zustand'

const usePageStore = create((set) => ({
  navPages: [
    { name: 'Home', href: '/', icon: <FaHome /> },
    { name: 'Favorites', href: '/favorites', icon: <FaHeart /> },
  ],
  actualPage: null,
  setActualPage: (page) => set({ actualPage: page }),
}))

export default usePageStore