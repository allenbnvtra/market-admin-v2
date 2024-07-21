'use client'

import { useState } from 'react'
import {
  FaAngleLeft,
  FaAngleRight,
  FaRegEdit,
  FaRegListAlt
} from 'react-icons/fa'
import { FiArchive } from 'react-icons/fi'

// Components
import EditModal from '../Modals/EditModal'
import DeleteModal from '../Modals/DeleteModal'

const Table = () => {
  const [isEditTenantModalOpen, setIsEditTenantModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  return (
    <>
      <div className="relative z-0 mt-4 h-[34.2rem] overflow-x-auto rounded-xl border border-[#6a76894c] bg-white shadow-md">
        <div className="h-[calc(100%-4rem)] overflow-y-auto rounded-t-xl">
          <table className="w-full rounded-t-xl">
            <thead className="sticky top-0 text-sm">
              <tr>
                <th className="t_head w-[5%]">
                  <input
                    className="h-4 w-4 cursor-pointer"
                    type="checkbox"
                    name=""
                    id="delete"
                  />
                </th>
                <th className="t_head w-[15%]">ID</th>
                <th className="t_head w-[20%]">Name</th>
                <th className="t_head w-[15%] whitespace-nowrap">Stall No.</th>
                <th className="t_head w-[20%]">Username</th>
                <th className="t_head w-[15%]">Balance</th>
                <th className="t_head w-[10%]">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-b-slate-300">
                <td className="t_column text-center">
                  <input
                    className="h-4 w-4 cursor-pointer"
                    type="checkbox"
                    name=""
                    id="delete"
                  />
                </td>
                <td className="t_column">
                  7892309182303489623490698731dasdaiuhi
                </td>
                <td className="t_column">Allen V. Buenaventura</td>
                <td className="t_column">hen101</td>
                <td className="t_column">allenbnvtra</td>
                <td className="t_column">P 20,832.99</td>
                <td className="flex items-center justify-center gap-2 py-3 text-lg md:text-[16px]">
                  <FaRegListAlt
                    title="View Bills"
                    className="cursor-pointer text-blue-700"
                  />
                  <FaRegEdit
                    title="Edit"
                    className="cursor-pointer text-green-600"
                    onClick={() => setIsEditTenantModalOpen(true)}
                  />
                  <FiArchive
                    title="Archive"
                    className="cursor-pointer text-red-600"
                    onClick={() => setIsDeleteModalOpen(true)}
                  />
                </td>
              </tr>
              {/* Additional rows as needed */}
            </tbody>
          </table>
        </div>
        <div className="absolute bottom-0 left-0 w-full rounded-b-xl bg-[#344d7aed] text-white">
          <div className="flex w-full items-center gap-3 border-t px-5 py-4 text-xs">
            <p>1-10 of 210</p>
            <div className="flex gap-3 text-sm">
              <p className="cursor-pointer">
                <FaAngleLeft />
              </p>
              <p className="cursor-pointer">
                <FaAngleRight />
              </p>
            </div>
          </div>
        </div>
      </div>

      <EditModal
        isEditTenantModalOpen={isEditTenantModalOpen}
        closeEditTenantModal={() => setIsEditTenantModalOpen(false)}
      />
      <DeleteModal
        isDeleteModalOpen={isDeleteModalOpen}
        closeDeleteModal={() => setIsDeleteModalOpen(false)}
      />
    </>
  )
}

export default Table
