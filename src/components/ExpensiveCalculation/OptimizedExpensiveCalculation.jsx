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
      <p>
        Surrounding the expensive calculation with useMemo avoids execution for
        the same value and the result stored in memory is returned directly.
      </p>
      <div className="my-6">
        <label htmlFor="targetNumber" className="font-bold">
          Fibonacci Number - {result}
          <input
            name="targetNumber"
            type="range"
            min="0"
            max="40"
            value={targetNumber}
            onChange={(e) => setTargetNumber(e.target.value)}
            className="range range-primary my-2"
            step="5"
          />
          <div className="w-full flex justify-between text-xs px-2">
            <span>0</span>
            <span>5</span>
            <span>10</span>
            <span>15</span>
            <span>20</span>
            <span>25</span>
            <span>30</span>
            <span>35</span>
            <span>40</span>
          </div>
        </label>
      </div>
    </div>
  )
}
