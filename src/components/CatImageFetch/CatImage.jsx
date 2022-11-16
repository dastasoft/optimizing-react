import { useEffect, useState } from 'react'

const DELAY_TIME = 1000

const imageFetch = async (url) => {
  const response = await fetch(url)
  return response.json()
}

export default function CatImage({ params }) {
  const [dogImage, setDogImage] = useState(null)
  const [loading, setLoading] = useState(true)

  const breed = params()

  useEffect(() => {
    setLoading(true)
    imageFetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breed}`)
      .then((res) =>
        setTimeout(() => {
          setDogImage(res[0].url)
          setLoading(false)
        }, DELAY_TIME)
      )
      .catch(() => setLoading(false))
  }, [params])

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div>{dogImage && <img src={dogImage} alt="dog" />}</div>
  )
}
