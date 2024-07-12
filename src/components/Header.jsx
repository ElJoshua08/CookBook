import { FaHeart, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="absolute ml-5 mt-5 flex max-h-16 min-w-[calc(100%-40px)] items-center justify-between gap-5 rounded-md bg-zinc-700 py-3 shadow-md shadow-zinc-700/50">
      {/* logo and title */}
      <div className="flex h-full items-center justify-start gap-2 pl-2">
        <img
          src="/logo/512.png"
          alt="logo"
          className="aspect-square w-6 rounded-full"
        />
        <h1 className="font-lobster text-lg font-bold text-white">Cookbook</h1>
      </div>

      {/* Navigation */}
      <Nav />
    </div>
  )
}

const Nav = () => {
  const links = [
    { name: 'Home', href: '/', icon: <FaHome /> },
    { name: 'Favorites', href: '/favorites', icon: <FaHeart /> },
  ]

  console.log(links.map(link => link.name))

  return (
    <ul className="flex items-center justify-between gap-5">
      {/* {links.map((link, index) => (
        <li key={index} className="flex items-center gap-2">
        </li>
      ))} */}
      <Link to="/">Home</Link>
    </ul>
  )
}

export default Header
