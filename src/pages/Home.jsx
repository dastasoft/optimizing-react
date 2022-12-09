import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-3xl font-bold">useCallback vs useMemo</h1>
          <p className="py-6">
            Through the next proof of concept you will explore the differences
            between useCallback and useMemo and when to use it. Be sure to read
            the full article if you want to know more.
          </p>
          <div className="flex flex-col items-center sm:flex-row sm:place-content-center">
            <a
              href="https://www.freecodecamp.org/news/better-react-performance-usecallback-vs-usememo/"
              target="_blank"
              rel="noreferrer"
              className="btn mb-4 sm:mb-0 sm:mr-4"
            >
              Read the full article
            </a>
            <Link to="/use-callback" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
