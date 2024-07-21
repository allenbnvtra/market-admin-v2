'use client'
import Title from './ui/Title'
import Transactions from './ui/Dashboard/Transactions'
import TenantsTable from './ui/Dashboard/TenantsTable'
import Graph from './ui/Dashboard/Graph'
import Summary from './ui/Dashboard/Summary'

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-3">
      <Title title="Dashboard" />

      <div className="grid grid-cols-1 gap-2 lg:grid-cols-4">
        <div className="lg:col-span-3">
          <Summary />
          <TenantsTable />
        </div>

        <div className="lg:col-span-1">
          <Transactions />
          <Graph />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
