import { useEffect, useState } from 'react'

const imageFetch = async (url) => {
  const response = await fetch(url)

  return response.json()
}

export default function ImageFetch() {
  const [breed, setBreed] = useState('affenpinscher')
  const [dogImage, setDogImage] = useState(null)

  const params = { breed }

  useEffect(() => {
    imageFetch(`https://dog.ceo/api/breed/${params.breed}/images/random`).then(
      (res) => setDogImage(res.message)
    )
  }, [params])

  return (
    <div>
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
      <div>{dogImage && <img src={dogImage} alt="dog" />}</div>
    </div>
  )
}
