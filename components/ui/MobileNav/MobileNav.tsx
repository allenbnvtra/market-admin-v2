import { SidebarItems } from '@/constants'
import Link from 'next/link'

const MobileNav = () => {
  return (
    <nav className="left-0 right-0 z-[800] flex h-[4.5rem] w-full items-center justify-between border-t-2 border-t-gray-100 bg-white px-6 shadow-md md:hidden">
      {SidebarItems.map(({ icon: Icon, title, path }) => (
        <div key={title} className="px-1 text-slate-600">
          {path ? (
            <Link href={path} className="flex flex-col items-center">
              <Icon className="text-2xl" />
              <p className="text-xs">{title}</p>
            </Link>
          ) : (
            <div className="flex flex-col items-center">
              <Icon className="text-2xl" />
              <p className="text-xs">{title}</p>
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}

export default MobileNav
