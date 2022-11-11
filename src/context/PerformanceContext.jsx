import { createContext, useEffect, useRef, useState } from 'react'
import PerformanceGauge from '../components/PerformanceGauge'

const MAX_BLOCKS = 35
const PACE = 1

export const PerformanceContext = createContext({})

export function PerformanceContextProvider({ children }) {
  const [numBlocks, setNumBlocks] = useState(1)
  const multiplier = useRef(1)

  useEffect(() => {
    if (numBlocks === MAX_BLOCKS) multiplier.current = -1
    else if (numBlocks === 1) multiplier.current = 1

    const timer = setInterval(() => {
      setNumBlocks(numBlocks + PACE * multiplier.current)
    }, 1000 / 60)
    return () => clearInterval(timer)
  })

  return (
    <PerformanceContext.Provider value={{ numBlocks }}>
      <div className="flex w-full h-full">
        <div className="flex-1 p-4">{children}</div>
        <div className="border-l-2 p-4">
          <PerformanceGauge numBlocks={numBlocks} />
        </div>
      </div>
    </PerformanceContext.Provider>
  )
}
