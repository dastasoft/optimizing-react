import { useState } from 'react'
import OptimizedImageFetch from './OptimizedImageFetch'
import ImageFetch from './ImageFetch'

export default function CatImageFetch() {
  const [optimized, setOptimized] = useState(false)

  return (
    <div className="w-full flex justify-center">
      <div className="card w-100 max-w-5xl bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Referential Equality</h2>

          <div className="form-control my-2">
            <label
              className="label cursor-pointer flex justify-start"
              htmlFor="optimized"
            >
              <span className="label-text mr-2">Optimized</span>
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                name="optimized"
                checked={optimized}
                onChange={(e) => setOptimized(e.target.checked)}
              />
            </label>
          </div>
          {optimized ? <OptimizedImageFetch /> : <ImageFetch />}
        </div>
      </div>
    </div>
  )
}
