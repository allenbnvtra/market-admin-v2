'use client'

import { useState } from 'react'
import {
  FaAngleLeft,
  FaAngleRight,
  FaRegEdit,
  FaRegListAlt
} from 'react-icons/fa'

// Components
import EditModal from '../Modals/EditModal'
import DeleteModal from '../Modals/DeleteModal'

const MonthlyBillTable = () => {
  const [isEditTenantModalOpen, setIsEditTenantModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  return (
    <>
      <div className="relative z-0 mt-4 h-[42rem] overflow-x-auto rounded-xl border border-[#6a76894c] bg-white shadow-md md:h-[34.2rem]">
        <div className="h-[calc(100%-3rem)] overflow-y-auto rounded-t-xl">
          <table className="w-full rounded-t-xl">
            <thead className="sticky top-0 text-sm">
              <tr>
                <th className="report_t_head w-[15%]">Receipt No.</th>
                <th className="report_t_head w-[20%]">Payment Date</th>
                <th className="report_t_head w-[15%] whitespace-nowrap">
                  Payment Amount
                </th>
                <th className="report_t_head w-[20%]">Tenant Username</th>
                <th className="report_t_head w-[15%]">Mode of payment</th>
                <th className="report_t_head w-[10%]">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="cursor-pointer border-b border-b-slate-300 hover:bg-slate-100">
                <td className="report_t_column">1921686732</td>
                <td className="report_t_column">January 20, 2024</td>
                <td className="report_t_column">P 832.99</td>
                <td className="report_t_column">allenbnvtra</td>
                <td className="report_t_column">Cash</td>
                <td className="report_t_column">
                  <div className="btn_success">Success</div>
                </td>
              </tr>
              {/* Additional rows as needed */}
              <tr className="cursor-pointer border-b border-b-slate-300 hover:bg-slate-100">
                <td className="report_t_column">1921686732</td>
                <td className="report_t_column">January 20, 2024</td>
                <td className="report_t_column">P 832.99</td>
                <td className="report_t_column">allenbnvtra</td>
                <td className="report_t_column">Cash</td>
                <td className="report_t_column">
                  <div className="btn_success">Success</div>
                </td>
              </tr>
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

export default MonthlyBillTable
