// Styles
import { Wrap } from './style'

// Components
import { Card } from './components/Card'
import { Search } from './components/Search'

// Hooks
import { useState, useEffect, useRef } from 'react'
import { useFetch } from '../../hooks/useFetch'

// Providers
import { AnimatePresence } from 'framer-motion'
import { Section } from '../../ui/Section'
import { Affix } from 'antd'

export const Films = () => {
  const API_KEY = '824e129b' 
  const DEFAULT_REQUEST_LINK = `https://www.omdbapi.com/?apikey=${API_KEY}&`
  const [currentUri, setCurrentUri] = useState(DEFAULT_REQUEST_LINK)
  const [films, setFilms] = useState(null)
  const { loading, error, data } = useFetch(currentUri)
  const [floatSearch, setFloatSearch] = useState(false)

  // Search affix logic
  const searchRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setFloatSearch(true)
      } else {
        setFloatSearch(false)
      }
    })
  }, [])


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
      <Affix offsetTop={20} ref={searchRef}>
        <Search $DEFAULT_REQUEST_LINK={DEFAULT_REQUEST_LINK}
                $setCurrentUri={setCurrentUri}
                floatSearch={floatSearch}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                />
      </Affix>
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
