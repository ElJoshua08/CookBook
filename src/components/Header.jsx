import { Link, useLocation } from 'react-router-dom'
import usePageStore from '@/stores/usePageStore'
import { useEffect } from 'react'

const Header = () => {
  const { setActualPage } = usePageStore()
  const location = useLocation()

  useEffect(() => {
    setActualPage(location.pathname)
  }, [location])

  return (
    <div className="absolute ml-2 mt-2 flex max-h-12 min-w-[calc(100%-16px)] items-center justify-between gap-5 rounded-md bg-gray-700 py-3 shadow-md shadow-gray-700/50">
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
  const links = usePageStore((state) => state.navPages)

  return (
    <ul className="flex items-center justify-between gap-2 px-2">
      {links.map((link, index) => (
        <li key={index} className="flex items-center justify-center">
          <LinkComponent link={link} />
        </li>
      ))}
    </ul>
  )
}

const LinkComponent = ({ link }) => {
  const actualPage = usePageStore((state) => state.actualPage)

  return (
    <Link to={link.href} className="flex flex-row justify-center gap-2">
      <span className="hidden">{link.icon}</span>
      <p
        className={`${actualPage === link.href ? 'bg-gray-600' : 'bg-transparent'} rounded-md px-3 py-1 text-xs font-normal text-gray-300`}
      >
        {link.name}
      </p>
    </Link>
  )
}

export default Header
