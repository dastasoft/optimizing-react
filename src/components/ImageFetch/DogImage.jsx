import { useEffect, useState } from 'react'

const imageFetch = async (url) => {
  const response = await fetch(url)

  return response.json()
}

export default function DogImage({ params }) {
  const [dogImage, setDogImage] = useState(null)

  useEffect(() => {
    imageFetch(`https://dog.ceo/api/breed/${params.breed}/images/random`).then(
      (res) => setDogImage(res.message)
    )
  }, [params])

  return <div>{dogImage && <img src={dogImage} alt="dog" />}</div>
}
