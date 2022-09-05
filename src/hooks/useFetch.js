// Hooks
import { useState, useEffect } from 'react'

export const useFetch = (uri) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    (async () => {
      setLoading(true)
      try {
        const response = await fetch(uri)
        const data = await response.json()
        setData(data)
      } catch (e) {
        setError(e.message)
      }
      setLoading(false)
    })()
  }, [uri])
  return { loading, error, data }
}
