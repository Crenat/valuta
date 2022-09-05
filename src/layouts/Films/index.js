// Styles
import { Wrap } from './style'

// Components
import { Card } from './components/Card'
import { Search } from './components/Search'

// Hooks
import { useState, useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'

// Providers
import { AnimatePresence } from 'framer-motion'
import { Section } from '../../ui/Section'

export const Films = () => {
  const API_KEY = '824e129b' 
  const DEFAULT_REQUEST_LINK = `http://www.omdbapi.com/?apikey=${API_KEY}&`
  const [currentUri, setCurrentUri] = useState(DEFAULT_REQUEST_LINK)
  const [films, setFilms] = useState(null)
  const { loading, error, data } = useFetch(currentUri)
  useEffect(() => {
    if (data?.Response !== 'False') {
      if (data?.Search) {
        const { Search: films } = data
        setFilms(films)
      }
    }
  }, [data, error])
  return (
    <AnimatePresence>
      <Section title="Бібліотека фільмів">
        <Search $DEFAULT_REQUEST_LINK={DEFAULT_REQUEST_LINK}
                $setCurrentUri={setCurrentUri}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                />
        <Wrap>
          {loading && (
            <>
              <Card loading={loading} />
              <Card loading={loading} />
              <Card loading={loading} />
              <Card loading={loading} />
              <Card loading={loading} />
              <Card loading={loading} />
              <Card loading={loading} />
              <Card loading={loading} />
              <Card loading={loading} />
              <Card loading={loading} />
              <Card loading={loading} />
            </>
          )}
          {!loading && films !== null && films?.map(film => {
            const { Title = '', Year = '', Poster = '' } = film
            return (
              <Card key={Title}  $title={Title} $year={Year} $poster={Poster} />
            )
          })}
        </Wrap>
      </Section>
    </AnimatePresence>

    
  )
}
