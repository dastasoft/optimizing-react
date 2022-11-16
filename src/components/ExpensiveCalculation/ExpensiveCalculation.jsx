export default function ExpensiveCalculation({
  targetNumber,
  setTargetNumber,
  expensiveCalculation,
}) {
  const result = expensiveCalculation(targetNumber)

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
        As this component is connected to the the context is rerendered in an
        infinite loop due to the changes performed in the{' '}
        <b>Performance Gauge</b> . Due to the rerenders the expensive function
        is triggered on every render, causing visible performance slowness.
      </p>
    </div>
  )
}
