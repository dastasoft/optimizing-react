import { useMemo, useState } from 'react'

import DogImage from './DogImage'
import Form from './Form'

export default function OptimizedImageFetch() {
  const [breed, setBreed] = useState('affenpinscher')
  const [dogName, setDogName] = useState('')

  const params = useMemo(() => {
    console.count('useMemo')
    return { breed }
  }, [breed])

  return (
    <div>
      <Form
        breed={breed}
        setBreed={setBreed}
        dogName={dogName}
        setDogName={setDogName}
      />
      <DogImage params={params} />
    </div>
  )
}
