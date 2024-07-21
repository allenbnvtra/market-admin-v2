import { IoSearchSharp } from 'react-icons/io5'
import { FaAngleLeft, FaAngleRight, FaRegListAlt } from 'react-icons/fa'

const TenantsTable = () => {
  return (
    <div className="mt-3 rounded-md border border-slate-200 bg-white p-3 shadow-md">
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

      <div className="relative z-0 mt-4 h-[24.2rem] overflow-x-auto rounded-xl border border-[#6a76894c] bg-white shadow-md">
        <div className="h-[calc(100%-3rem)] overflow-y-auto rounded-t-xl">
          <table className="w-full rounded-t-xl">
            <thead className="sticky top-0 text-sm">
              <tr>
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
    </div>
  )
}

export default TenantsTable
