// Libraries
import styled from 'styled-components'
import { motion } from 'framer-motion'

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Wrap = styled(motion.form)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3.5rem;
  margin-bottom: 2rem;
  border-radius: 2rem;
  background-color: white;
  border: 1px solid #e8e8e8;

  @media screen and (max-width: 1500px) {
    height: 2.5rem;
  }
`;

export const SearchInput = styled.input`
  /* border-radius: 2rem 0 0 2rem; */
  width: 100%;
  margin-left: 1rem;
  height: 3rem;
  font-size: 1.7rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  border: none;
  background: white;
  border-radius: 2rem;

  @media screen and (max-width: 1500px) {
    height: 100%;
    font-size: 1rem;
  }

  :focus {
    outline: none;
  }
`;

export const SearchButton = styled(FontAwesomeIcon)`
  margin: 0 2rem;
  height: 50%;
  :hover {
    cursor: pointer;
  }
`;
