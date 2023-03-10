import { NavLink } from 'react-router-dom'

const NAV_LINKS = [
  { name: 'HOME', to: '/' },
  { name: 'SNEAKPIC', to: '/sneakpic' },
  { name: 'ROADMAP', to: '/roadmap' },
  { name: "FAQ", to: '/faq' },
  { name: 'WL', to: '/wlcheck' },
]

export function NavLinks({ className }: { className?: string }) {
  return (
    <ul className={className}>
      {NAV_LINKS.map((link) => (
        <li key={link.name} className="navItem">
          <NavLink
            to={link.to}
            className={({ isActive }) =>
              isActive ? 'currentHeaderBorder text-white headerFont' : 'text-white hover:border-b headerFont'
            }
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
