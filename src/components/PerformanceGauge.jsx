export default function PerformanceGauge({ numBlocks }) {
  return (
    <div className="flex">
      <div className="flex flex-col items-center">
        {[...Array(numBlocks)].map((_item, index) => (
          <div
            key={index}
            className="w-10 h-6 border- bg-green-700 border-2 border-green-900"
          />
        ))}
      </div>
      <p
        style={{ writingMode: 'vertical-lr' }}
        className="font-bold text-xl ml-2"
      >
        Performance Gauge
      </p>
    </div>
  )
}
