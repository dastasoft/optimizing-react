import { useRef, useEffect, useState } from 'react'

import { fibonacci } from '../../fibonacci'

const DELAY_TIME = 1000
const HANDICAP_FACTOR = 39

const imageFetch = async (url, hadicap) => {
  fibonacci(hadicap ? HANDICAP_FACTOR : 0)
  const response = await fetch(url)
  return response.json()
}

export default function CatImage({ params }) {
  const [dogImage, setDogImage] = useState(null)
  const [loading, setLoading] = useState(true)
  const isFirstRun = useRef(false)

  const breed = params()

  useEffect(() => {
    setLoading(true)
    isFirstRun.current = false
    imageFetch(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${breed}`,
      !isFirstRun.current
    )
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
