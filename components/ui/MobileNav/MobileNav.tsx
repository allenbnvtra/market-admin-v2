'use client'
import { useState } from 'react'
import Link from 'next/link'

import { SidebarItems } from '@/constants'
import Sublink from './Sublink'

const MobileNav = () => {
  const [openSublink, setOpenSublink] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (label: string | null) => {
    setOpenSublink(label)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setOpenSublink(null)
    setIsModalOpen(false)
  }

  // OTHER NAVBAR WITH SUBLINKS READY
  const renderSublinks = (label: any) => {
    const navItem = SidebarItems.find(items => items.title === label)
    return navItem && navItem.subLinks ? (
      <ul>
        {navItem.subLinks.map((sublink, index) => (
          <li key={index}>
            <Link onClick={() => handleCloseModal()} href={sublink.path}>
              <p className="px-4 py-5 text-xs hover:bg-slate-200">
                {sublink.title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    ) : null
  }

  return (
    <>
      <nav className="left-0 right-0 z-[800] flex h-[4.5rem] w-full items-center justify-between border-t-2 border-t-gray-100 bg-white px-3 shadow-md sm:px-28 md:hidden">
        {SidebarItems.map(({ icon: Icon, title, path }) => (
          <div key={title} className="px-1 text-slate-600">
            {path ? (
              <Link href={path} className="flex flex-col items-center">
                <Icon className="text-2xl" />
                <p className="text-xs">{title}</p>
              </Link>
            ) : (
              <div
                onClick={() => handleOpenModal(title)}
                className="flex cursor-pointer flex-col items-center"
              >
                <Icon className="text-2xl" />
                <p className="text-xs">{title}</p>
              </div>
            )}
          </div>
        ))}
      </nav>
      <Sublink
        onClose={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
        title={openSublink}
      >
        {renderSublinks(openSublink)}
      </Sublink>
    </>
  )
}

export default MobileNav
