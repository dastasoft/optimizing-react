import { useEffect, useRef, useState } from 'react'

const MAX_BLOCKS = 12
const PACE = 1

export default function usePerformanceGauge() {
  const [numBlocks, setNumBlocks] = useState(1)
  const multiplier = useRef(1)

  useEffect(() => {
    if (numBlocks === MAX_BLOCKS) multiplier.current = -1
    else if (numBlocks === 1) multiplier.current = 1

    const timer = setInterval(() => {
      setNumBlocks(numBlocks + PACE * multiplier.current)
    }, 1000 / 60)
    return () => clearInterval(timer)
  })

  return [numBlocks]
}
