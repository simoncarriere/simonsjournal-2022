import { useContext } from "react";
import Link from 'next/link'

import Searchbar from './Searchbar'
import { ContactContext } from "context/ContactContext";

function Logo() {
  return (
    <Link href="/" >
        <img src='/images/logo.png' className="flex m-auto hover:cursor-pointer"/>
    </Link>
  )
}

export function Header() {

  const {sidebarOpen, toggleSidebar} = useContext(ContactContext)

  return (
    <header className="fixed flex justify-between w-full p-8 ">
      <Logo />
      <Searchbar />
      <button className="btn-icon-primary" onClick={() => toggleSidebar()}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
        </svg>
      </button>
    </header>
  )
}
