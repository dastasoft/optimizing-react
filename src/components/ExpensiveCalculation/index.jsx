/* eslint-disable no-underscore-dangle */
import { useContext, useState } from 'react'

import { fibonacci } from './fibonacci'
import OptimizedExpensiveCalculation from './OptimizedExpensiveCalculation'
import ExpensiveCalculation from './ExpensiveCalculation'
import { PerformanceContext } from '../../context/PerformanceContext'

export default function ExpensiveCalculations() {
  const [optimized, setOptimized] = useState(false)
  const [targetNumber, setTargetNumber] = useState(1)
  const _context = useContext(PerformanceContext)

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
        <OptimizedExpensiveCalculation
          targetNumber={targetNumber}
          setTargetNumber={setTargetNumber}
          expensiveCalculation={fibonacci}
        />
      ) : (
        <ExpensiveCalculation
          targetNumber={targetNumber}
          setTargetNumber={setTargetNumber}
          expensiveCalculation={fibonacci}
        />
      )}
    </div>
  )
}
