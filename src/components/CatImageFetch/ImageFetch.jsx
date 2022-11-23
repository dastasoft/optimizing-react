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
        As a non-optimised version, every time you change the input the
        component is re-rendered, the function is re-declared and even if it is
        the &quot;same&quot; function, the memory address is different.
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
