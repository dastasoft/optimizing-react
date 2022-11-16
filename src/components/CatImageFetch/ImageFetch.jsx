import { useState } from 'react'

import CatImage from './CatImage'
import Form from './Form'

export default function ImageFetch() {
  const [breed, setBreed] = useState('abys')
  const [catName, setCatName] = useState('')

  const params = () => breed

  return (
    <div>
      <p>
        As unoptimized version, every time you change the input the component
        rerenders, re declares the function and even is the &quot;same&quot;
        function the address on memory is different
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
