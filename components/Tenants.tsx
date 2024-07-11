import Control from './ui/Tenants/Control'
import Table from './ui/Tenants/Table'
import Title from './ui/Title'

const Tenants = () => {
  return (
    <div>
      <Title title="Tenants" />

      <div className="xl:px-[5rem]">
        {/* Checkbox for deleting / Filtering / Search bar */}
        <Control />
        <Table />
      </div>
    </div>
  )
}

export default Tenants
