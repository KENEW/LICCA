//import { Link } from 'react-router-dom'
//import { Logo } from './logo'

import { NavLinks } from './nav-links'


export function Header({ title }: { title?: string }) {
  return (
    <header className="relative py-6">
      <div className="buttonNo headerPanel">
        <NavLinks className="infoBox mb-6 inline-flex flex-none justify-center lg:flex" />
        
      </div>

    </header>
  )
}