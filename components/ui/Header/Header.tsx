import { IoMdNotificationsOutline } from 'react-icons/io'
import { IoMdMail } from 'react-icons/io'
import User from './User'

const Header = () => {
  return (
    <div className="sticky top-0 z-[1000] flex w-full items-center justify-end bg-[#1c3153] px-5 py-3 text-white xs:justify-between">
      <p className="text-md hidden font-medium xs:block">Admin Panel</p>

      <div className="flex items-center justify-end gap-3 text-2xl">
        <IoMdMail />
        <IoMdNotificationsOutline />
        <User />
      </div>
    </div>
  )
}

export default Header
