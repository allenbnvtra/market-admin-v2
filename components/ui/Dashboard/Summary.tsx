import { SummaryBox } from '@/constants'
import { useEffect, useState } from 'react'
import Box from './Box'

const Summary = () => {
    const [showAll, setShowAll] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    const handleResize = () => {
        if (typeof window !== 'undefined') {
            setIsMobile(window.innerWidth < 400)
        }
    }

    useEffect(() => {
        handleResize() // Set initial value
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className="grid grid-cols-1 gap-2 xs:grid-cols-3">
            {SummaryBox.slice(
                0,
                showAll || !isMobile ? SummaryBox.length : 1
            ).map(({ title, icon1, percentage, count }) => (
                <div key={title}>
                    <Box
                        percentage={percentage}
                        title={title}
                        count={count}
                        icon1={icon1}
                    />
                </div>
            ))}
            {isMobile && (
                <button
                    className="mt-2 text-xs text-slate-700 underline"
                    onClick={() => setShowAll(!showAll)}
                >
                    {showAll ? 'Show Less' : 'Show More'}
                </button>
            )}
        </div>
    )
}

export default Summary
