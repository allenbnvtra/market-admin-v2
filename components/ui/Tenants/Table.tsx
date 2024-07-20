'use client'

import { useState } from 'react'
import { FaAngleLeft, FaAngleRight, FaEdit } from 'react-icons/fa'
import { MdDelete, MdListAlt } from 'react-icons/md'

// Components
import EditModal from '../Modals/EditModal'
import DeleteModal from '../Modals/DeleteModal'

const Table = () => {
  const [isEditTenantModalOpen, setIsEditTenantModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  return (
    <>
      <div className="z-0 my-4 h-[38.2rem] overflow-x-auto rounded-xl border border-slate-300 shadow-md">
        <div className="relative h-full overflow-y-auto">
          <table className="w-full">
            <thead className="sticky top-0 bg-white text-sm">
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
              <tr className="border-b">
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
                  <MdListAlt
                    title="View Bills"
                    className="cursor-pointer text-blue-700"
                  />
                  <FaEdit
                    title="Edit"
                    className="cursor-pointer text-green-600"
                    onClick={() => setIsEditTenantModalOpen(true)}
                  />
                  <MdDelete
                    title="Delete"
                    className="cursor-pointer text-red-600"
                    onClick={() => setIsDeleteModalOpen(true)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="absolute bottom-0 z-0 w-full bg-gray-50">
            <div>
              <div>
                <div className="flex w-full items-center gap-3 border-t px-5 py-4 text-xs text-slate-500">
                  <p>1-10 of 210</p>
                  <div className="flex gap-3 text-sm">
                    <p className="cursor-pointer text-slate-400">
                      <FaAngleLeft />
                    </p>
                    <p className="cursor-pointer text-slate-900">
                      <FaAngleRight />
                    </p>
                  </div>
                </div>
              </div>
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
