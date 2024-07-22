const MonthlyFilter = () => {
  return (
    <div className="absolute right-[2px] top-[30px] z-[100] w-40 rounded-md border border-slate-200 bg-white shadow-md">
      <p className="px-4 py-2 text-xs font-semibold text-slate-800">Sort By:</p>
      <p className="filter_dropdown">Payment Date</p>
      <p className="filter_dropdown">Payment Amount</p>
      <p className="filter_dropdown">Status</p>
    </div>
  )
}

export default MonthlyFilter
