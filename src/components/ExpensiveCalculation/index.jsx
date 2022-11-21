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
    <div className="w-full flex justify-center">
      <div className="card w-100 max-w-5xl bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Expensive Calculation</h2>

          <div className="form-control my-2">
            <label
              className="label cursor-pointer flex justify-start"
              htmlFor="optimized"
            >
              <span className="label-text mr-2">Optimized</span>
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                name="optimized"
                checked={optimized}
                onChange={(e) => setOptimized(e.target.checked)}
              />
            </label>
          </div>
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
      </div>
    </div>
  )
}
