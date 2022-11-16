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
        As unoptimized version, every time you change the input the component
        rerenders, re assigns the constant and even is the &quot;same&quot;
        objects hasn&apos;t the same address on memory.
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
