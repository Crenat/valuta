// Styles
import { Wrap, Title, Image, Year } from './style'

// Components
import { Skeleton } from 'antd'

export const Card = ({ $poster: poster = '', $title: title = '', $description: description = '', $year: year = 'N/A', loading = false }) => {
  return (
    <Wrap>
      {loading ? (
          <Skeleton active={loading} />
      ) : (
        <>
          <Image src={poster} />
          <Title>{title}</Title>
          <Year>{year}</Year>
        </>
      )}
    </Wrap>
  )
}
