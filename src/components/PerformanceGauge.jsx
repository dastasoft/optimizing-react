/* eslint-disable react/no-array-index-key */
export default function PerformanceGauge({ numBlocks }) {
  return (
    <div>
      <p className="font-semibold sm:text-md mb-2">Performance Gauge</p>
      <div className="flex items-center">
        {[...Array(numBlocks)].map((_item, index) => (
          <div
            key={index}
            className="sm:w-8 sm:h-6 w-5 h-3 border- bg-primary border-2 border-violet-900"
          />
        ))}
      </div>
    </div>
  )
}
