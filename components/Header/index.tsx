import React from 'react';
import HeaderLink from './HeaderLink';
import HeaderLogo from './HeaderLogo';
import Link from 'next/link';

const Header: React.FC = () => {
  const links = [
    { href: '/', title: 'Home' },
    { href: '/about', title: 'About' },
    { href: '/pastrewind', title: 'Past Rewind' },
    { href: '/contact', title: 'contact' },
  ];
  return (
    <header className='flex items-center justify-between p-4 bg-gray-800 text-white'>
      <Link
        href='/'
        className='flex items-center'
      >
        <HeaderLogo />
      </Link>
      <nav>
        <ul className='flex space-x-4'>
          {links.map((link) => (
            <li key={link.href}>
              <HeaderLink
                href={link.href}
                title={link.title}
              />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
