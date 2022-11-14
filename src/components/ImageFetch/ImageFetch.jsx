import { useState } from 'react'
import DogImage from './DogImage'

export default function ImageFetch() {
  const [breed, setBreed] = useState('affenpinscher')
  const [dogName, setDogName] = useState('')

  const params = { breed }

  return (
    <div>
      <label htmlFor="dogName">
        Name
        <div>
          <input
            name="dogName"
            id="dogName"
            value={dogName}
            onChange={(e) => setDogName(e.target.value)}
          />
        </div>
      </label>
      <label htmlFor="breed">
        Breed
        <div>
          <select
            name="breed"
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          >
            <option value="affenpinscher">affenpinscher</option>
            <option value="bulldog">bulldog</option>
            <option value="cotondetulear">cotondetulear</option>
            <option value="pug">pug</option>
            <option value="sharpei">sharpei</option>
            <option value="tervuren">tervuren</option>
          </select>
        </div>
      </label>

      <DogImage params={params} />
    </div>
  )
}
