export default function Fibonacci({
  targetNumber,
  setTargetNumber,
  fibonacci,
}) {
  const fibonacciNumber = fibonacci(targetNumber)

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

        <span>Result: {fibonacciNumber}</span>
      </div>
    </div>
  )
}
