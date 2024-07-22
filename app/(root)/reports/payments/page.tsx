import ReportControl from '@/components/ui/Reports/Control'
import MonthlyBillTable from '@/components/ui/Reports/MonthlyBillTable'
import Title from '@/components/ui/Title'

const PaymentsPage = () => {
  return (
    <div>
      <Title title="Monthly Bill Report" />
      <div className="mt-5 md:px-12">
        <ReportControl />
        <MonthlyBillTable />
      </div>
    </div>
  )
}

export default PaymentsPage
