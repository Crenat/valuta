// Styles
import { Wrap, SearchInput } from './style'

// Hooks
import { useForm } from 'react-hook-form';
import { useRequest } from 'ahooks';

export const Search = ({
  $setFilms: setFilms,
  $DEFAULT_REQUEST_LINK: DEFAULT_REQUEST_LINK,
  $setCurrentUri: setCurrentUri,
  floatSearch,
}) => {
  const { register, handleSubmit } = useForm();

  const handleSearch = e => {
    setCurrentUri(`${DEFAULT_REQUEST_LINK}s=${e.target.value}`)
  }

  const { run } = useRequest(handleSearch, {
    debounceWait: 400,
    manual: true,
  })

  return (
    <Wrap onSubmit={handleSubmit(handleSearch)} $floatSearch={floatSearch}>
      <SearchInput {...register('requestTitle')} placeholder="Введіть назву фільму" onChange={run} />
    </Wrap>
  );
}
