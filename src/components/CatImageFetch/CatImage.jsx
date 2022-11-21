import { useEffect, useState } from 'react'

const DELAY_TIME = 1000

const imageFetch = async (url) => {
  const response = await fetch(url)
  return response.json()
}

export default function CatImage({ params }) {
  const [catImage, setCatImage] = useState(null)
  const [loading, setLoading] = useState(true)

  const breed = params()

  useEffect(() => {
    setLoading(true)
    imageFetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breed}`)
      .then((res) =>
        setTimeout(() => {
          setCatImage(res[0].url)
          setLoading(false)
        }, DELAY_TIME)
      )
      .catch(() => setLoading(false))
  }, [params])

  return loading ? (
    <div className="w-full my-2">Loading...</div>
  ) : (
    <figure className="w-full my-2 rounded-xl">
      {catImage && <img src={catImage} alt="cat" className="w-full h-auto" />}
    </figure>
  )
}
