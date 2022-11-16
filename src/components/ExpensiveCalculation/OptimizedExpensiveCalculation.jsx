import { useMemo } from 'react'

export default function OptimizedExpensiveCalculation({
  targetNumber,
  setTargetNumber,
  expensiveCalculation,
}) {
  const result = useMemo(
    () => expensiveCalculation(targetNumber),
    [targetNumber]
  )

  return (
    <div>
      <div className="mb-2">
        <label htmlFor="targetNumber">
          Fibonacci number
          <div>
            <input
              name="targetNumber"
              type="number"
              value={targetNumber}
              onChange={(e) => setTargetNumber(e.target.value)}
              min={0}
              max={35}
            />
          </div>
        </label>

        <span>Result: {result}</span>
      </div>
      <p>
        Surrounding the expensive calculation with useMemo the execution for the
        same value is avoided and directly returned the result saved in memory.
      </p>
    </div>
  )
}
