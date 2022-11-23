import { useState } from 'react'

import DogImage from './DogImage'
import Form from './Form'

export default function ImageFetch() {
  const [breed, setBreed] = useState('affenpinscher')
  const [dogName, setDogName] = useState('')

  const params = { breed }

  return (
    <div>
      <p>
        In the non-optimised version, every time the input is changed, the
        component re-renders, re-assigns the constant and even if the
        &quot;same&quot; objects do not have the same address in memory.
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
