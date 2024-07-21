import Title from '@/components/ui/Title'
import Image from 'next/image'
import React from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { GoDotFill } from 'react-icons/go'
import { IoIosSearch, IoMdMore } from 'react-icons/io'
import { IoSearchSharp } from 'react-icons/io5'

const InboxPage = () => {
  return (
    <div className="flex h-[39rem] rounded-md border bg-white shadow-md">
      <div className="w-[18rem] border-r pr-1 shadow-md">
        <div className="flex flex-col p-2">
          <div className="mb-3 flex w-full items-center justify-between">
            <Title title="Inbox" />
            <FaRegEdit
              className="text-md cursor-pointer text-indigo-600"
              title="New Message"
            />
          </div>

          <div className="relative mb-5">
            <input
              type="search"
              placeholder="Search Name..."
              className="rounded-md bg-slate-200 py-2 pl-9 pr-3 text-xs text-slate-700 focus:outline-none sm:w-full"
            />
            <IoSearchSharp className="absolute left-4 top-[8px] text-slate-500" />
          </div>

          {/* MESSAGE */}
          <div className="mb-1 flex h-[4rem] cursor-pointer items-center justify-between rounded-md bg-indigo-100 p-2">
            <div className="flex items-center">
              <div className="h-11 w-11 overflow-hidden rounded-full">
                <Image
                  src="/images/cj.jpg"
                  height={45}
                  width={45}
                  alt="profile"
                  className="object-cover"
                />
              </div>
              <div className="ml-1 flex h-full items-center justify-between gap-2 py-1 text-xs font-light">
                <div className="flex flex-col gap-1">
                  <p className="max-w-[140px] overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-slate-800">
                    Elon Musk
                  </p>
                  <p className="max-w-[170px] overflow-hidden text-ellipsis whitespace-nowrap text-slate-700">
                    You: Hey bro are you free tonight?
                  </p>
                </div>
                <p className="text-xs"> · 1h</p>
              </div>
            </div>
          </div>

          {/* MESSAGE */}
          <div className="hover:bg-indigo-45 mb-1 flex h-[4rem] cursor-pointer items-center justify-between rounded-md p-2 hover:bg-indigo-50">
            <div className="flex items-center">
              <div className="h-11 w-11 overflow-hidden rounded-full">
                <Image
                  src="/images/profile.jpg"
                  height={45}
                  width={45}
                  alt="profile"
                  className="object-cover"
                />
              </div>
              <div className="ml-1 flex h-full items-center justify-between gap-2 py-1 text-xs font-light">
                <div className="flex flex-col gap-1">
                  <p className="max-w-[135px] overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-slate-800">
                    Cardo DC. Dalisay
                  </p>
                  <p className="max-w-[135px] overflow-hidden text-ellipsis whitespace-nowrap font-medium text-indigo-700">
                    Kamusta ka allen?
                  </p>
                </div>
                <p className="text-xs font-medium text-indigo-700"> · 1h</p>
              </div>
            </div>

            <GoDotFill className="text-indigo-700" />
          </div>
        </div>
      </div>

      {/* RIGHT PART */}
      <div className="w-full">
        <div className="flex items-center justify-between border-b p-2 shadow-sm">
          <div className="flex">
            <div className="h-8 w-8 overflow-hidden rounded-full">
              <Image
                src="/images/cj.jpg"
                height={35}
                width={35}
                alt="profile"
                className="object-cover"
              />
            </div>
            <div className="ml-2">
              <p className="text-sm font-light text-slate-800">Elon Musk</p>

              <p className="flex items-center text-xs font-light text-slate-600">
                <GoDotFill className="text-green-700" />
                Avtive Now
              </p>
            </div>
          </div>

          <div className="flex gap-1 text-xl">
            <IoIosSearch className="cursor-pointer" />
            <IoMdMore className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InboxPage
