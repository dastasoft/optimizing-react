import { useState } from 'react'
import OptimizedImageFetch from './OptimizedImageFetch'
import ImageFetch from './ImageFetch'

export default function Form() {
  const [optimized, setOptimized] = useState(true)

  return (
    <div>
      <h3 className="text-xl font-bold">Referential Equality</h3>

      <label htmlFor="optimized">
        Optimized
        <div>
          <input
            name="optimized"
            type="checkbox"
            checked={optimized}
            onChange={(e) => setOptimized(e.target.checked)}
          />
        </div>
      </label>
      {optimized ? <OptimizedImageFetch /> : <ImageFetch />}
    </div>
  )
}
