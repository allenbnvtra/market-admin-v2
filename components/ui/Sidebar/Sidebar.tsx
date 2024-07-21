import Image from 'next/image'
import Link from 'next/link'
import NavItems from './NavItems'
import Profile from './Profile'

const Sidebar = () => {
  return (
    <div className="sticky left-0 top-0 hidden !h-screen w-[17rem] bg-slate-50 md:block">
      <nav className="flex h-full flex-col items-center justify-between border px-2 py-5 shadow-lg">
        <div className="w-full">
          <Link
            href={'/dashboard'}
            className="flex flex-col items-center justify-center"
          >
            <Image src="/images/si-logo.png" height={70} width={70} alt="" />
            <span className="mt-2 rounded-xl bg-indigo-600 px-4 py-2 text-center text-sm font-semibold text-white">
              San Ildefonso, Bulacan
            </span>
          </Link>

          <NavItems />
        </div>

        <Profile />
      </nav>
    </div>
  )
}

export default Sidebar
