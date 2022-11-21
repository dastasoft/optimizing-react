import { useEffect, useState } from 'react'

const DELAY_TIME = 1000

const imageFetch = async (url) => {
  const response = await fetch(url)
  return response.json()
}

export default function DogImage({ params }) {
  const [dogImage, setDogImage] = useState(null)
  const [loading, setLoading] = useState(true)

  const { breed } = params

  useEffect(() => {
    setLoading(true)
    imageFetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then((res) =>
        setTimeout(() => {
          setDogImage(res.message)
          setLoading(false)
        }, DELAY_TIME)
      )
      .catch(() => setLoading(false))
  }, [params])

  return loading ? (
    <div className="w-full my-2">Loading...</div>
  ) : (
    <figure className="w-full my-2 rounded-xl">
      {dogImage && <img src={dogImage} alt="cat" className="w-full h-auto" />}
    </figure>
  )
}
