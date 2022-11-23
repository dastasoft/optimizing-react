import DogImageFetch from '../components/DogImageFetch'
import ExpensiveCalculations from '../components/ExpensiveCalculation'

export default function UseMemo() {
  return (
    <div className="flex flex-col gap-8 justify-center lg:flex-row lg:max-h-screen">
      <ExpensiveCalculations />
      <DogImageFetch />
    </div>
  )
}
