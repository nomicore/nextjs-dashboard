'use client';

import CarLogo from '@/app/ui/car-logo';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about'},
  { name: 'Services', href: '/services' },
  { name: 'Login', href: '/login' },
];

export default function NavBar() {
  const pathname = usePathname();
    return (
<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <CarLogo />
  </Link>
  <div className="flex md:order-2">
    <div className="relative md:block w-full">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <MagnifyingGlassIcon className="w-4 h-4 text-gray-500 dark:text-gray-400"></MagnifyingGlassIcon>
        <span className="sr-only">Search icon</span>
      </div>
      <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."></input>
    </div>
  </div>
    <div className="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-search">
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {links.map((link) => {
          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className={clsx("block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",
                  {
                    'text-blue-700 bg-blue-700/10 md:bg-transparent md:text-blue-700 dark:text-blue-500': pathname === link.href,
                  }
                )}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  </div>
</nav>
    );
}