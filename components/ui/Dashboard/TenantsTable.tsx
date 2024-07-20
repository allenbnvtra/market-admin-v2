import { IoSearchSharp } from 'react-icons/io5'
import { FaAngleLeft, FaAngleRight, FaEdit } from 'react-icons/fa'
import { MdDelete, MdListAlt } from 'react-icons/md'

const TenantsTable = () => {
  return (
    <div className="mt-3 w-full rounded-md border border-slate-200 p-3 shadow-md">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-600">Tenants</p>
        <div className="relative">
          <input
            type="search"
            placeholder="Search..."
            className="rounded-full border border-slate-300 bg-white py-2 pl-9 pr-3 text-xs focus:outline-none sm:w-[18rem]"
          />
          <IoSearchSharp className="absolute left-4 top-[10px] text-slate-500" />
        </div>
      </div>

      <div className="relative mt-5 h-[380px] max-h-[380px] w-full border border-slate-100">
        <div className="overflow-y-auto">
          <table className="w-full table-fixed">
            <colgroup className="hidden sm:block">
              <col width="15%" />
              <col width="25%" />
              <col width="25%" />
              <col width="20%" />
              <col width="15%" />
            </colgroup>
            <thead className="bg-slate-100 text-xs">
              <tr className="border-b-2">
                <th className="w-[5rem] py-3 font-light text-slate-800">ID</th>
                <th className="w-[10rem] py-3 font-light text-slate-800">
                  Name
                </th>
                <th className="w-[10rem] py-3 font-light text-slate-800">
                  Stall Number
                </th>
                <th className="w-[10rem] py-3 font-light text-slate-800">
                  Email
                </th>
                <th className="w-[5rem] py-3 font-light text-slate-800">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-xs text-slate-800">
              <tr className="border-b">
                <td className="overflow-hidden text-ellipsis whitespace-nowrap py-3 text-center sm:px-2">
                  5842309522975923dasdsdklwqkdmlqkwmd
                </td>
                <td className="overflow-hidden text-ellipsis whitespace-nowrap py-3 text-center sm:px-2">
                  Allen V. Buenaventura
                </td>
                <td className="overflow-hidden text-ellipsis whitespace-nowrap py-3 text-center sm:px-2">
                  Hen 9021
                </td>
                <td className="overflow-hidden text-ellipsis whitespace-nowrap py-3 text-center sm:px-2">
                  allenbnvtra.11
                </td>
                <td className="flex items-center justify-center gap-2 py-3 text-lg md:text-[15px]">
                  <MdListAlt
                    title="View"
                    className="cursor-pointer text-blue-700"
                  />
                  <FaEdit
                    title="Edit"
                    className="cursor-pointer text-green-600"
                  />
                  <MdDelete
                    title="Delete"
                    className="cursor-pointer text-red-600"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="absolute bottom-0 left-0 w-full border bg-white">
          <div className="flex w-full items-center gap-3 px-2 py-2 text-xs text-slate-500">
            <p>1-10 of 210</p>
            <span className="flex gap-3 text-sm">
              <p className="cursor-pointer text-slate-400">
                <FaAngleLeft />
              </p>
              <p className="cursor-pointer text-slate-900">
                <FaAngleRight />
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TenantsTable
