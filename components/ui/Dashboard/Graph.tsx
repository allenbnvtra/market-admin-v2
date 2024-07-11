'use client'
import { Doughnut } from 'react-chartjs-2'
import 'chart.js/auto'

const Graph = () => {
    const data = {
        labels: ['Paid Bills', 'Unpaid Bills'],
        datasets: [
            {
                label: 'Bills',
                data: [300, 50],
                backgroundColor: ['rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
                hoverOffset: 4
            }
        ]
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false
    }

    return (
        <div className="mt-3 flex h-[20rem] max-h-[20rem] flex-col justify-center rounded-sm border border-slate-200 bg-white p-3 shadow-lg">
            <p className="pt-1 text-sm font-medium text-slate-600">
                Monthly Billing
            </p>
            <div className="relative h-full p-4">
                <Doughnut data={data} options={options} />
            </div>
        </div>
    )
}

export default Graph
