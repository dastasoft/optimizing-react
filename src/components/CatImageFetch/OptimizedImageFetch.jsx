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
        Optimized version wraps the function in a useCallback which returns a
        memorized version of the function which is fact the same, the function
        gets executed every time, but no re declared so it prevents unnecessary
        rerenders and dependant side effects.
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
