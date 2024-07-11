const Transactions = () => {
    return (
        <div className="w-full rounded-md border border-slate-200 p-3 shadow-md">
            <div className="flex justify-between">
                <p className="text-xs text-slate-600">Recent Transactions</p>
                <p className="cursor-pointer text-xs text-slate-600 underline">
                    See all
                </p>
            </div>

            <div className="overflow-x-auto">
                <table className="mt-4 w-full">
                    <thead className="bg-slate-200 text-xs text-slate-800">
                        <tr>
                            <th className="p-2 text-center font-normal">
                                Username
                            </th>
                            <th className="p-2 text-center font-normal">
                                Processed By
                            </th>
                            <th className="p-2 text-center font-normal">
                                Type
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b text-xs text-slate-800">
                            <td className="p-1 text-center">testuser</td>
                            <td className="p-1 text-center">Admin</td>
                            <td className="flex justify-center p-1 text-center">
                                <p className="rounded-lg border border-green-800 bg-green-200 px-2 py-1 text-green-800">
                                    Deposit
                                </p>
                            </td>
                        </tr>

                        <tr className="border-b text-xs text-slate-800">
                            <td className="p-1 text-center">testuser</td>
                            <td className="p-1 text-center">Admin</td>
                            <td className="flex justify-center p-1 text-center">
                                <p className="rounded-lg border border-red-800 bg-red-200 px-2 py-1 text-red-800">
                                    Withdrawal
                                </p>
                            </td>
                        </tr>

                        <tr className="border-b text-xs text-slate-800">
                            <td className="p-1 text-center">testuser</td>
                            <td className="p-1 text-center">Admin</td>
                            <td className="flex justify-center p-1 text-center">
                                <p className="rounded-lg border border-green-800 bg-green-200 px-2 py-1 text-green-800">
                                    Deposit
                                </p>
                            </td>
                        </tr>

                        <tr className="border-b text-xs text-slate-800">
                            <td className="p-1 text-center">testuser</td>
                            <td className="p-1 text-center">Admin</td>
                            <td className="flex justify-center p-1 text-center">
                                <p className="rounded-lg border border-red-800 bg-red-200 px-2 py-1 text-red-800">
                                    Withdrawal
                                </p>
                            </td>
                        </tr>

                        <tr className="border-b text-xs text-slate-800">
                            <td className="p-2 text-center">testuser</td>
                            <td className="p-2 text-center">Admin</td>
                            <td className="flex justify-center p-2 text-center">
                                <p className="rounded-lg border border-green-800 bg-green-200 px-2 py-1 text-green-800">
                                    Deposit
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Transactions
