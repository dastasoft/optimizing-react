export default function ExpensiveCalculation({
  targetNumber,
  setTargetNumber,
  expensiveCalculation,
}) {
  const result = expensiveCalculation(targetNumber)

  return (
    <div>
      <p>
        As this component is connected to the the context is rerendered in an
        infinite loop due to the changes performed in the{' '}
        <b>Performance Gauge</b> . Due to the rerenders the expensive function
        is triggered on every render, causing visible performance slowness.
      </p>
      <div className="my-6">
        <label htmlFor="targetNumber" className="font-bold">
          Fibonacci Number
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
