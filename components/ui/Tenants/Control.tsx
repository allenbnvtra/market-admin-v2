'use client'

import { useState } from 'react'
import { IoMdPersonAdd } from 'react-icons/io'
import { IoSearchSharp } from 'react-icons/io5'
import { MdFilterList } from 'react-icons/md'

// Components
import AddTenantModal from '../Modals/AddTenantModal'
import Filter from './Filter'

const Control = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // MODAL
  const [isAddTenantModalOpen, setIsAddTenantModalOpen] = useState(false)

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="relative">
          <input
            type="search"
            placeholder="Search..."
            className="rounded-full border border-slate-400 bg-white py-2 pl-9 pr-3 text-xs focus:outline-none sm:w-[18rem]"
          />
          <IoSearchSharp className="absolute left-4 top-[10px] text-slate-500" />
        </div>

        <div className="flex items-center gap-2">
          <IoMdPersonAdd
            title="Add New Tenant"
            className="cursor-pointer text-2xl text-slate-700"
            onClick={() => setIsAddTenantModalOpen(true)}
          />

          <div className="relative">
            <MdFilterList
              title="Filter"
              className="cursor-pointer text-2xl text-slate-700"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            />
            {isFilterOpen && <Filter />}
          </div>
        </div>
      </div>

      <AddTenantModal
        isAddTenantModalOpen={isAddTenantModalOpen}
        closeAddTenantModal={() => setIsAddTenantModalOpen(false)}
      />
    </>
  )
}

export default Control
