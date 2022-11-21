import DogImageFetch from '../components/DogImageFetch'
import ExpensiveCalculations from '../components/ExpensiveCalculation'

export default function UseMemo() {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-8 justify-center">
      <ExpensiveCalculations />
      <DogImageFetch />
    </div>
  )
}
