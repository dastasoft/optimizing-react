import { useContext, useState } from 'react'

import { fibonacci } from '../../fibonacci'
import OptimizedFibonacci from './OptimizedFibonacci'
import UnoptimizedFibonacci from './Fibonacci'
import { PerformanceContext } from '../../context/PerformanceContext'

export default function Fibonacci() {
  const [optimized, setOptimized] = useState(true)
  const [targetNumber, setTargetNumber] = useState(1)
  const context = useContext(PerformanceContext)

  return (
    <div>
      <h3 className="text-xl font-bold">Expensive Calculation</h3>
      <label htmlFor="optimized">
        Optimized
        <div>
          <input
            name="optimized"
            type="checkbox"
            checked={optimized}
            onChange={(e) => setOptimized(e.target.checked)}
          />
        </div>
      </label>
      {optimized ? (
        <OptimizedFibonacci
          targetNumber={targetNumber}
          setTargetNumber={setTargetNumber}
          fibonacci={fibonacci}
        />
      ) : (
        <UnoptimizedFibonacci
          targetNumber={targetNumber}
          setTargetNumber={setTargetNumber}
          fibonacci={fibonacci}
        />
      )}
    </div>
  )
}
