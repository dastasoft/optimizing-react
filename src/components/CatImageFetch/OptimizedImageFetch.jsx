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
