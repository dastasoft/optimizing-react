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
      <p>
        Surrounding with useMemo returns the same object previously stored in
        memory, same address, equality is true so avoids unnecessary rendering
        and dependent side effects.
      </p>
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
