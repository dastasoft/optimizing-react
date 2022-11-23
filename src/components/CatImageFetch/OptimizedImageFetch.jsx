import { useCallback, useState } from 'react'

import CatImage from './CatImage'
import Form from './Form'

export default function OptimizedImageFetch() {
  const [breed, setBreed] = useState('abys')
  const [catName, setCatName] = useState('')

  const params = useCallback(() => {
    console.count('useCallback')
    return breed
  }, [breed])

  return (
    <div>
      <p>
        The optimised version wraps the function in a useCallback that returns a
        stored version of the function, same memory address, the function is
        executed each time, but is not reallocated in memory, thus avoiding
        unnecessary and dependent side effects.
      </p>
      <Form
        breed={breed}
        setBreed={setBreed}
        catName={catName}
        setCatName={setCatName}
      />
      <CatImage params={params} />
    </div>
  )
}
